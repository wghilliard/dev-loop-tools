// load in the reload plugin, configure, and add it to the watch loop

const CopyPlugin = require("copy-webpack-plugin");
const reloadPlugin = require("./chromium-ext-reload-plugin")

module.exports = {
    mode: "development",
    watchOptions: {
        ignored: '**/node_modules',
        poll: true
    },
    entry: {
        'background': './src/background.js'
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {from: "src/manifest.json", to: "manifest.json"},
            ],
        }),
        new reloadPlugin.ChromiumReloadPlugin()
    ],
}