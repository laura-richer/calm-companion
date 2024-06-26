module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src/'],
        alias: {
          '~assets': './src/assets',
          '~components': './src/components',
          '~data': './src/data',
          '~screens': './src/screens',
          '~store': './src/store',
          '~utils': './src/utils',
        },
        extensions: ['.js', '.jsx', '.tsx', '.ios.js', '.android.js'],
      },
    ],
  ],
};
