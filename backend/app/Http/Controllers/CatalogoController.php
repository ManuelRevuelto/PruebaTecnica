<?php

namespace App\Http\Controllers;

use App\Models\Catalogo;
use Illuminate\Http\Request;

class CatalogoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index()
    {
        $catalogo = Catalogo::latest()->paginate(5);
  
        return view('catalogo.index',compact('catalogo'))
            ->with('i', (request()->input('page', 1) - 1) * 5);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('catalogo.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'nombre' => 'required',
            'descripcion' => 'required',
        ]);
    
        Catalogo::create($request->all());
     
        return redirect()->route('catalogo.index')
                        ->with('success','Catalogo creado');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Catalogo  $catalogo
     * @return \Illuminate\Http\Response
     */
    public function show(Catalogo $catalogo)
    {
        return view('catalogo.show',compact('catalogo'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Catalogo  $catalogo
     * @return \Illuminate\Http\Response
     */
    public function edit(Catalogo $catalogo)
    {
        return view('catalogo.show',compact('catalogo'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Catalogo  $catalogo
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Catalogo $catalogo)
    {
        $request->validate([
            'nombre' => 'required',
            'descripcion' => 'required',
        ]);
    
        $data->update($request->all());
    
        return redirect()->route('data.index')
            ->with('success','Catalogo cambiado con exito');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Catalogo  $catalogo
     * @return \Illuminate\Http\Response
     */
    public function destroy(Catalogo $catalogo)
    {
        $catalogo->delete();
    
        return redirect()->route('catalogo.index')
            ->with('success','Catalogo borrado');
    }
}
