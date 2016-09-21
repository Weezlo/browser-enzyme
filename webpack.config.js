module.exports = {
	entry: './index.js',
	output: {
		library: 'Enzyme',
		filename: 'bundle.js',
		path: __dirname + '/dist'
	},
	externals: {
	  'cheerio': 'window',
	  'react/addons': true,
	  'react/lib/ExecutionEnvironment': true,
	  'react/lib/ReactContext': true
	}
};