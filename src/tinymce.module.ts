import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { tinymce as TinyMce } from 'tinymce';

import { TinyMceComponent, TINYMCE_SETTINGS_TOKEN } from './tinymce.component';

/**
 * Modul für ein TinyMce Input
 */
@NgModule({
  imports: [CommonModule],
  declarations: [TinyMceComponent],
  exports: [TinyMceComponent]
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
