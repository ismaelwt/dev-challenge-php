<?php

namespace App\Http\Controllers;

use App\Model\Todo;
use Illuminate\Http\Request;

class TodoController extends Controller
{

    private $model;


    public function __construct(Todo $todos)
    {
        $this->model = $todos;
    }

    public function getAll() {

        try {
            $todos = $this->model->all();
        } catch (\Throwable $th) {
            return response()->json($th);
        }

        return response()->json($todos);

    }

    public function getOne($id) {

        try {
            $todo = $this->model->find($id);

        } catch (\Throwable $th) {
            return response()->json($th);
        }
        return response()->json($todo);
    }

    public function create(Request $request) {

       try {
        $todo = $this->model->create($request->all());
       } catch (\Throwable $th) {
        return response()->json($th);
       }

        return response()->json($todo);
    }

    public function update($id, Request $request) {
        try {
            $todo = $this->model->find($id)->update($request->all());
        } catch (\Throwable $th) {
            return response()->json($th);
        }
        return response()->json($todo);
    }

    public function delete($id) {
        
        try {

            $todo = $this->model->find($id)->delete();
        
        } catch (\Throwable $th) {
            return response()->json($th);
        }
        
        return response()->json('destroyed');
    }
}
