export default {
    publicPath: './dist/',
    entry: [
        './app/index'
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel'],
            exclude: /node_modules/
        }, {
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.css$/,
            loader: 'style!css!postcss'
        }, {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loader: 'url'
        }]
    },
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json'],
    },
    target: 'electron',
    plugins: []
}
