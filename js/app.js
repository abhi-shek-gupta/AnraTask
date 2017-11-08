const app=angular.module('myapp',['ngRoute','ngMessages']);
app.config(function($routeProvider,$locationProvider){
    $routeProvider.when('/',{
        templateUrl:'views/register.html',
         controller:'registerController'
    });
    $routeProvider.when('/aboutus',{
        templateUrl:'views/aboutus.html',
    });
    $routeProvider.when('/contactus',{
        templateUrl:'views/contactus.html',
         controller:'contactController'
    });
    $routeProvider.when('/404',{
        templateUrl:'views/404.html'
    });
    $routeProvider.otherwise({
        redirectTo:'/404'
    });
    $locationProvider.html5Mode(true);
})

app.controller("registerController",function($scope){
        console.log("in register controller");
        $scope.submitForm=function(){
            alert("Hi "+$scope.body.firstName+"  registration is succesful");
             console.log($scope.body);
             
        }      
});

app.controller("contactController",function($scope){
    console.log("in contact controller");
    $scope.submitForm=function(){
         console.log($scope.contact);
         
    }      
});