var path = require('path');

module.exports = {
    entry: {
        index: "./src/index"
    },
    output: {
        path: path.resolve('./public/dist/bundles'),
        filename: "bundle.js",
        publicPath: '/dist/bundles/'
    },
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
    externals: {
        'React': 'React'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
