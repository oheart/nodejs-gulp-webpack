module.exports = {
    entry:[ //entry是文件入口，可以多个，代表要编译那些js
        './1.js'
    ],
    output:{
        path: __dirname + '/build/js', //输出文件夹
        filename: 'build.js' //最终打包生成的文件名
    }
}