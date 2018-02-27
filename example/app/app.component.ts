import { Component, ViewEncapsulation, ViewChild } from '@angular/core';

import { tinymceDefaultSettings } from '../../src';

import * as TinyMce from 'tinymce';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {

  public content = '';
  public content2 = '';

  public customSettings: TinyMce.Settings | any;

  constructor() {
    this.customSettings = tinymceDefaultSettings();
    this.customSettings.toolbar = 'link | bullist numlist outdent indent';
    this.customSettings.plugins = 'lists link';
  }
}
