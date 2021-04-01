"use strict";
exports.__esModule = true;
exports.ChromiumReloadPlugin = void 0;
var name = 'ChromiumReloadPlugin';
var ChromiumReloadPlugin = /** @class */ (function () {
    function ChromiumReloadPlugin(options) {
        this.options = options;
    }
    ChromiumReloadPlugin.prototype.apply = function (compiler) {
        console.log('applying ChromiumReloadPlugin');
        compiler.hooks.done.tap(name, function () {
            console.log('done: reload loop');
        });
    };
    return ChromiumReloadPlugin;
}());
exports.ChromiumReloadPlugin = ChromiumReloadPlugin;
