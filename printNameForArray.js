var oop=require('./oop.js');
var SmartAppliences=require('./SmartAppliences.js');

function printNameForArray(item,index){
	if (!(item.name==="undefined")){
	console.log(index+' '+item.name+' '+item.powerConsumption);
	}
};

module.exports=printNameForArray;