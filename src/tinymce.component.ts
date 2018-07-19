import {
  Component,
  NgZone,
  forwardRef,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  SimpleChange,
  Inject,
  AfterViewInit,
  OnDestroy,
  InjectionToken,
  ViewChild,
  ElementRef
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { interval } from 'rxjs';
import { skipWhile, take } from 'rxjs/operators';


import { TinyMceEvents } from './tinymce.events';

import * as TinyMce from 'tinymce';
declare var tinymce: TinyMce.EditorManager;

export const TINYMCE_SETTINGS_TOKEN = new InjectionToken('angular-tinymce-settings');

@Component({
  selector: 'angular-tinymce',
  template: `<textarea style="visibility: hidden" #tinymce ></textarea>`,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TinyMceComponent),
    multi: true
  }]
})
export class TinyMceComponent implements ControlValueAccessor, AfterViewInit, OnDestroy, OnChanges {

  beforeInitValue: string;
  disabled: boolean;
  fromWriteValue: boolean;

  @Input()
  isDisabled: boolean;

  // Config Properties
  private _settings: TinyMce.Settings;

  get settings(): TinyMce.Settings {
    return this._settings;
  }

  @Input() set settings(value) {
    if (value) {
      this._settings = value;
    }
  }
  @Input() selector: string;

  // Native events
  @Output() public click: EventEmitter<MouseEvent> = new EventEmitter();
  @Output() public dblclick: EventEmitter<MouseEvent> = new EventEmitter();
  @Output() public mousedown: EventEmitter<MouseEvent> = new EventEmitter();
  @Output() public mouseup: EventEmitter<MouseEvent> = new EventEmitter();
  @Output() public mousemove: EventEmitter<MouseEvent> = new EventEmitter();
  @Output() public mouseover: EventEmitter<MouseEvent> = new EventEmitter();
  @Output() public mouseout: EventEmitter<MouseEvent> = new EventEmitter();
  @Output() public mouseenter: EventEmitter<MouseEvent> = new EventEmitter();
  @Output() public mouseleave: EventEmitter<MouseEvent> = new EventEmitter();
  @Output() public keydown: EventEmitter<KeyboardEvent> = new EventEmitter();
  @Output() public keypress: EventEmitter<KeyboardEvent> = new EventEmitter();
  @Output() public keyup: EventEmitter<KeyboardEvent> = new EventEmitter();
  @Output() public contextmenu: EventEmitter<MouseEvent> = new EventEmitter();
  @Output() public paste: EventEmitter<ClipboardEvent> = new EventEmitter();

  // Core events
  @Output() public init: EventEmitter<TinyMce.Events.Event> = new EventEmitter();
  @Output() public focus: EventEmitter<TinyMce.Events.FocusBlurEvent> = new EventEmitter();
  @Output() public blur: EventEmitter<TinyMce.Events.FocusBlurEvent> = new EventEmitter();
  @Output() public beforesetcontent: EventEmitter<TinyMce.Events.ContentEvent> = new EventEmitter();
  @Output() public setcontent: EventEmitter<TinyMce.Events.ContentEvent> = new EventEmitter();
  @Output() public getcontent: EventEmitter<TinyMce.Events.ContentEvent> = new EventEmitter();
  @Output() public preprocess: EventEmitter<TinyMce.Events.ProcessEvent> = new EventEmitter();
  @Output() public postprocess: EventEmitter<TinyMce.Events.ProcessEvent> = new EventEmitter();
  @Output() public nodechange: EventEmitter<TinyMce.Events.NodeChangeEvent> = new EventEmitter();
  @Output() public undo: EventEmitter<TinyMce.Events.UndoRedoEvent> = new EventEmitter();
  @Output() public redo: EventEmitter<TinyMce.Events.UndoRedoEvent> = new EventEmitter();
  @Output() public change: EventEmitter<TinyMce.Events.ChangeEvent> = new EventEmitter();
  @Output() public dirty: EventEmitter<TinyMce.Events.Event> = new EventEmitter();
  @Output() public remove: EventEmitter<TinyMce.Events.Event> = new EventEmitter();
  @Output() public execcommand: EventEmitter<TinyMce.Events.CommandEvent> = new EventEmitter();
  @Output() public pastepreprocess: EventEmitter<TinyMce.Events.ContentEvent> = new EventEmitter();
  @Output() public pastepostprocess: EventEmitter<TinyMce.Events.ContentEvent> = new EventEmitter();

  editor: TinyMce.Editor;
  @ViewChild('tinymce') elem: ElementRef;


  writeValue(obj: any): void {
    const val = obj != null ? obj.toString() : '';
    if (this.editor) {
      this.fromWriteValue = true;
      this.editor.setContent(val);
    } else {
      this.beforeInitValue = val;
    }
  }

  onModelChange: Function = () => { };
  onModelTouched: Function = () => { };

  registerOnChange(fn: any): void {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onModelTouched = fn;
  }

  setDisabledState?(disabled: boolean): void {
    this.disabled = disabled;
    this.setEditorMode(disabled);
  }

  setEditorMode(disabled: boolean) {
    if (this.editor) {
      if (disabled) {
        this.editor.setMode('readonly');
      } else {
        this.editor.setMode('design');
      }
    }
  }

  constructor(@Inject(TINYMCE_SETTINGS_TOKEN) private _input_settings: any, private ngZone: NgZone) {

    this._setSettings(this.settings);

    if (!(window as any).tinymce && !document.getElementById('tinymceScript')) {
      const tag = document.createElement('script');
      tag.id = 'tinymceScript';
      tag.setAttribute('src', (this.settings as any).tinymceScriptURL || 'assets/tinymce/tinymce.min.js');
      tag.onload = () => {
        tinymce.baseURL = (this.settings as any).baseURL;
      };
      document.body.appendChild(tag);
    }
  }

  private _setSettings(settings: any) {
    const localSettings = settings || this._input_settings || {};
    this.settings = Object.assign({}, localSettings);
    if ((window as any).tinymce) {
      tinymce.baseURL = (this.settings as any).baseURL;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    let needReinit = false;
    if (changes === null) {
      return;
    }

    if (changes['settings']) {
      if (changes['settings'].currentValue) {
        this._setSettings(changes['settings'].currentValue);
        needReinit = true;
      }
    }
    if (changes['isDisabled']) {
      this.setDisabledState(changes['isDisabled'].currentValue);
    }

    if (needReinit) {
      this.reInitEditor();
    }
  }

  ngAfterViewInit(): void {
    this.initEditor();
  }

  initEditor(): void {
    this.settings.target = this.elem.nativeElement;
    this.initCallbacks(this.settings);
    interval(300)
      .pipe(
        skipWhile(() => !(window as any).tinymce),
        take(1)
      )
      .subscribe(() => {
        tinymce.init(this.settings);
      });
  }


  reInitEditor(): void {
    if (this.editor) {
      this.ngZone.run(() => {
        this.triggerChange(true);
      });
    }

    this.removeEditor();
    this.initEditor();
  }

  initCallbacks(settings: TinyMce.Settings): void {

    const origSetup = settings.setup;
    settings.setup = (editor: TinyMce.Editor) => {
      editor.on(TinyMceEvents.Init, (e: TinyMce.Events.Event) => this.init.emit(e));
      if (origSetup) {
        origSetup(editor);
      }
    };

    const origInstanceCallback = settings.init_instance_callback;
    settings.init_instance_callback = (editor: TinyMce.Editor) => {
      this.editor = editor;
      this.setEditorMode(this.disabled);
      if (this.beforeInitValue != null) {
        this.editor.setContent(this.beforeInitValue);
      }
      if (origInstanceCallback) {
        origInstanceCallback(editor);
      }

      editor.on(TinyMceEvents.Click, (e: MouseEvent) => this.click.emit(e));
      editor.on(TinyMceEvents.DblClick, (e: MouseEvent) => this.dblclick.emit(e));
      editor.on(TinyMceEvents.MouseDown, (e: MouseEvent) => this.mousedown.emit(e));
      editor.on(TinyMceEvents.MouseUp, (e: MouseEvent) => this.mouseup.emit(e));
      editor.on(TinyMceEvents.MouseMove, (e: MouseEvent) => this.mousemove.emit(e));
      editor.on(TinyMceEvents.MouseOver, (e: MouseEvent) => this.mouseover.emit(e));
      editor.on(TinyMceEvents.MouseOut, (e: MouseEvent) => this.mouseout.emit(e));
      editor.on(TinyMceEvents.MouseEnter, (e: MouseEvent) => this.mouseenter.emit(e));
      editor.on(TinyMceEvents.MouseLeave, (e: MouseEvent) => this.mouseleave.emit(e));
      editor.on(TinyMceEvents.KeyDown, (e: KeyboardEvent) => this.keydown.emit(e));
      editor.on(TinyMceEvents.KeyPress, (e: KeyboardEvent) => this.keypress.emit(e));
      editor.on(TinyMceEvents.KeyUp, (e: KeyboardEvent) => {
        this.ngZone.run(() => {
          this.triggerChange();
        });
        this.keyup.emit(e);
      });
      editor.on(TinyMceEvents.ContextMenu, (e: MouseEvent) => this.contextmenu.emit(e));
      editor.on(TinyMceEvents.Paste, (e: ClipboardEvent) => this.paste.emit(e));

      editor.on(TinyMceEvents.Focus, (e: TinyMce.Events.FocusBlurEvent) => this.focus.emit(e));
      editor.on(TinyMceEvents.Blur, (e: TinyMce.Events.FocusBlurEvent) => this.blur.emit(e));
      editor.on(TinyMceEvents.BeforeSetContent, (e: TinyMce.Events.ContentEvent) => this.beforesetcontent.emit(e));
      editor.on(TinyMceEvents.SetContent, (e: TinyMce.Events.ContentEvent) => {
        this.ngZone.run(() => {
          this.triggerChange();
        });
        this.setcontent.emit(e);
      });
      editor.on(TinyMceEvents.GetContent, (e: TinyMce.Events.ContentEvent) => this.getcontent.emit(e));
      editor.on(TinyMceEvents.PreProcess, (e: TinyMce.Events.ProcessEvent) => this.preprocess.emit(e));
      editor.on(TinyMceEvents.PostProcess, (e: TinyMce.Events.ProcessEvent) => this.postprocess.emit(e));
      editor.on(TinyMceEvents.NodeChange, (e: TinyMce.Events.NodeChangeEvent) => this.nodechange.emit(e));
      editor.on(TinyMceEvents.Undo, (e: TinyMce.Events.UndoRedoEvent) => this.undo.emit(e));
      editor.on(TinyMceEvents.Redo, (e: TinyMce.Events.UndoRedoEvent) => this.redo.emit(e));
      editor.on(TinyMceEvents.Change, (e: TinyMce.Events.ChangeEvent) => {
        this.ngZone.run(() => {
          this.triggerChange();
        });
        this.change.emit(e);
      });
      editor.on(TinyMceEvents.Dirty, (e: TinyMce.Events.Event) => this.dirty.emit(e));
      editor.on(TinyMceEvents.Remove, (e: TinyMce.Events.Event) => this.remove.emit(e));
      editor.on(TinyMceEvents.ExecCommand, (e: TinyMce.Events.CommandEvent) => {
        this.ngZone.run(() => {
          this.triggerChange();
        });
        this.execcommand.emit(e);
      });
      editor.on(TinyMceEvents.PastePreProcess, (e: TinyMce.Events.ContentEvent) => this.pastepreprocess.emit(e));
      editor.on(TinyMceEvents.PastePostProcess, (e: TinyMce.Events.ContentEvent) => this.pastepostprocess.emit(e));
    };
  }

  triggerChange(forReInit = false) {
    if (this.fromWriteValue) {
      this.fromWriteValue = false;
    } else {
      let content = this.editor.getContent();
      if (!content) {
        content = '';
      }
      if (forReInit) {
        this.beforeInitValue = content;
      }
      this.onModelChange(content);
      this.onModelTouched();
    }
  }

  removeEditor(): void {
    if (this.editor) {
      (tinymce as any).remove(this.editor);
    }
  }

  ngOnDestroy(): void {
    this.removeEditor();
  }
}
