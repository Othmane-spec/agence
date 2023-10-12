<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Http\Requests\StorePostRequest;
use Http;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::all();
        return response()->json($posts);
    }

    public function store(StorePostRequest $request)
    {
        $data = $request->validated();


        // $post = Post::create($request->all());

        // return response()->json($post);
    }

    public function show($id)
    {
        $post = Post::find($id);

        if (!$post) {
            abort(404);
        }

        return response()->json(['post' => $post])
            ->header('Access-Control-Allow-Origin', 'http://localhost:3000') // Remplacez par l'origine de votre application frontend
            ->header('Access-Control-Allow-Methods', 'GET')
            ->header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    }

    public function update(Request $request, Post $post)
    {
        $post->update($request->all());
        return response()->json($post)
            ->header('Access-Control-Allow-Origin', 'http://localhost:3000') // Remplacez par l'origine de votre application frontend
            ->header('Access-Control-Allow-Methods', 'PUT')
            ->header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    }

    public function destroy(Post $post)
    {
        $post->delete();
        return response()->json(null, 204)
            ->header('Access-Control-Allow-Origin', 'http://localhost:3000') // Remplacez par l'origine de votre application frontend
            ->header('Access-Control-Allow-Methods', 'DELETE')
            ->header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    }
}
