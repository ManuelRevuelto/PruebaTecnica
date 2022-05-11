<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subcategory extends Model
{
    use HasFactory;

    protected $fillable = [
        'cod_subcategory', 
        'cod_category',
        'description'
    ];

    public function Category()
    {
        return $this->belongsTo('App\Models\Category');
    }
}
