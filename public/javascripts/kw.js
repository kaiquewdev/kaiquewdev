var kw = (function ( window, $ ) {
    var _ = function () {};

    _.prototype = {
        init: function ( callback ) {
            // Start
            var self = this;
                callback = callback || function () {};

            return callback( self );
        },    
    };

    return new ( _ );
} ( window, jQuery ));
