var inherit = require('./inherit.js');
var ElectricalAppliences=require('./electricalAppliences.js');
function HouseholdAppliences(name,powerConsumption,enabled){
		this.name=name||'BasicElectricalApplienceName',
 		this.powerConsumption=powerConsumption||'10',
 		this.enabled=!!enabled||!!''
};	
inherit(HouseholdAppliences,ElectricalAppliences);
module.exports=HouseholdAppliences;