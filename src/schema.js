 var mongoose = require('mongoose');

 let Schema = mongoose.Schema;

 var flightSchema = new Schema ({

 	Type:
 	 { type:String, required:true},
 	Seats:
 	{ type:String, required:true},
 	Reserved:
 	{ type:String, required:true},
 	Remaining:
 	{ type:String, required:true},
 	Model:
 	{ type:String, required:true},
 	DepartureLocation:
 	{ type:String, required:true},
 	ArrivalLocation:
 	{ type:String, required:true},
 	DepartureTime:
 	{ type:String, required:true},
 	ArrivalTime:
 	{ type:String, required:true},

});
 

 var userinfo = mongoose.model('userinfo', userSchema);
 
 var planecharter = mongoose.model('planecharter', flightSchema);
 
 module.exports = (userinfo, planecharter);