var webpack = require('webpack');

module.exports = {


    watch: true,
    verbose: true,
    debug: true,
    module: {
        loaders: [
            {test: /\.jsx?$/, loaders: ['jsx?harmony']},
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    },


    entry: './src/js/index.jsx',
    output: {
        path: __dirname + "/dist",
        filename: 'output.js',
        publicPath: __dirname + "/dist"

    }

};