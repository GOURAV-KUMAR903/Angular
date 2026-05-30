app.controller("AuthController", function ($scope, apiService) {
  $scope.credentials = {};

  $scope.login = function (loginForm) {
    if (loginForm.$invalid) {
      return;
    }

    const apiData = {
      phone: $scope.credentials.phone,
      password: $scope.credentials.password,
    };

    apiService
      .login(apiData)
      .then(function (response) {
        if (response.data.success) {
          localStorage.setItem("token", response.data.token);
          $scope.success = response.data.message;
        alert($scope.success);
        } else {
          $scope.error = response.data.message;
          alert($scope.error);
        }
      })
      .catch(function (error) {
        $scope.error = error.data?.message;
        alert($scope.error);
      });
  };
});
