// Contact actions
var mailer = require('mailer');

exports.send = function ( settings, callback ) {
    var output = false;
        settings = settings || {};
        callback = callback || function () {};

    if ( settings && callback ) {
        output = mailer.send({
            domain: 'gmail.com',
            host: 'imap.gmail.com',
            port: '25',
            authentication: 'login',
            user: 'POueAgc/WwPsO4fLmitjpcjz8kk=',
            password: 'qocX6aQycVU9v7BJgUbkIVVQPkc=',
            from: settings['from'],
            to: settings['to'],
            subject: settings['subject'],
            body: settings['body'],
        }, callback); 
    }

    return output;
};
