var extendDeep = require('./extendDeep.js');
var Plant = require('./Plant.js');
var Rose={};
Rose = extendDeep(Plant,Rose);
console.log(Rose.getName());
Rose.name='some';
Rose.hasThorns=!!'true';
Rose.name='BasicRoseName';
Rose.color='Red';
Rose.getColor=function(){
return this.color;
};
console.log(Rose.getName());
module.exports=Rose;
