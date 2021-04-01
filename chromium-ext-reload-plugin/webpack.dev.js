const {resolve} = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "development",
    entry: resolve(__dirname, 'src/ts/extension/index.ts'),
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'chromium-ext-reload.js',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: []
}