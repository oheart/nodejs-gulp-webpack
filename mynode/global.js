var getLib = require('slib');
var getMyAge = require('./test6');

var file = require('fs');
file.writeFile("build.js","",function(){});

file.readFile('./style.css',function(err,data){
    if(err){
        //代表出错
    }else{
        file.appendFile('build.js',"document.write('<style>" + data + "</style>')",function(){});
    }
})

function genCode(key,value){
    return 'var ' + key + '=' + value + ';\n';
}
//global对象
//console.log(global);
console.log(global.process.mainModule.children);
for(var i = 0; i < global.process.mainModule.children.length; i++){
    var child =  global.process.mainModule.children[i];
    for(var attr in child.exports){ //child.exports就是我们导出的属性
        file.appendFile("build.js",genCode(attr,child.exports[attr]),function(){});
    }
}
































