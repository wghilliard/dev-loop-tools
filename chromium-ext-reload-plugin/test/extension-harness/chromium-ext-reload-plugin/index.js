"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChromiumReloadPlugin = void 0;
const open_1 = __importDefault(require("open"));
const name = 'ChromiumReloadPlugin';
class ChromiumReloadPlugin {
    constructor(options) {
        this.options = options;
    }
    apply(compiler) {
        console.log('applying ChromiumReloadPlugin');
        compiler.hooks.afterCompile.tapAsync(name, () => {
            console.log('afterCompile: reload loop');
            open_1.default("http://reload.extensions");
        });
    }
}
exports.ChromiumReloadPlugin = ChromiumReloadPlugin;
