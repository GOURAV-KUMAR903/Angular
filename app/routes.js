app.config(function($routeProvider){

    $routeProvider
    .when("/", {
        templateUrl: "/app/views/site/header.html",
    })
    .when("/login", {
        templateUrl: "/app/views/intro.html",
        controller: "LoginController"
    })
    .when("/register", {
        templateUrl: "/app/views/user/register.html",
        controller: "RegisterController"
    })
    .otherwise({
        redirectTo: "/login"
    });

});