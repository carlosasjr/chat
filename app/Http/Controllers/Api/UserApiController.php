<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;

class UserApiController extends Controller
{
    public function __construct(private User $user)
    {
    }

    public function index(Request $request)
    {
        $users = $this->user
            ->where('id', '<>', $request->user()->id)
            ->inRandomOrder()
            ->get();

        return UserResource::collection($users);
    }
}
