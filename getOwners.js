var oop=require('./oop.js');
var SmartAppliences=require('./SmartAppliences.js');
getOwners=function(item,index){
	if(item.constructor==SmartAppliences){
		console.log(item.owner);
	}
};
module.exports=getOwners;