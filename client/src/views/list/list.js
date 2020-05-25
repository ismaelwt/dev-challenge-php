app.controller("indexCtl", [
  "$scope",
  "$http",
  "$location",
  function ($scope, $http, $location) {
    $scope.selected = null;
    $scope.todoItems = [];

    $http.get("http://localhost:8000/api/todo").then(
      function (response) {
        $scope.todoItems = response.data;
      },
      function (error) {
        console.log(error);
      }
    );

    $scope.delete = function () {
      if ($scope.selected) {
        $http.delete('http://localhost:8000/api/todo/'+ $scope.selected.id).then(
          function (response) {
            alert('item '+ $scope.selected.name + ' deleted success')
            window.location.reload();
          },
          function (error) {
            console.log(error);
          }
        );
      } else {
        alert("select one item below");
      }
    };

    $scope.edit = function () {
      if ($scope.selected) {
        $location.path("/" + $scope.selected.id);
      } else {
        alert("select one item below");
      }
    };

    $scope.create = function () {
      $location.path("/new");
    };

    $scope.setSelected = function (row) {
      $scope.selected = row;
    };
  },
]);
