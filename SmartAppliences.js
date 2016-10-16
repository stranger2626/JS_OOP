var inherit = require('./inherit.js');
var ElectricalAppliences=require('./ElectricalAppliences.js');
inherit(SmartAppliences,ElectricalAppliences);
function SmartAppliences(name,powerConsumption,enabled,owner){
	this.name=name||'BasicSmartApplienceName',
 		this.powerConsumption=powerConsumption||'22',
 		this.enabled=enabled||!!'',
 		this.owner=owner||'BasicOwner'
 		this.getOwner=function(){
 			return this.owner;
 		}

};	
module.exports=SmartAppliences;