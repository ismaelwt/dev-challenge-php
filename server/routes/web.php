<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});


$router->group(['prefix' => "/api/todo"], function() use ($router){

    $router->get('/', "TodoController@getAll");
    $router->get('/{id}', "TodoController@getOne");
    $router->post('/', "TodoController@create");
    $router->put('/{id}', "TodoController@update");
    $router->delete('/{id}', "TodoController@delete");


});
