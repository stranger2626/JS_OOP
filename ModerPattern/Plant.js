function Plant(){};

 var Plant= { 
 	printName:function(){
 		console.log(this.name);
 	},
 	printWaterConsumption:function(){
 		console.log(this.waterConsumption);
 	},
 	getName:function(){	
 		return this.name;
 	},
 	getWaterConsumption:function(){
 		return this.waterConsumption;
 	},
 	setWaterConsumption:function(powerCons){
 		this.waterConsumption=waterCons;
 	},
 	setName:function(name){
 		this.name=name;
 	}};
  Plant.name='BasicPlantName';
  Plant.canBloom=!!'true';
  Plant.waterConsumption=10;


 module.exports=Plant;