let path = require('path');
let webpack = require('webpack');

const VENDOR_LIBS = [
    'axios',
    'bootstrap',
    'jquery',
    'lodash',
    'react',
    'react-dom',
    'react-redux',
    'react-router-dom',
    'redux',
    'redux-thunk'
]

const config = {
    mode: 'development',
    entry: {
        bundle: './src/index.js',
        //bundle caching
        vendor: VENDOR_LIBS
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.jpeg$|\.jpg$|\.gif$|\.png$|\.svg$|\.woff$|\.woff2$|\.eot$|\.ttf|\.wav$|\.mp3$|\.ico$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery',
            'window.$': 'jquery',
            'window.jQuery': 'jquery'
        })
    ]
}

module.exports = config;