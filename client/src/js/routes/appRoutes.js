app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('list', {
            url: "/",
            templateUrl: 'list/list.html',
            controller: 'indexCtl'
        })
        .state('new', {
            url: "/new",
            templateUrl: 'create/create.html',
            controller: 'addCtl'
        })
        .state('edit', {
            url: "/:id",
            templateUrl: 'edit/edit.html',
            controller: 'todoItemCtl'
    });
}]);
