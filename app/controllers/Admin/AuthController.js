app.controller("AuthController", function ($scope, apiService) {
  $scope.credentials = {};

  $scope.login = function (loginForm) {
    if (loginForm.$invalid) {
      return;
    }

    const apiData = {
      phone: $scope.credentials.username,
      password: $scope.credentials.password,
    };

    apiService
      .login(apiData)
      .then(function (response) {
        if (response.data.success) {
          localStorage.setItem("token", response.data.token);
          $scope.success = response.data.message || "Login Successful";
          $scope.error = "";
        } else {
          $scope.error = response.data.message;
          $scope.success = "";
        }
      })
      .catch(function (error) {
        $scope.error = error.data?.message || "Server error";
        $scope.success = "";
      });
  };
});
