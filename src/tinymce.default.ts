import { tinymce as TinyMce } from 'tinymce';

export function tinymceDefaultSettings(): TinyMce.Settings | any {
  return {
    tinymceScriptURL: '/assets/tinymce/tinymce.min.js',
    theme_url: '/assets/tinymce/themes/modern/theme.min.js',
    skin_url: '/assets/tinymce/skins/lightgray'
  };
}
