var inherit = require('./inherit.js');
var electricalAppliences=require('./electricalAppliences.js');
function householdAppliences(name,powerConsumption,enabled){
	this.name=name||'BasicElectricalApplienceName',
 		this.powerConsumption=powerConsumption||'10',
 		this.enabled=!!enabled||!!''
};	
inherit(householdAppliences,electricalAppliences);
module.exports=householdAppliences;