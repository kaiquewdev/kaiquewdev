requirejs([
    'javascripts/jquery',
    'javascripts/jquery.lettering',
    'javascripts/kw'
], function () {
    $(function () {
        kw.init(function ( self ) {
            $('h1').lettering();
            // Animation letters of span
            self.brandAnimationLetters({
                element: 'div.brand a h1 span',
            });
            // Get projects
            self.githubProjects({
                element: '.weekend-projects',
                profile: 'http://github.com/kaiquewdev/'
            });
            // Animate banner
            self.bannerAnimation({
                element: '.wall .pic'    
            });
        });
    }); 
});
