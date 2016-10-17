var Rose=require('./Rose.js');
var extendDeep = require('./extendDeep.js');
var ThornlessRose={};
ThornlessRose = extendDeep(Rose,ThornlessRose);
ThornlessRose.hasThorns=!!'';
console.log(ThornlessRose.hasThorns+' '+ThornlessRose.name+' '+ThornlessRose.getWaterConsumption()+' '+ThornlessRose.getColor());