<?php

use App\Http\Controllers\PatientController;
use App\Models\Patient;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


Route::group([],function(){
    Route::get('patient',[PatientController::class,'index'])->name('patient.list');
    Route::get('patient/add',[PatientController::class,'add'])->name('patient.add');
    Route::post('patient/save',[PatientController::class,'store'])->name('patient.save');
    Route::get('patient/{patient}',[PatientController::class,'show'])->name('patient.show');
    Route::post('patient/update',[PatientController::class,'update'])->name('patient.update');
    Route::get('patient/delete/{patient}',[PatientController::class,'delete'])->name('patient.delete');
});




Route::get('check-inertia', function () {

    $patients = Patient::limit(50)->get();

    return Inertia::render('Home/Index',[
        'patients' => $patients,
    ]);
});
