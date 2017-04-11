export default {
    entry: './dist/modules/angular-tinymce.es5.js',
    dest: './dist/bundles/angular-tinymce.umd.js',
    format: 'umd',
    exports: 'named',
    moduleName: 'ng.angularTinymce',
    external: [
        '@angular/core',
        '@angular/common',
        '@angular/forms',
        'rxjs/Observable',
        'rxjs/Observer'
    ],
    globals: {
        '@angular/core': 'ng.core',
        '@angular/common': 'ng.common',
        '@angular/common': 'ng.forms',
        'rxjs/Observable': 'Rx',
        'rxjs/Observer': 'Rx'
    },
    onwarn: () => { return }
}
