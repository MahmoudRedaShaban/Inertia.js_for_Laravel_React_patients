<?php

namespace App\Providers;

use Illuminate\Http\Request;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
        Paginator::useBootstrap();

        //Synchronously
        Inertia::share('app.name', config('app.name'));

        // Lazily
        Inertia::share('auth.user', fn () => Auth::user()
            ? ['id' => Auth::user()->id, 'name' => Auth::user()]
            : null
        );

        // Handel Errors
        Inertia::share([
            'errors' => function () {
                return Session::get('errors')
                    ? Session::get('errors')->getBag('default')->getMessages()
                    : (object) [];
            },
            'success' => function () {
                return Session::get('success')
                    ? Session::get('success')
                    : null;
            },

        ]);
    }
}
