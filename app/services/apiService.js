app.service("apiService", function ($http) {

    const BASE_URL = "https://property.mail-go.site/api";

    this.login = function (data) {
        return $http.post(BASE_URL + "/login", data);
    };

    this.register = function (data) {
        return $http.post(
            "http://localhost/test/Admin/Management/createUser",
            data
        );
    };

});