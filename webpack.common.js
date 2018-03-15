// const path = require('path');

// module.exports = {
//     entry: './src/index.js',
//     output: {
//         filename: 'bundle.js',
//         path: path.resolve(__dirname, 'dist')
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.js$/,
//                 exclude: /node_modules/,
//                 use: {
//                     loader: "babel-loader"
//                 }
//             }
//         ]
//     },
// };

const path = require('path');
module.exports = {
    entry: ['babel-polyfill', './src/main.ts'],
    resolve:
    {
        extensions: ['.ts', '.js', '.json']
    },
};