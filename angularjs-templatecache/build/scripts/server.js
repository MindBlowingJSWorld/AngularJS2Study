
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


angular.module("templates").run(["$templateCache", function($templateCache) {$templateCache.put("test.html","This is test\r\n\r\nHello {{ test.user.name }}!\r\n");
$templateCache.put("test1.html","This is test 1\r\n\r\nHello {{ test.user.name }}!");
$templateCache.put("test2.html","This is test 2\r\n\r\nHello {{ test.user.name }}!");}]);