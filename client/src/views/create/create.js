app.controller("addCtl", [
  "$scope",
  "$http",
  "$location",
  function ($scope, $http, $location) {
    $scope.todoItem = {};

    $scope.submit = function () {
      if (validation()) {
        if (!$scope.todoItem.created_at) {
          $scope.todoItem.created_at = dateFormat();
        }

        $http
          .post(
            "http://localhost:8000/api/todo",
            JSON.stringify($scope.todoItem)
          )
          .then(
            function (response) {
              alert("Item " + response.data.name + " created success.");
              $location.path("/");
            },
            function (response) {
              alert("internal server error ");
            }
          );

        console.log(JSON.stringify($scope.todoItem));
        //$scope.todoItem = null;
      }else {



      }
    };

    $scope.back = function () {
      $location.path("/");
    };

    function validation() {

      if (!$scope.todoItem || !$scope.todoItem.name || !$scope.todoItem.description) {
        alert('Complete all Fields')
        return false;
      }
      return true;
    }

    function dateFormat() {
      var d = new Date();
      var curr_date = d.getDate();
      var curr_month = d.getMonth() + 1; //Months are zero based
      var curr_year = d.getFullYear();
      return curr_date + "-" + curr_month + "-" + curr_year;
    }
  },
]);
