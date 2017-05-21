 var mongoose = require('mongoose');

 let Schema = mongoose.Schema;

 var userSchema = new Schema ({

 	FirstName:
 	 { type:String, required:true },
 	LastName: 
 	{ type:String, required:true},
 	DOB:
 	{ type:String, required:true},
 	Email:
 	{ type:String, required:true},
 	Password:
 	{ type:String, required:true},
 	Address:
 	{ type:String, required:true},
 	City:
 	{ type:String, required:true},
 	State:
 	{ type:String, required:true},
 	FrequentStarts:
 	{ type:String, required:false},
 	FrequentEnds:
 	{type:String, required:false}

 	
 });

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