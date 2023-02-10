var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix("");
  $routeProvider
    .when("/home", {
      templateUrl: "pages/home.html",
      controller: homeCtrl,
    })
    .when("/students", {
      templateUrl: "pages/students.html",
      controller: studentsCtrl,
    })
    .when("/about", {
      templateUrl: "pages/about.html",
    })
    .otherwise({
      redirectTo: "/home",
    });
});
