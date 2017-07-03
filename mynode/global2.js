var getLib = require('slib');
var getMyAge = require('./test6');

var file = require('fs');
file.writeFile("build.js","",function(){});

file.readFile('./style.css',function(err,data){
    if(err){
        //代表出错
    }else{
        var pattern = /['|"](.*\.jpg)['|"]/g;
        var res;
        while(res = pattern.exec(data.toString())){
            console.log(res[0]);
            console.log(res[1]);
            var getImg = file.readFileSync(res[1]);
            console.log(getImg.toString("base64"));
            data = data.toString().replace(res[1],"data:image/jpg;base64," + getImg.toString("base64")).trim();
        }
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
































/**
 * Created by fangfang on 2017/7/3.
 */
