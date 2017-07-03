var getLib = require("slib");
//getLib.showName();
var file = require("fs"); //ÎÄ¼þÄ£¿é
//console.log(getLib);
file.writeFile("build.js","",function(){});


function genCode(key,value){
    return 'var ' + key + '=' + value + ';\n';
}
for(var attr in getLib){
    //file.appendFile("build.js",getLib[attr],function(){});
    file.appendFile("build.js", genCode(attr,getLib[attr]),function(){});
    console.log(attr,getLib[attr]);
}
file.appendFile("build.js","showName();\n",function(){});












