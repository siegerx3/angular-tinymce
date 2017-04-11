# angular-tinymce

[![npm version](https://badge.fury.io/js/angular-tinymce.svg)](https://badge.fury.io/js/angular-tinymce)

## Features

- Supports all settings, events and plugins ([TinyMce Documentation](https://www.tinymce.com/docs/configure/integration-and-setup/))
- Supports AoT-Compilation

## Usage

First, install the package
```
npm install angular-tinymce
```
#### Include or Import

##### Method 1:

Include tinymce and all the plugin scripts you need in your `angular-cli.json`

```javascript
"scripts": [
    "../node_modules/tinymce/tinymce.js",
    "../node_modules/tinymce/themes/modern/theme.js"
]
```

##### Method 2:

Copy tinymce and all the plugins/themes you need into your asset folder and set following properties in the settings:

```typescript
{
    tinymceScriptURL: 'assets/tinymce/tinymce.min.js',
    baseURL: '',
    skin_url: '/assets/tinymce/skins/lightgray',
    theme_url: '/assets/tinymce/themes/modern/theme.min.js'
}
```

#### Setup
Import `TinyMceModule` in your main or feature `module`:

```typescript
import { TinyMceModule } from 'angular-tinymce';

@NgModule({
	imports: [
		...
		TinyMceModule.forRoot({...})
	],
	...
})
```

The `forRoot()` method expects a global settings object. You can either define your own or use the default settings that come with this module.
```typescript
import { tinymceDefaultSettings } from 'angular-tinymce';

TinyMceModule.forRoot(tinymceDefaultSettings())
```

Usage in HTML
```html
<tinymce-editor [formControl]='contentControl'></tinymce-editor>
```
or
```html
<tinymce-editor [(ngModel)]='content'></tinymce-editor>
```

#### Configuration

##### Settings
If you want to use different settings for each editor you can bind them to the `settings` input property:

```html
<tinymce-editor [settings]='yourSettingsObject'></tinymce-editor>
```

##### Events
If you want to bind any TinyMce event, just use the output property:
(Event names are all lowercase)
```html
<tinymce-editor (click)='yourHandler($event)'></tinymce-editor>
```
All events are supported.
[List of all events](https://www.tinymce.com/docs/advanced/events/)
