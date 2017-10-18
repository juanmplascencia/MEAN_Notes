var mongoose = require('mongoose');
var Note = mongoose.model('notes');
var path = require('path');

module.exports = {
    show: (req,res,next) => {
        Note.find({}, function(err, results){
            if(err) { 
                res.json(err);
            } else {
                res.json(results);
            }
        });
    },
    create:(req,res,next) => {
        Note.create(req.body, function(err,result){
            if(err) { 
                res.json(err);
            } else {
                res.json(result);
            }
        });
    }
}