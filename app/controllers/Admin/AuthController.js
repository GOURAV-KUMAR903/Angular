app.controller("AuthController", function ($scope, apiService) {
  $scope.credentials = {};

  $scope.mainlogin = function (mainloginForm) {
    if (mainloginForm.$invalid) {
      return;
    }

    const apiData = {
      user_id: $scope.credentials.user_id,
      password: $scope.credentials.password,
    };

    apiService
      .Alogin(apiData)
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
