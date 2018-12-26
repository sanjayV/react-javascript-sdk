const path = require("path")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const webpack = require('webpack');
const glob = require("glob")

module.exports = {
    /* entry: {
      // "bundle.js": glob.sync("build/static/?(js|css)/main.*.?(js|css)").map(f => path.resolve(__dirname, f)),
      "bundle.js": glob.sync("build/static/?(js|css)/*.?(js|css)").map(f => path.resolve(__dirname, f)),
    }, */
    entry: "./src/index.js",
    resolve: {
        extensions: ['.js'],
        modules: [
            `${__dirname}/node_modules`,
            `${__dirname}/src`
        ]
    },

    stats: { colors: true },
    /* output: {
      filename: "build/static/js/bundle.min.js",
    }, */
    node: {
        global: true,
        process: false,
        Buffer: false,
        __filename: false,
        __dirname: false,
        setImmediate: false
    },

    devtool: 'source-map',

    output: {
        library: 'documentCapture',
        libraryTarget: 'umd',
        path: __dirname + '/dist',
        filename: "bundle.js",
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                include: [
                    `${__dirname}/src`
                ],
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                loader: require.resolve("file-loader") + "?name=../[path][name].[ext]"
            }/* ,
            {
                test: /\.html$/,
                use: ['html-loader?interpolate']
            } */
        ],
    },
    plugins: [
        /*  new BundleAnalyzerPlugin({
             analyzerMode: 'static',
             openAnalyzer: false,
             reportFilename: `${__dirname}/dist/reports/bundle_dist_size.html`,
             defaultSizes: 'parsed'
         }), */
        new webpack.NoEmitOnErrorsPlugin(),
        new UglifyJsPlugin({
            sourceMap: true,
            uglifyOptions: {
                compress: {
                    pure_getters: true,
                    unsafe: true,
                    warnings: false,
                },
                output: {
                    beautify: false,
                }
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        })
    ],
}