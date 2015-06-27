var app = angular.module("workApp",["ngRoute", "firebase"]);

app.config(function ($routeProvider) {
  $routeProvider.when("/", {templateUrl: "Partials/home.html", controller: "MainCtrl"});

});


