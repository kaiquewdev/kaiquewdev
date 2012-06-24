var kw = (function ( window, $ ) {
    var _ = function () {};

    _.prototype = {
        brandAnimationLetters: function ( settings ) {
            var output = {};
            settings = settings || {};

            if ( settings ) {
                var element = $(settings['element']),
                    timer = 250;

                    element.each(function ( letter ) {
                        if ( letter > 0 && letter < ( element.length - 1 ) ) {
                            element.eq( letter ).hide();
                            
                            setTimeout(function () {
                                element.eq( letter ).fadeTo('fast', 1);
                            }, timer);

                            timer += 50;
                        }
                    });

                    output = element;
            }

            return output;
        },

        githubProjects: function ( settings ) {
            // request to https://api.github.com/users/kaiquewdev/repos?type=owner
            if ( settings ) {
                var requestURL = 'https://api.github.com/users/kaiquewdev/repos?type=owner&client_id=ad83403be07698072d0a',
                    element = $( settings['element'] ),
                    ownRepos = [];

                var data = $.ajax({
                    url: requestURL,
                });
                
                data.done(function () {
                    var li = element.find('li'),
                        timer = 500;
                        
                        ownRepos = JSON.parse( data.responseText );
                    
                    $('p.message').fadeTo('normal', 0, function () {
                        $( this ).hide();    
                    });
                    
                    if ( ownRepos ) {
                        for ( var repo in ownRepos ) {
                            var currentRepo = ownRepos[repo];

                            if ( !currentRepo['fork'] ) {
                                element.append('<li><a href=\"' + currentRepo['html_url'] + '\" target="blank">' + currentRepo['name'] + '</a></li>');
                            }
                        }    

                        element.append('<li><a href=\"' + settings['profile'] + '\" target="blank">Perfil no Github</a></li>');

                        element.find('li').hide();
                        element.find('li').each(function ( id ) {
                            element.find('li').eq(id).delay( timer ).fadeTo('slow', 1);    
                            timer += 100;
                        });
                    }
                });
            }
        },

        init: function ( callback ) {
            // Start
            var self = this;
                callback = callback || function () {};

            return callback( self );
        },    
    };

    return new ( _ );
} ( window, jQuery ));
