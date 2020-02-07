const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {
    mode: 'development', // 배포 할때에는 production으로 하면 된다.
    devtool: 'eval',// build속도가 빨라짐
    resolve: {
        extensions: ['.js', '.vue'],
    },
    entry: {
        app: path.join(__dirname, './main.js'), // 주가 되는 script
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader', // use 로 해도 된다.
        }],
    }, //webpack 의 핵심
    plugins: [
        new VueLoaderPlugin(),
    ],
    output: {
        filename: '[name].js', //또는 app.js
        path: path.join(__dirname, 'dist')//'./dist', 여기는 절대경로를 적어둬야 되는데 nodejs에 이부분을 도와주는 기능이 있음 dirname은 현재 폴더경로
    },
};

//script 가 많아질 경우 관리의 문제점때문에 webpack을 사용