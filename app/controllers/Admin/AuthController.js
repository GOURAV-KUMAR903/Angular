app.controller("AuthController", function ($scope, apiService) {
  $scope.credentials = {};

  $scope.mainlogin = function (mainloginForm) {
    if (mainloginForm.$invalid) {
      return;
    }

    const apiData = {
      phone: $scope.credentials.phone,
      password: $scope.credentials.password,
    };

    apiService
      .login(apiData)
      .then(function (response) {
        console.log(response.data);

        if (response.data.success) {
          localStorage.setItem("token", response.data.token);

          alert(response.data.message);
        } else {
          alert(response.data.message);
        }
      })
      .catch(function (error) {
        console.log(error);

        alert(JSON.stringify(error.data));
      });
  };
});
