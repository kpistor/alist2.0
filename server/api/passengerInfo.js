/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');

// Get list of things
exports.create = function(req, res) {
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var confirmationNumber = req.body.confirmation;
    if (firstName && lastName && confirmationNumber) {
        //Enter data into mysql
    }
    else {
        return res.status(404).json({
            success: false, 
            error: "Data missing from one or more fields"
        })
    }
  // res.json({'words':'hi'});
};