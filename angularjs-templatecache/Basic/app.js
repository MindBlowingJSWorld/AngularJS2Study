var app = angular.module('app', []);

(function(){

    function TestCtrl($templateCache) {
        this.user = {name: 'Blake'};
        console.log($templateCache.get('test.html'));
    }

    angular.module('app', ['ngRoute'])
        .config(function($routeProvider){
            $routeProvider
                .when('/', {
                    controller: 'TestCtrl as test',
                    templateUrl:'test1.html'
                })
                .otherwise('/');
        })
        .controller('TestCtrl', TestCtrl);

})();
