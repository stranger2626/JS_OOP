var extendDeep = require('./extendDeep.js');
var Plant = require('./Plant.js');
var Rose=extendDeep(Plant);
Rose.hasThorns=!!'true';
Rose.name='BasicRoseName';
Rose.color='Red';
Rose.getColor=function(){
return this.color;
};
console.log(Rose.name);
module.exports=Rose;