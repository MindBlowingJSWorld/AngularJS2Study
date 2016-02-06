

module.exports = function() {

    return {
         paths : {
            scripts: ['src/app/**/*.js'],
            html: [ 'src/app/**/*.html'],
            templateHtmls: ['**/templates/**/*.html'],
            dist: ['dist/']
        }
    };

};
