var oop=require('./oop.js');
var SmartAppliences=require('./SmartAppliences.js');

function printEnabled(item,index){
	if (item.enabled==!!'true'){
		console.log(index+' '+item.name+' enabled '+item.enabled);
	}
};
module.exports=printEnabled;