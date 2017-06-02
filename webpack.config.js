module.exports = {
  entry: './src/app.js', //file to grab the js from
  output: {//set up of the bundle output
  	path: __dirname + '/dist',
  	filename: 'bundle.js'
  },
  module: { //load here loaders and plugins
  	loaders: [
  	  { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.js$/,  loader: "babel-loader", exclude: /node_modules/, query: { presets: ['es2015'] } }
  	]
  }
}