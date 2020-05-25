app.controller("todoItemCtl", [
  "$scope",
  "$stateParams",
  "$http",
  "$location",
  function ($scope, $stateParams, $http, $location) {
    $scope.todoItem = {};

    $scope.init = function (id) {
      if (id) {
        $http.get("http://localhost:8000/api/todo/" + id).then(
          function (response) {
            $scope.todoItem = response.data;
          },
          function (error) {
            console.log(error);
          }
        );
      }
    };

    $scope.back = function () {
      $location.path("/");
    };

    function validation() {
      if (
        !$scope.todoItem ||
        !$scope.todoItem.name ||
        !$scope.todoItem.description
      ) {
        alert("Complete all Fields");
        return false;
      }
      return true;
    }

    $scope.save = function () {
      if (validation()) {
        if (!$scope.todoItem.created_at) {
          $scope.todoItem.created_at = dateFormat();
        }

        $http
          .put(
            "http://localhost:8000/api/todo/" + $scope.todoItem.id,
            JSON.stringify($scope.todoItem)
          )
          .then(
            function (response) {
              alert("Item " + $scope.todoItem.name + " updated success.");
              $location.path("/");
            },
            function (response) {
              alert("internal server error ");
            }
          );

        console.log(JSON.stringify($scope.todoItem));
      }

      //$scope.todoItem = null;
    };

    $scope.init($stateParams.id);
  },
]);
