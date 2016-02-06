
angular.module('templates', []);
var appModule = angular.module('app', ['ngRoute','templates']);

function TestCtrl($templateCache) {
        this.user = {name: 'Blake'};
        console.log($templateCache.get('test.html'));
    }



     appModule
         .config(function($routeProvider){
            $routeProvider
                .when('/', {
                    controller: 'TestCtrl as test',
                    templateUrl:'test2.html'
                })
                .otherwise('/');
        })
        .controller('TestCtrl', TestCtrl);
/*
    appModule.run(function($templateCache){
        $templateCache.put('test1.html','Hello {{ test.user.name }}!')
    });*/

