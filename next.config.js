const path = require('path')

module.exports = {
/*	devIndicators: {
	    autoPrerender: false,
	},*/
	target: 'serverless',
	webpack: config => {
		config.plugins.push(
			new webpack.DefinePlugin({ 'global.GENTLY': false }),
		);
		return config;
	},
	sassOptions: {
	  	//cssModules: true,
		includePaths: [path.join(__dirname, 'scss')],
	},
}