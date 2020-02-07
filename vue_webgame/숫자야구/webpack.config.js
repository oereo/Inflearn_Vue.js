module.exports = {
    entry: {
        app: './main.js', // 주가 되는 script
    },
    module: {
        rules: [{

        }],
    }, //webpack 의 핵심
    plugins: {},
    output: {
        filename: '[name].js', //또는 app.js
        path: './dist',
    },
};

//script 가 많아질 경우 관리의 문제점때문에 webpack을 사용