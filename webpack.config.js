const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const path = require("path");

const config = {
    entry:{
        index:"./src/main.js",
        vendor:"vue"
    },
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"[name].bundle.js"
    },
    module:{
        rules:[{
            test:/\.css$/,
            use:["style-loader","css-loader","postcss-loader"]
        },{
            test:/\.js[x]$/,
            use:"babel-loader",
            exclude:/node_modules/
        },{
            test:/\.(jpg|jpeg|gif|png|bmp)$/,
            use:"file-loader"
        },{
            test:/\.vue$/,
            use:["vue-loader"]
        }]
    },
    plugins:[
        new CleanWebpackPlugin(['./dist']),
        new HtmlWebpackPlugin({
            template:"index.html",
            filename:"index.html"
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer:{
        hot:true,
        inline:true,
        open:true
    }
}

module.exports = config