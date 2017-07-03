var getLib = require('slib');
getLib.showName();

//console.log(getLib);

for(var attr in getLib){
    console.log(attr,getLib[attr]);
}
