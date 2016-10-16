var oop=require('./oop.js');
var SmartAppliences=require('./SmartAppliences.js');

function printSmartAppliences(item,index){
	if (item.constructor==SmartAppliences){
		console.log(index+' '+item.name);
	}
};

module.exports=printSmartAppliences;