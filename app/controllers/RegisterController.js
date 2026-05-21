app.controller("RegisterController", function ($scope, apiService) {
  $scope.user = {};
  $scope.register = function (registerForm) {
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
        $scope.success = "Registration successful";
      })
      .catch(function (err) {
        $scope.error = "Registration failed";
      });
  };
});
