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

        let data = response.data;

        // agar JSON string aayi ho to convert karo
        if (typeof data === "string") {
          data = JSON.parse(data);
        }

        // 👉 sirf message show hoga
        alert(data.message);

        if (data.success === true) {
          localStorage.setItem("token", data.token || "");
        }

      })
      .catch(function (error) {
        alert(error.data?.message || "Server Error");
      });
  };
});