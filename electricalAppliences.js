function ElectricalAppliences(){};

 ElectricalAppliences.prototype = {
 
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
 	},
 	FindValue:function(value){
	for (var i in this){
		if(this[i]==value) return console.log(this);
	}
	}
	};
	module.exports=ElectricalAppliences;