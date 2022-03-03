import { Configuration, container } from 'webpack';
import pkg from '../../package.json';

export const webpackConfig: Configuration = {
	output: { 
		publicPath: 'auto',
		uniqueName: 'login',
	},
	optimization: {
		runtimeChunk: false,
	},
	experiments: {
		outputModule: true,
	},
	plugins: [
		new container.ModuleFederationPlugin({
			name: 'login',
			filename: 'remoteEntry.js',
			library: { type: 'module' },
			exposes: {
				'./LoginModule': './projects/module1/src/app/login.module.ts',
				'./WelcomeModule': './projects/module1/src/app/welcome.module.ts'
			},
			shared:	{
				"@angular/core": { singleton: true, requiredVersion: 'auto' },
				"@angular/common": { singleton: true, requiredVersion: 'auto' },
				"@angular/router": { singleton: true, requiredVersion: 'auto' },
				"@angular/common/http": { singleton: true, requiredVersion: 'auto' }, 
			}
		})
	]
}

export default webpackConfig;