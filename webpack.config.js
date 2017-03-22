var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    './app/app.jsx'
  ],
  externals:{
    jquery:'jQuery'
  },
  plugins:[
    new webpack.ProvidePlugin({
      '$':'jquery',
      'jQuery':'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias:{
      Main:'app/components/Main.jsx',
      About:'app/components/About.jsx',
      NavBar:'app/components/NavBar.jsx',
      NavLogin:'app/components/NavLogin.jsx',
      Signup:'app/components/Signup.jsx',
      DashBoard:'app/components/DashBoard.jsx',
      DisplayDataBase:'app/components/DisplayDataBase.jsx',
      Display:'app/components/Display.jsx',
      Dialogue:'app/components/Dialogue.jsx',
      DialogueCondition: 'app/components/DialogueCondition.jsx',
      ConditionalResponse:'app/components/ConditionalResponse.jsx',
      Entities:'app/components/Entities.jsx',
      Intents: 'app/components/Intents.jsx',
      Login: 'app/components/Login.jsx',
      DialogueButtonComponent: 'app/components/DialogueButtonComponent.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
