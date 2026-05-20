module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@features'  : './src/features',
          '@constants' : './src/constants',
          '@theme'     : './src/theme',
          '@utils'     : './src/utils',
          '@navigation': './src/navigation',
          '@store'     : './src/store',
          '@assets'    : './src/assets',
        },
      },
    ],
  ],
};
