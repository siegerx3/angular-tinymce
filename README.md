# angular-tinymce

[![npm version](https://badge.fury.io/js/angular-tinymce.svg)](https://badge.fury.io/js/angular-tinymce)

## Important changes

- `tinymce-editor` is now `angular-tinymce`
- Due to building changes the TinyMce script won't be loaded automatically anymore. The app will now have a smaller filesize but you have to include the tinymce script manually. Check under "Include or Import" how to do so.

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
<angular-tinymce [formControl]='contentControl'></angular-tinymce>
```
or
```html
<angular-tinymce [(ngModel)]='content'></angular-tinymce>
```

#### Configuration

##### Settings
If you want to use different settings for each editor you can bind them to the `settings` input property:

```html
<angular-tinymce [settings]='yourSettingsObject'></angular-tinymce>
```

##### Events
If you want to bind any TinyMce event, just use the output property:
(Event names are all lowercase)
```html
<angular-tinymce (click)='yourHandler($event)'></angular-tinymce>
```
All events are supported.
[List of all events](https://www.tinymce.com/docs/advanced/events/)
