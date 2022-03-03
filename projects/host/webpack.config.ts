import { Configuration, container } from 'webpack';

export const webpackConfig: Configuration = {
	output: { 
		uniqueName: 'host',
		publicPath: 'http://localhost:4200/',
	},
	experiments: {
		outputModule: true,
	},
	optimization: {
		runtimeChunk: false,
	},
	plugins: [
		new container.ModuleFederationPlugin({
			library: { type: 'module' },
			remotes: {
				"login": "http://localhost:4201/remoteEntry.js",
			},
			shared: {
				"@angular/core": { singleton: true, requiredVersion: 'auto' },
				"@angular/common": { singleton: true, requiredVersion: 'auto' },
				"@angular/router": { singleton: true, requiredVersion: 'auto' },
				"@angular/common/http": { singleton: true, requiredVersion: 'auto' }, 
			}
		})
	]
}

export default webpackConfig;