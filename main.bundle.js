webpackJsonp(["main"],{

/***/ "./config/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./example/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./example/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./example/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"greetings center\">\n  <h1>Angular Tinymce</h1>\n\n  <section id=\"global-config\">\n    <h2>With global config</h2>\n    <div class=\"left\">\n      <angular-tinymce [(ngModel)]='content'></angular-tinymce>\n    </div>\n    <div class=\"right\">\n      <p>{{ content }}</p>\n    </div>\n  </section>\n  <section id=\"custom-config\">\n    <h2>With custom config</h2>\n    <div class=\"left\">\n      <angular-tinymce [settings]=\"customSettings\" [(ngModel)]='content2'></angular-tinymce>\n    </div>\n    <div class=\"right\">\n        <p>{{ content2 }}</p>\n    </div>\n  </section>\n</div>"

/***/ }),

/***/ "./example/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Montserrat|Open+Sans\");\nhtml, body {\n  color: #444;\n  font-family: 'Open Sans', sans-serif;\n  background: #4aabc9;\n  background: linear-gradient(135deg, #4aabc9 0%, #7db9e8 100%);\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%; }\nh1 {\n  font-family: 'Montserrat';\n  font-weight: 200;\n  padding: 30px;\n  margin: 0; }\na.neat {\n  color: inherit;\n  text-decoration: none; }\na.shadowy {\n  padding: .5rem 1rem;\n  -webkit-transition: .2s all ease-in;\n  transition: .2s all ease-in; }\na.shadowy:hover {\n    color: #4aabc9;\n    background-color: #fff; }\n.greetings {\n  color: #fff; }\n.center {\n  height: 100%;\n  width: 60%;\n  margin: auto;\n  text-align: center; }\nsection {\n  overflow: hidden;\n  width: 100%; }\nsection .left {\n    float: left;\n    width: 50%; }\nsection .right {\n    float: right;\n    width: 50%; }\n"

/***/ }),

/***/ "./example/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src__ = __webpack_require__("./src/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.content = '';
        this.content2 = '';
        this.customSettings = Object(__WEBPACK_IMPORTED_MODULE_1__src__["b" /* tinymceDefaultSettings */])();
        this.customSettings.toolbar = 'link | bullist numlist outdent indent';
        this.customSettings.plugins = 'lists link';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./example/app/app.component.html"),
            styles: [__webpack_require__("./example/app/app.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewEncapsulation */].None,
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./example/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src__ = __webpack_require__("./src/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./example/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__src__["a" /* TinyMceModule */].forRoot(Object(__WEBPACK_IMPORTED_MODULE_3__src__["b" /* tinymceDefaultSettings */])()),
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./example/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./example/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_environment__ = __webpack_require__("./config/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__config_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tinymce_component__ = __webpack_require__("./src/tinymce.component.ts");
/* unused harmony reexport TinyMceComponent */
/* unused harmony reexport TINYMCE_SETTINGS_TOKEN */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tinymce_default__ = __webpack_require__("./src/tinymce.default.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__tinymce_default__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tinymce_events__ = __webpack_require__("./src/tinymce.events.ts");
/* unused harmony reexport TinyMceEvents */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tinymce_module__ = __webpack_require__("./src/tinymce.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__tinymce_module__["a"]; });






/***/ }),

/***/ "./src/tinymce.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TINYMCE_SETTINGS_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TinyMceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_skipWhile__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/skipWhile.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_interval__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/interval.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_fromEvent__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tinymce_events__ = __webpack_require__("./src/tinymce.events.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var TINYMCE_SETTINGS_TOKEN = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* InjectionToken */]('angular-tinymce-settings');
var TinyMceComponent = /** @class */ (function () {
    function TinyMceComponent(_input_settings, ngZone) {
        var _this = this;
        this._input_settings = _input_settings;
        this.ngZone = ngZone;
        // Native events
        this.click = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.dblclick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.mousedown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.mouseup = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.mousemove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.mouseover = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.mouseout = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.mouseenter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.mouseleave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.keydown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.keypress = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.keyup = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.contextmenu = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.paste = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        // Core events
        this.init = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.focus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.blur = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.beforesetcontent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.setcontent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.getcontent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.preprocess = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.postprocess = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.nodechange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.undo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.redo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.dirty = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.remove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.execcommand = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.pastepreprocess = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.pastepostprocess = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
        this._setSettings(this.settings);
        if (!window.tinymce && !document.getElementById('tinymceScript')) {
            var tag = document.createElement('script');
            tag.id = 'tinymceScript';
            tag.setAttribute('src', this.settings.tinymceScriptURL || 'assets/tinymce/tinymce.min.js');
            tag.onload = function () {
                tinymce.baseURL = _this.settings.baseURL;
            };
            document.body.appendChild(tag);
        }
    }
    TinyMceComponent_1 = TinyMceComponent;
    Object.defineProperty(TinyMceComponent.prototype, "settings", {
        get: function () {
            return this._settings;
        },
        set: function (value) {
            if (value) {
                this._settings = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    TinyMceComponent.prototype.writeValue = function (obj) {
        var val = obj != null ? obj.toString() : '';
        if (this.editor) {
            this.fromWriteValue = true;
            this.editor.setContent(val);
        }
        else {
            this.beforeInitValue = val;
        }
    };
    TinyMceComponent.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    TinyMceComponent.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    TinyMceComponent.prototype.setDisabledState = function (disabled) {
        this.disabled = disabled;
        this.setEditorMode(disabled);
    };
    TinyMceComponent.prototype.setEditorMode = function (disabled) {
        if (this.editor) {
            if (disabled) {
                this.editor.setMode('readonly');
            }
            else {
                this.editor.setMode('design');
            }
        }
    };
    TinyMceComponent.prototype._setSettings = function (settings) {
        var localSettings = settings || this._input_settings || {};
        this.settings = Object.assign({}, localSettings);
        if (window.tinymce) {
            tinymce.baseURL = this.settings.baseURL;
        }
    };
    TinyMceComponent.prototype.ngOnChanges = function (changes) {
        var needReinit = false;
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
    };
    TinyMceComponent.prototype.ngAfterViewInit = function () {
        this.initEditor();
    };
    TinyMceComponent.prototype.initEditor = function () {
        var _this = this;
        this.settings.target = this.elem.nativeElement;
        this.initCallbacks(this.settings);
        __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].interval(300)
            .skipWhile(function () { return !window.tinymce; })
            .take(1)
            .subscribe(function () {
            tinymce.init(_this.settings);
        });
    };
    TinyMceComponent.prototype.reInitEditor = function () {
        var _this = this;
        if (this.editor) {
            this.ngZone.run(function () {
                _this.triggerChange(true);
            });
        }
        this.removeEditor();
        this.initEditor();
    };
    TinyMceComponent.prototype.initCallbacks = function (settings) {
        var _this = this;
        var origSetup = settings.setup;
        settings.setup = function (editor) {
            editor.on(__WEBPACK_IMPORTED_MODULE_8__tinymce_events__["a" /* TinyMceEvents */].Init, function (e) { return _this.init.emit(e); });
            if (origSetup) {
                origSetup(editor);
            }
        };
        var origInstanceCallback = settings.init_instance_callback;
        settings.init_instance_callback = function (editor) {
            _this.editor = editor;
            _this.setEditorMode(_this.disabled);
            if (_this.beforeInitValue != null) {
                _this.editor.setContent(_this.beforeInitValue);
            }
            if (origInstanceCallback) {
                origInstanceCallback(editor);
            }
            editor.on(__WEBPACK_IMPORTED_MODULE_8__tinymce_events__["a" /* TinyMceEvents */].Click, function (e) { return _this.click.emit(e); });
            editor.on(__WEBPACK_IMPORTED_MODULE_8__tinymce_events__["a" /* TinyMceEvents */].DblClick, function (e) { return _this.dblclick.emit(e); });
            editor.on(__WEBPACK_IMPORTED_MODULE_8__tinymce_events__["a" /* TinyMceEvents */].MouseDown, function (e) { return _this.mousedown.emit(e); });
            editor.on(__WEBPACK_IMPORTED_MODULE_8__tinymce_events__["a" /* TinyMceEvents */].MouseUp, function (e) { return _this.mouseup.emit(e); });
            editor.on(__WEBPACK_IMPORTED_MODULE_8__tinymce_events__["a" /* TinyMceEvents */].MouseMove, function (e) { return _this.mousemove.emit(e); });
            editor.on(__WEBPACK_IMPORTED_MODULE_8__tinymce_events__["a" /* TinyMceEvents */].MouseOver, function (e) { return _this.mouseover.emit(e); });
            editor.on(__WEBPACK_IMPORTED_MODULE_8__tinymce_events__["a" /* TinyMceEvents */].MouseOut, function (e) { return _this.mouseout.emit(e); });
            editor.on(__WEBPACK_IMPORTED_MODULE_8__tinymce_events__["a" /* TinyMceEvents */].MouseEnter, function (e) { return _this.mouseenter.emit(e); });
            editor.on(__WEBPACK_IMPORTED_MODULE_8__tinymce_events__["a" /* TinyMceEvents */].MouseLeave, function (e) { return _this.mouseleave.emit(e); });
            editor.on(__WEBPACK_IMPORTED_MODULE_8__tinymce_events__["a" /* TinyMceEvents */].KeyDown, function (e) { return _this.keydown.emit(e); });
            editor.on(__WEBPACK_IMPORTED_MODULE_8__tinymce_events__["a" /* TinyMceEvents */].KeyPress, function (e) { return _this.keypress.emit(e); });
            editor.on(__WEBPACK_IMPORTED_MODULE_8__tinymce_events__["a" /* TinyMceEvents */].KeyUp, function (e) {
                _this.ngZone.run(function () {
                    _this.triggerChange();
                });
                _this.keyup.emit(e);
            });
            editor.on(__WEBPACK_IMPORTED_MODULE_8__tinymce_events__["a" /* TinyMceEvents */].ContextMenu, function (e) { return _this.contextmenu.emit(e); });
            editor.on(__WEBPACK_IMPORTED_MODULE_8__tinymce_events__["a" /* TinyMceEvents */].Paste, function (e) { return _this.paste.emit(e); });
            editor.on(__WEBPACK_IMPORTED_MODULE_8__tinymce_events__["a" /* TinyMceEvents */].Focus, function (e) { return _this.focus.emit(e); });
            editor.on(__WEBPACK_IMPORTED_MODULE_8__tinymce_events__["a" /* TinyMceEvents */].Blur, function (e) { return _this.blur.emit(e); });
            editor.on(__WEBPACK_IMPORTED_MODULE_8__tinymce_events__["a" /* TinyMceEvents */].BeforeSetContent, function (e) { return _this.beforesetcontent.emit(e); });
            editor.on(__WEBPACK_IMPORTED_MODULE_8__tinymce_events__["a" /* TinyMceEvents */].SetContent, function (e) {
                _this.ngZone.run(function () {
                    _this.triggerChange();
                });
                _this.setcontent.emit(e);
            });
            editor.on(__WEBPACK_IMPORTED_MODULE_8__tinymce_events__["a" /* TinyMceEvents */].GetContent, function (e) { return _this.getcontent.emit(e); });
            editor.on(__WEBPACK_IMPORTED_MODULE_8__tinymce_events__["a" /* TinyMceEvents */].PreProcess, function (e) { return _this.preprocess.emit(e); });
            editor.on(__WEBPACK_IMPORTED_MODULE_8__tinymce_events__["a" /* TinyMceEvents */].PostProcess, function (e) { return _this.postprocess.emit(e); });
            editor.on(__WEBPACK_IMPORTED_MODULE_8__tinymce_events__["a" /* TinyMceEvents */].NodeChange, function (e) { return _this.nodechange.emit(e); });
            editor.on(__WEBPACK_IMPORTED_MODULE_8__tinymce_events__["a" /* TinyMceEvents */].Undo, function (e) { return _this.undo.emit(e); });
            editor.on(__WEBPACK_IMPORTED_MODULE_8__tinymce_events__["a" /* TinyMceEvents */].Redo, function (e) { return _this.redo.emit(e); });
            editor.on(__WEBPACK_IMPORTED_MODULE_8__tinymce_events__["a" /* TinyMceEvents */].Change, function (e) {
                _this.ngZone.run(function () {
                    _this.triggerChange();
                });
                _this.change.emit(e);
            });
            editor.on(__WEBPACK_IMPORTED_MODULE_8__tinymce_events__["a" /* TinyMceEvents */].Dirty, function (e) { return _this.dirty.emit(e); });
            editor.on(__WEBPACK_IMPORTED_MODULE_8__tinymce_events__["a" /* TinyMceEvents */].Remove, function (e) { return _this.remove.emit(e); });
            editor.on(__WEBPACK_IMPORTED_MODULE_8__tinymce_events__["a" /* TinyMceEvents */].ExecCommand, function (e) {
                _this.ngZone.run(function () {
                    _this.triggerChange();
                });
                _this.execcommand.emit(e);
            });
            editor.on(__WEBPACK_IMPORTED_MODULE_8__tinymce_events__["a" /* TinyMceEvents */].PastePreProcess, function (e) { return _this.pastepreprocess.emit(e); });
            editor.on(__WEBPACK_IMPORTED_MODULE_8__tinymce_events__["a" /* TinyMceEvents */].PastePostProcess, function (e) { return _this.pastepostprocess.emit(e); });
        };
    };
    TinyMceComponent.prototype.triggerChange = function (forReInit) {
        if (forReInit === void 0) { forReInit = false; }
        if (this.fromWriteValue) {
            this.fromWriteValue = false;
        }
        else {
            var content = this.editor.getContent();
            if (!content) {
                content = '';
            }
            if (forReInit) {
                this.beforeInitValue = content;
            }
            this.onModelChange(content);
            this.onModelTouched();
        }
    };
    TinyMceComponent.prototype.removeEditor = function () {
        if (this.editor) {
            tinymce.remove(this.editor);
        }
    };
    TinyMceComponent.prototype.ngOnDestroy = function () {
        this.removeEditor();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Boolean)
    ], TinyMceComponent.prototype, "isDisabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], TinyMceComponent.prototype, "settings", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", String)
    ], TinyMceComponent.prototype, "selector", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], TinyMceComponent.prototype, "click", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], TinyMceComponent.prototype, "dblclick", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], TinyMceComponent.prototype, "mousedown", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], TinyMceComponent.prototype, "mouseup", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], TinyMceComponent.prototype, "mousemove", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], TinyMceComponent.prototype, "mouseover", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], TinyMceComponent.prototype, "mouseout", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], TinyMceComponent.prototype, "mouseenter", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], TinyMceComponent.prototype, "mouseleave", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], TinyMceComponent.prototype, "keydown", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], TinyMceComponent.prototype, "keypress", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], TinyMceComponent.prototype, "keyup", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], TinyMceComponent.prototype, "contextmenu", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], TinyMceComponent.prototype, "paste", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], TinyMceComponent.prototype, "init", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], TinyMceComponent.prototype, "focus", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], TinyMceComponent.prototype, "blur", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], TinyMceComponent.prototype, "beforesetcontent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], TinyMceComponent.prototype, "setcontent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], TinyMceComponent.prototype, "getcontent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], TinyMceComponent.prototype, "preprocess", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], TinyMceComponent.prototype, "postprocess", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], TinyMceComponent.prototype, "nodechange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], TinyMceComponent.prototype, "undo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], TinyMceComponent.prototype, "redo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], TinyMceComponent.prototype, "change", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], TinyMceComponent.prototype, "dirty", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], TinyMceComponent.prototype, "remove", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], TinyMceComponent.prototype, "execcommand", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], TinyMceComponent.prototype, "pastepreprocess", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], TinyMceComponent.prototype, "pastepostprocess", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewChild */])('tinymce'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */])
    ], TinyMceComponent.prototype, "elem", void 0);
    TinyMceComponent = TinyMceComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'angular-tinymce',
            template: "<textarea #tinymce ></textarea>",
            providers: [{
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALUE_ACCESSOR */],
                    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* forwardRef */])(function () { return TinyMceComponent_1; }),
                    multi: true
                }]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Inject */])(TINYMCE_SETTINGS_TOKEN)),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgZone */]])
    ], TinyMceComponent);
    return TinyMceComponent;
    var TinyMceComponent_1;
}());



/***/ }),

/***/ "./src/tinymce.default.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = tinymceDefaultSettings;
function tinymceDefaultSettings() {
    return {
        baseURL: 'assets/tinymce',
        tinymceScriptURL: 'assets/tinymce/tinymce.min.js',
        theme_url: 'assets/tinymce/themes/modern/theme.min.js',
        skin_url: 'assets/tinymce/skins/lightgray'
    };
}


/***/ }),

/***/ "./src/tinymce.events.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TinyMceEvents; });
var TinyMceEvents = /** @class */ (function () {
    function TinyMceEvents() {
    }
    TinyMceEvents.Click = 'click';
    TinyMceEvents.DblClick = 'dblClick';
    TinyMceEvents.MouseDown = 'MouseDown';
    TinyMceEvents.MouseUp = 'MouseUp';
    TinyMceEvents.MouseMove = 'MouseMove';
    TinyMceEvents.MouseOver = 'MouseOver';
    TinyMceEvents.MouseOut = 'MouseOut';
    TinyMceEvents.MouseEnter = 'MouseEnter';
    TinyMceEvents.MouseLeave = 'MouseLeave';
    TinyMceEvents.KeyDown = 'KeyDown';
    TinyMceEvents.KeyPress = 'KeyPress';
    TinyMceEvents.KeyUp = 'KeyUp';
    TinyMceEvents.ContextMenu = 'ContextMenu';
    TinyMceEvents.Paste = 'Paste';
    TinyMceEvents.Init = 'Init';
    TinyMceEvents.Focus = 'Focus';
    TinyMceEvents.Blur = 'Blur';
    TinyMceEvents.BeforeSetContent = 'BeforeSetContent';
    TinyMceEvents.SetContent = 'SetContent';
    TinyMceEvents.GetContent = 'GetContent';
    TinyMceEvents.PreProcess = 'PreProcess';
    TinyMceEvents.PostProcess = 'PostProcess';
    TinyMceEvents.NodeChange = 'NodeChange';
    TinyMceEvents.Undo = 'Undo';
    TinyMceEvents.Redo = 'Redo';
    TinyMceEvents.Change = 'Change';
    TinyMceEvents.Dirty = 'Dirty';
    TinyMceEvents.Remove = 'Remove';
    TinyMceEvents.ExecCommand = 'ExecCommand';
    TinyMceEvents.PastePreProcess = 'PastePreProcess';
    TinyMceEvents.PastePostProcess = 'PastePostProcess';
    TinyMceEvents.AddEditor = 'AddEditor';
    TinyMceEvents.RemoveEditor = 'RemoveEditor';
    return TinyMceEvents;
}());



/***/ }),

/***/ "./src/tinymce.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TinyMceModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tinymce_component__ = __webpack_require__("./src/tinymce.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/**
 * Modul für ein TinyMce Input
 */
var TinyMceModule = /** @class */ (function () {
    function TinyMceModule() {
    }
    TinyMceModule_1 = TinyMceModule;
    TinyMceModule.forRoot = function (settings) {
        return {
            ngModule: TinyMceModule_1,
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_2__tinymce_component__["a" /* TINYMCE_SETTINGS_TOKEN */], useValue: settings }
            ]
        };
    };
    TinyMceModule = TinyMceModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__tinymce_component__["b" /* TinyMceComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__tinymce_component__["b" /* TinyMceComponent */]]
        })
    ], TinyMceModule);
    return TinyMceModule;
    var TinyMceModule_1;
}());



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./example/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map