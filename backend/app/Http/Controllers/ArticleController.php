<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreArticleRequest;
use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    //funciona
    public function index()
    {
        $data = Article::get();
        return response()->json($data, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    //funciona
    public function store(Request $request, Article $article)
    {
        try{
            $article::create($request->all());
            return response()->json([
                'message' => 'Task updated successful'
            ], 200);
        }catch(\Illuminate\Database\QueryException $ex){
            return response('Error dato repetido', 409);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function show(Article $article)
    {
        //return view('article.show',compact('article'));
        $data = Article::find($article->id);
        return response()->json($data, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Article $article)
    {
        try {
            $article->update($request->all());
            return response()->json([
                'message' => 'Task updated successful'
            ], 200);
        } catch (\Illuminate\Database\QueryException $ex) {
            return response('Error dato repetido', 409);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function destroy($article)
    {
        $res = Article::find($article)->delete();
        return response()->json([
            'message' => "Successfully deleted",
            'success' => true
        ], 200);
    }

}
