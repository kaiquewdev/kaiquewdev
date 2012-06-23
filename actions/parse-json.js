var fs = require('fs');
var path = require('path');

var Pson = (function ( fs, path ) {
    var _ = function () {};

    _.prototype = {
        work: function ( filepath ) {
            var output = {};
            var filejson;

            if ( filepath ) {    
                filejson = fs.readFileSync( path.normalize( filepath ), 'utf-8');
                filejson = filejson.replace(/\n/gi, '');
                filejson = JSON.parse( filejson );

                if ( filejson ) {
                    output = filejson;    
                }
            }

            return output;
        }    
    };

    return new _;
} ( fs, path ));


exports.work = Pson.work;
