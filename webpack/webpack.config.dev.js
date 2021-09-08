/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const Path = require('path');
const Webpack = require('webpack');
const { merge } = require('webpack-merge');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common, {
    target: 'web',
    mode: 'development',
    devtool: 'eval-cheap-source-map',
    output: {
        chunkFilename: 'js/[name].chunk.js',
    },
    devServer: {
        inline: true,
        hot: true,
    },
    plugins: [
        new Webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
        }),
        new ESLintPlugin({
            extensions: 'js',
            emitWarning: true,
            files: Path.resolve(__dirname, '../src'),
        }),
        new StylelintPlugin({
            files: Path.join('src', '**/*.s?(a|c)ss'),
        }),
        new ESLintPlugin({
            emitError: true,
            emitWarning: true,
            extensions: [".js", ".ts"]
        }),
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.js$/,
                include: Path.resolve(__dirname, '../src'),
                loader: 'babel-loader',
            },

            {
                test: /\.(ts|tsx)?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s?css$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    'postcss-loader',
                    'sass-loader',
                ],
            },
        ],
    },
});
