const path = require('path')

module.exports = {
/*	devIndicators: {
	    autoPrerender: false,
	},*/
	sassOptions: {
	  	//cssModules: true,
		includePaths: [path.join(__dirname, 'scss')],
	},
}