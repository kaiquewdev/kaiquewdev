
/*
 * GET home page.
 */

exports.index = function ( req, res ) {
    res.render('index', { 
        appTitle: 'Kaique da Silva',
        title: 'Inicial',
    });
};

exports.profile = function ( req, res ) { 
    res.render('profile', { 
        appTitle: 'Kaique da Silva',
        title: 'Perfil',
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
