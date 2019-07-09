
// const polyfill = require('')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


// let HtmlPlugin = new HtmlWebpackPlugin({
//     template : './src/index.html'          
// })

// let paginas = ['prueba']

// let multiplesFiles =  paginas.map(nameFile => {
//     return new HtmlWebpackPlugin({
//         filename : nameFile + '.html',
//         template : __dirname + `./src/${nameFile}.html`
//     })
// })

module.exports = {

    resolve : {
        modules : [
            'src',
            'node_modules'
        ]
    },

    entry: {
        app: ['./src/app.js', '@babel/polyfill']
    },

    output : {
        path : path.resolve(__dirname, '/public'),
        filename: 'js/main.js'
    },

    devServer : {
        port : 5000
    },

    module : {
        rules : [
            {
                test : /\.(sa|sc|c|)ss$/,
                use : [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test : /\.html$/,
                use : 'html-loader'
            },
            {
                test : /\.(jpe?g|svg|icon|png|gif)(\?[a-z0-9]+)?$/,
                use : 'url-loader'
            },
            {
                test : /\.js$/,
                exclude : /node_modules/,
                use : 'babel-loader'
            }
        ]
    },

    plugins : [
        new HtmlWebpackPlugin({
            template : './src/index.html'          
        }),
        new HtmlWebpackPlugin({
            template : './src/commerce.html'          
        }),
        new MiniCssExtractPlugin({
            filename : 'css/[name]-style.css'
        })
    ] //.concat(multiplesFiles)

}