app.controller("RegisterController", function ($scope, apiService) {

    $scope.user = {};

    $scope.submitted = false;

    $scope.register = function (registerForm) {

        $scope.submitted = true;

        if (registerForm.$invalid) {
            return;
        }

        const userData = {
            name: $scope.user.name,
            email: $scope.user.email,
            phone: $scope.user.phone,
            password: $scope.user.password,
        };

        apiService.register(userData)

        .then(function (res) {

            console.log("Registered", res.data);

            $scope.success = "Registration successful";
            $scope.error = "";

        })

        .catch(function (err) {

            console.log(err);

            $scope.error = "Registration failed";
            $scope.success = "";

        });

    };

});