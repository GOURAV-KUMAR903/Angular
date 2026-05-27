app.config(function ($routeProvider) {
  $routeProvider

    .when("/", {
      templateUrl: "app/views/site/index.html",
      controller: "",
      resolve: {
        load: function ($q) {
          var defer = $q.defer();

          var styles = [
            "app/assets/css/site.css",
            "app/assets/css/main.css",
            "app/assets/css/footer.css",
          ];

          styles.forEach(function (href) {
            var css = document.createElement("link");
            css.rel = "stylesheet";
            css.href = href;
            document.head.appendChild(css);
          });

          var script = document.createElement("script");
          script.src = "app/assets/js/site.js";

          script.onload = function () {
            defer.resolve();
          };

          script.onerror = function () {
            defer.reject("Script load failed");
          };

          document.body.appendChild(script);

          return defer.promise;
        },
      },
    })

    .when("/login", {
      templateUrl: "app/views/user/intro.html",
      controller: "LoginController",
      resolve: {
        load: function ($q) {
          var css = document.createElement("link");
          css.rel = "stylesheet";
          css.href = "app/assets/css/style.css";
          document.head.appendChild(css);

          return $q.resolve();
        },
      },
    })

    .when("/register", {
      templateUrl: "app/views/user/register.html",
      controller: "RegisterController",
      resolve: {
        load: function ($q) {
          var css = document.createElement("link");
          css.rel = "stylesheet";
          css.href = "app/assets/css/register.css";
          document.head.appendChild(css);

          return $q.resolve();
        },
      },
    })

    .when("/Alogin", {
      templateUrl: "app/views/admin/login.html",
      controller: "",
      resolve: {
        load: function ($q) {
          var css = document.createElement("link");
          css.rel = "stylesheet";
          css.href = "app/assets/css/Admin/admin.css";
          document.head.appendChild(css);

          return $q.resolve();
        },
      },
    })

    // ✅ correct 404 route
    .otherwise({
      templateUrl: "app/views/404.html",
      resolve: {
        load: function ($q) {
          var css = document.createElement("link");
          css.rel = "stylesheet";
          css.href = "app/assets/css/error.css";
          document.head.appendChild(css);

          return $q.resolve();
        },
      },
    });

});