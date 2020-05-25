<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Todo extends Model
{
    
    protected $table = 'todo';
    
    protected $fillable = [
        'name', 'description', 'done', 'created_at',
    ];
   
    protected $casts = [ 'created_at' => 'Timestamp' ];

    public $timestamps = false;
}
