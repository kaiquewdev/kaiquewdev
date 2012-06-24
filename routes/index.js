var pson = require('../actions/parse-json');
var jade = require('jade');

exports.index = function ( req, res ) {
    res.render('index', { 
        appTitle: 'Kaique da Silva',
        title: 'Inicial',
    });
};

exports.profile = function ( req, res, profile ) { 
    var profile = pson.work('./dbs/profile.json');
        profile.body = jade.compile( profile.body );

    res.render('profile', { 
        appTitle: 'Kaique da Silva',
        title: 'Perfil',
        profile: profile,
    });
};

exports.weekends = function ( req, res ) { 
    res.render('weekends', { 
        appTitle: 'Kaique da Silva',
        title: 'Projetos',
    });
};
    
exports.contact = function ( req, res ) {
    res.render('contact', { 
        appTitle: 'Kaique da Silva',
        title: 'Contato',
    });
};
