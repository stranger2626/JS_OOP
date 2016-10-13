 var electricalAppliences=require('./electricalAppliences.js');
 var inherit=require('./inherit.js');
 var householdAppliences=require('./householdAppliences.js');

var aplience1 = new householdAppliences();
//aplience1.init('first','20','true');
aplience1.printSomething=function(){
	console.log('something');
}

aplience1.printName();
aplience1.printPowerConsumption();
aplience1.printSomething();	
aplience1.setPowerConsumption(25);
console.log(aplience1.getPowerConsumption());
aplience1.setEnabled(!!'');
aplience1.setName('SomeOtherName');
console.log((aplience1.enabled));
aplience1.printName();