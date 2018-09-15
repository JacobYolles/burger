
var orm = require('../config/orm.js');

var burger = {
	all: function(cb) {
		orm.all('burgers', function(res){
			cb(res);
		});
	},
	create: function(cols, vals, cb) {
		orm.create('burgers', cols, vals, function(res){
			cb(res);
		});
	},
	update: function(objColVals, condition, cb){
		orm.update('burgers', objColVals, condition, function(res){
			cb(res);
		});
	}
};

module.exports = burger;

// // Import the ORM to implement functions that will interact with the database
// var orm = require('../config/orm.js');

// // Create the burger object
// var burger = {
//   // Select all burger table entries
//   selectAll: function(cb) {
//     orm.selectAll('burgers', function(res) {
//       cb(res);
//     });
//   },

//   // The variables cols and vals are arrays
//   insertOne: function(cols, vals, cb) {
//     orm.insertOne('burgers', cols, vals, function(res) {
//       cb(res);
//     });
//   },

//   // The objColVals is an object specifying columns as object keys with associated values
//   updateOne: function(objColVals, condition, cb) {
//     orm.updateOne('burgers', objColVals, condition, function(res) {
//       cb(res);
//     });
//   }
// };

// // Export the database functions for the controller (burgerController.js).
// module.exports = burger;