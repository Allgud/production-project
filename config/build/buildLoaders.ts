import MiniCssExtractPlugin, { loader } from 'mini-css-extract-plugin'

import { RuleSetRule } from 'webpack'
import { BuildOptions } from './types'

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  }

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('module')),
            localIdentName: options.isDev ? '[name]__[local]' : '[hash:base64:8]'
          },
        },
      },
      "sass-loader",
    ],
  }
  

  return [fileLoader, svgLoader, typescriptLoader, scssLoader]
 }