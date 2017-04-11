import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { tinymce as TinyMce } from 'tinymce';

import { TinyMceComponent, TINYMCE_SETTINGS_TOKEN } from './tinymce.component';

export * from './tinymce.component';
export * from './tinymce.default';
export * from './tinymce.events';

/**
 * @internal
 */
export function tinyMceDirectives() {
  return [
    TinyMceComponent
  ];
};

/**
 * Modul für ein TinyMce Input
 */
@NgModule({
  imports: [CommonModule],
  declarations: [tinyMceDirectives()],
  exports: [tinyMceDirectives()]
})
export class TinyMceModule {
  static forRoot(settings: TinyMce.Settings): ModuleWithProviders {
    return {
      ngModule: TinyMceModule,
      providers: [
        { provide: TINYMCE_SETTINGS_TOKEN, useValue: settings }
      ]
    };
  }
}
