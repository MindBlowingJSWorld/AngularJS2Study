var app = angular.module('app', []);

(function(){

    function TestCtrl($templateCache) {
        this.user = {name: 'Blake'};
        console.log($templateCache.get('test.html'));
    }

    var appModule = angular.module('app', ['ngRoute']);



     appModule
         .config(function($routeProvider){
            $routeProvider
                .when('/', {
                    controller: 'TestCtrl as test',
                    templateUrl:'test1.html'
                })
                .otherwise('/');
        })
        .controller('TestCtrl', TestCtrl);

    appModule.run(function($templateCache){
        $templateCache.put('test1.html','Hello {{ test.user.name }}!')
    });

})();
