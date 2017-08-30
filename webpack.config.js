module.exports = {
	entry: './src/app/js/index.js',
	output : {
	
		filename : 'index.js'
	},
	devServer : {
		inline : true,
		port : 3333
	},
    resolveLoader : {
		modules : [ 'node_modules', 'src/loaders' ]
	},
	module : {
		rules : [
			{
				test: /\.js$/,
				exclude : /node_modules/,
				loader : 'babel-loader',
				query : {
					presets : ['es2015', 'react']
				}
			},
			// {
			// 	test: /\.scss$/,
			// 	exclude : /node_modules/,
			// 	loader : 'style-loader/useable!css-loader!autoprefixer-loader!sass-loader',
			// },
            // {
             //    test: /\.scss$/,
             //    use: [
             //        'isomorphic-style-loader',
             //        // {
             //        //     loader: 'css-loader',
             //        //     options: {
             //        //         importLoaders: 1
             //        //     }
             //        // },
			// 		'css-loader',
             //        'postcss-loader?parser=postcss-scss',
			// 		'sass-loader'
            //
             //    ]
            // },
            // {
            //     test: /\.scss$/,
            //     exclude : /node_modules/,
            //     use: [
            //         'style-loader',
            //         'css-loader',
            //         //'postcss-loader?parser=postcss-scss',
            //         'sass-loader'
            //     ]
            // },
            {
                test: /\.scss$/,
                exclude : /node_modules/,
                use: [
                    'isomorphic-style-loader',
                    'css-loader',
                    'postcss-loader?parser=postcss-scss',
                    //'sass-loader'
                ]
            }
		]
	}
}