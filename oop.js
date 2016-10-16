 var ElectricalAppliences=require('./ElectricalAppliences.js');
 var inherit=require('./inherit.js');
 var HouseholdAppliences=require('./HouseholdAppliences.js');
 var SmartAppliences=require('./SmartAppliences.js');
 var dynamicSort=require('./Functions');
 var printNameForArray=require('./Functions');
 var printEnabled=require('./Functions');
 var Temp=0;
 const readline = require('readline');
 
 var powerSupply = new Array(smartapplience1 = new SmartAppliences(),aplience1 = new HouseholdAppliences('somerandomh','55','enabled'), smartapplience2 = new SmartAppliences('secondsmart','44','enabled','John'));
		const rl0 =readline.createInterface({
			input:process.stdin,
			output:process.stdout
		});
		rl0.question('Enter powersupply output ',(answer)=>{
		powersupplyOutput=answer;
		rl0.close();
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

rl.question('What do you want to do? Type "1" sort all appliences by powerconsumption, type "2" to get a list of enabled devices devices, type "3" to list all smart appliences, type "4" to get leftover power, type "5" to get a list of smart apliences owners  ', (answer) => {
    if (answer=='1'){
    	powerSupply=powerSupply.sort(dynamicSort("powerConsumption"));
  		powerSupply.forEach(printNameForArray);
    }
    if (answer=='2'){
		powerSupply.forEach(printEnabled);
    }
    if (answer=='3'){
    	powerSupply.forEach(printSmartAppliences);
    }
    if (answer=='4'){
    	powerSupply.printLeftoverPower();
    }
    if (answer=='5'){
    	powerSupply.forEach(printSmartAppliences,this.getOwner);
    }
  	console.log(answer);
  rl.close();
});
});

powerSupply.sum=function(items, prop) {
    if (items == null) {
        return 0;
    }
    return items.reduce(function (a, b) {
        return Number(b[prop]) == null ? Number(a) : Number(a) + Number(b[prop]);
    }, 0);
};
powerSupply.printLeftoverPower=function(){
	var powerCons=0;
	powerCons=powerSupply.sum(powerSupply,'powerConsumption');
	console.log('Current powersupply output: ',powersupplyOutput);
	console.log('Current power consumption: ',powerCons);
		if ((powersupplyOutput-powerCons)>0){
		console.log('Current leftover powersupply output: ',(powersupplyOutput-powerCons));
		}
		else{
		console.log('Current powersupply output is insufficient, powersupply overloaded by: ',powerCons-powersupplyOutput);	
		}
};
function printSmartAppliences(item,index){
	if (item.constructor==SmartAppliences){
		console.log(index+' '+item.getOwner());
	}
};
