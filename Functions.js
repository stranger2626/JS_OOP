var oop=require('./oop.js');
var SmartAppliences=require('./SmartAppliences.js');


function printEnabled(item,index){
	if (item.enabled==!!'true'){
		console.log(index+' '+item.name+' enabled '+item.enabled);
	}
};
function printNameForArray(item,index){
	if (!(item.name==="undefined")){
	console.log(index+' '+item.name+' '+item.powerConsumption);
	}
};
function printSmartAppliences(item,index){
	if (item.constructor==SmartAppliences){
		console.log(index+' '+item.name);
	}
};
function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
};
module.exports=printEnabled,printNameForArray,printSmartAppliences,dynamicSort;