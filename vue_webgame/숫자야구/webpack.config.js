module.exports = {
    entry: {
        app: './main.js', // 주가 되는 script
    },
    module: {},
    plugins: {},
    output: {
        filename: '[name].js'
    },
};

//script 가 많아질 경우 관리의 문제점때문에 webpack을 사용