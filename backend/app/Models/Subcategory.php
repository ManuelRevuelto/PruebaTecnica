<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subcategory extends Model
{
    use HasFactory;

    public function categories()
    {
        return $this->belongsTo('App\Models\Category');
    }

    public function aricles()
    {
        return $this->belongsTo('App\Models\Aricle');
    }

}
