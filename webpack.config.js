const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
    const isDevBuild = 'development'; // if I wanted to switch dev and prod envs.

    return [{
        mode: 'development',
        entry: {'app': './app/app.js'},
        output: {            
            filename: '[name]-bundle.js',
            path: path.resolve(__dirname, './dist'),
            publicPath: '/dist/'
        },      		
        module: {
            rules: [
                { 
                    test: /\.vue$/, 
                    loader: 'vue-loader'
                },
                { 
                    test: /\.js$/, 
                    include: /app/, 
                    exclude: /node_modules/, 
                    use: 'babel-loader' },
                { 
                    test: /\.css$/, 
                    use: [
                            {
                                loader: MiniCssExtractPlugin.loader,                    
                            },
                            'css-loader'
                    ] 
                }
            ]
        },
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
              'vue$': 'vue/dist/vue',
            }
        },
        plugins: [
            // make sure to include the plugin!
            new VueLoaderPlugin(),
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: '[name].css',
                chunkFilename: '[id].css',
              })
          ]
    }];
};
