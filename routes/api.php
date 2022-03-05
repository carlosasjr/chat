<?php

use App\Http\Controllers\Api\ChatApiController;
use App\Http\Controllers\Api\UserApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')
    ->middleware(['auth:web'])
    ->group(function () {
        Route::controller(UserApiController::class)
            ->prefix('users')
            ->group(function () {
                Route::get('/', 'index');
            });

        Route::controller(ChatApiController::class)
            ->prefix('messages')
            ->group(function () {
                Route::get('/create', 'store');
                Route::get('/{id}', 'messagesWithUser');
            });
    });

Route::get('/', function () {
    return ['message', 'ok'];
});
