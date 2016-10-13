function electricalAppliences(){};

 electricalAppliences.prototype = {
 
 	printName:function(){
 		console.log(this.name);
 	},
 	printPowerConsumption:function(){
 		console.log(this.powerConsumption);
 	},
 	getName:function(){	
 		return this.name;
 	},
 	getPowerConsumption:function(){
 		return this.powerConsumption;
 	},
 	setPowerConsumption:function(powerCons){
 		this.powerConsumption=powerCons;
 	},
 	setEnabled:function(enabled){
 		this.enabled=enabled;
 	},
 	setName:function(name){
 		this.name=name;
 	}
	};
	module.exports=electricalAppliences;