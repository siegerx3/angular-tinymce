# angular-tinymce

## Features

- Supports all settings, events and plugins ([TinyMCE Documentation](https://www.tinymce.com/docs/configure/integration-and-setup/))
- Supports AoT-Compilation

## Usage

First, install this and the `tinymce` package
```
npm install angular-tinymce
npm install tinymce
```
#### Include or Import

##### With [angular-cli](https://github.com/angular/angular-cli):

Include the tinymce and all the plugin scripts you need in your `angular-cli.json`

```javascript
"scripts": [
    "../node_modules/tinymce/tinymce.js",
    "../node_modules/tinymce/themes/modern/theme.js"
]
```

##### Without [angular-cli](https://github.com/angular/angular-cli) (untested):

Import tinymce and all the plugin scripts in your `module` or `component` where you want to use `angular-tinymce` 
```typescript
import tinymce from 'tinymce/tinymce.js';
import 'tinymce/themes/modern/theme';
```

#### Setup
Import `TinymceModule` in your main or feature `module`:

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
If you want to bind any TinyMCE event just use the output property:
(Event names are all lowercase)
```html
<tinymce-editor (click)='yourHandler($event)'></tinymce-editor>
```
All events are supported.
[List of all events](https://www.tinymce.com/docs/advanced/events/)
