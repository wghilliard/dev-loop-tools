import webpack from "webpack";

import open from "open";

const name = 'ChromiumReloadPlugin';

export interface ChromiumReloadPluginOptions {
    host: string,
    port: number,
    names?: Array<string>
}

export class ChromiumReloadPlugin {
    private options: ChromiumReloadPluginOptions;
    constructor(options?: ChromiumReloadPluginOptions) {
        this.options = options;
    }

    apply(compiler: webpack.Compiler) {
        compiler.hooks.afterCompile.tap(name, () => {
            open("http://reload.extensions", {app: {name: 'chrome'}})
        })
    }
}
