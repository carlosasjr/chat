<?php

use App\Http\Controllers\Api\ChatApiController;
use App\Http\Controllers\Api\FavoriteApiController;
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
                Route::post('/create', 'store');
                Route::get('/{id}', 'messagesWithUser');
            });

        Route::controller(FavoriteApiController::class)
            ->prefix('favorites')
            ->group(function () {
                Route::get('/', 'myFavorites');
                Route::post('/create', 'store');
                Route::delete('/delete', 'destroy');
            });
    });

Route::get('/', function () {
    return ['message', 'ok'];
});
