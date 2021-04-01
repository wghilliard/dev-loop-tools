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
        console.log('applying ChromiumReloadPlugin');
        compiler.hooks.afterCompile.tapAsync(name, () => {
            console.log('afterCompile: reload loop')
            open("http://reload.extensions")
        })
    }
}