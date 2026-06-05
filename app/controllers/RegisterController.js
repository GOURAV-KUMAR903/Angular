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

    apiService
      .register(userData)
      .then(function (res) {
        console.log("Registered", res.data);

        $scope.success = res.data.message;
        $scope.error = "";

        // Form clear
        $scope.user = {};

        // Validation reset
        registerForm.$setPristine();
        registerForm.$setUntouched();

        $scope.submitted = false;
      })
      .catch(function (err) {
        console.log(err);

        $scope.error = err.data.message;
        $scope.success = "";
      });
  };
});
