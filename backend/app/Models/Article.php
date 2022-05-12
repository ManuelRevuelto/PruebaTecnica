<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;

    protected $fillable = [
        'cod_article', 
        'description',
        'stock',
        'price'
    ];

    public function subcategories()
    {
        return $this->hasMany('App\Models\Subcategory');
    }
}
