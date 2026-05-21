app.config(function($routeProvider){

    $routeProvider
    .when("/", {
        redirectTo: "/login"
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