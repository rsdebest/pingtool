// 'use strict';

// /**
//  * Module dependencies.
//  */
// var mongoose = require('mongoose');

// var Schema = mongoose.Schema;
// var thingSchema = new Schema({}, { strict: false });
// var Thing = mongoose.model('Thing', thingSchema);
// var thing = new Thing({'derp': 'hard'});



'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var documentSchema = new Schema({_id: String }, { strict: false });

exports.Checks = mongoose.model('Checks', documentSchema);

// var thing = new Thing({'derp': 'hard'});
