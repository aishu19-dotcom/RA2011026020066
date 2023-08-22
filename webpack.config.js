const path = require('path');  
const HtmlWebpackPlugin = require('html-webpack-plugin');  
  
module.exports = {  
   entry: './main.js',  
   output: {  
      path: path.join(__dirname, '/bundle'),  
      filename: 'index_bundle.js'  
   },  
   devServer: {  
      allowedHosts: "all",
      port: 3000
   },  
   module: {  
      rules: [  
         {  
            test: /\.(js)$/, 
            exclude: /node_modules/,  
        use: {  
              loader: "babel-loader",  
            }  
         }  
      ]  
   },  
   plugins:[  
      new HtmlWebpackPlugin({  
         template: './index.html'  
      })  
   ]  
}  