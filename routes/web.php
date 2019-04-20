<?php
App::setLocale('fa');
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

Route::group(['middleware' => [ 'web',]], function ()
{
Route::group(['middleware' => ['is-admin']], function () {

//---------------model-----------------------

    Route::get('/step1', function () {
        return view('personInfo.main');
    });
    Route::get('/step1', 'personInfo\NewPersonInfoController@step1View')->name("personInfo.step1View");
    Route::get('/step2', 'personInfo\NewPersonInfoController@step2View')->name("personInfo.step2View");
    Route::get('/step3', 'personInfo\NewPersonInfoController@step3View')->name("personInfo.step3View");
    Route::get('/step4', 'personInfo\NewPersonInfoController@step4View')->name("personInfo.step4View");
    Route::get('/step5', 'personInfo\NewPersonInfoController@step5View')->name("personInfo.step5View");
    Route::post('/step1', 'personInfo\NewPersonInfoController@step1')->name("personInfo.step1");
    Route::post('/step2', 'personInfo\NewPersonInfoController@step2')->name("personInfo.step2");
    Route::post('/step3', 'personInfo\NewPersonInfoController@step3')->name("personInfo.step3");
    Route::post('/step4', 'personInfo\NewPersonInfoController@step4')->name("personInfo.step4");
    Route::post('/step5', 'personInfo\NewPersonInfoController@step5')->name("personInfo.step5");
    Route::post('/upload_img', 'personInfo\NewPersonInfoController@upload_img')->name("personInfo.uploadImg");
    Route::post('/delete_img', 'personInfo\NewPersonInfoController@delete_img')->name("personInfo.uploadImg.delete");
    Route::get('/cartable', 'CartableController@cartableView')->name("cartableView");
    Route::post('/cartable', 'CartableController@delete_img')->name("personInfo.uploadImg.delete");
    Route::get('/show_persons', 'ShowPersonsController@showPersonsView')->name("personInfo.showPersons");

});

Route::get('/', function () {
    return view('mainPage');
})->name("mainPage");

Route::post('/getCity','StoreController@getCity');


Route::get('/about','MainController@about');
Route::get('/questionnaire','MainController@questionnaire');

Route::get('/sendEmail','0AuthController@sendEmail');


//---------------contact_us-----------------------
Route::get('/contactUs','contact_us\ContactUsController@view')->name('contactus.view');
Route::post('/contactUs','contact_us\ContactUsController@store')->name("contactus.store");
Route::post('/refreshCaptcha','contact_us\ContactUsController@refreshCaptcha');

//---------------sign_in-----------------------
Route::get('/signIn','auth\SignInController@view')->name('signIn.view');
Route::post('/signIn','auth\SignInController@store')->name("signIn.store");

//---------------sign_up-----------------------

Route::get('/signUp/checkVerifyCode/{x?}','auth\SignUpController@checkVerifyCode')->name("signUp.checkVerifyCode");
Route::get('/signUp','auth\SignUpController@view')->name('signUp.view');
Route::post('/signUp','auth\SignUpController@store')->name("signUp.store");

//---------------forget_pass-----------------------

Route::get('/forgetPass','auth\ForgetPassController@view')->name('forgetPass.view');
Route::post('/forgetPass','auth\ForgetPassController@store')->name('forgetPass.store');

//---------------reset_pass-----------------------

Route::get('/resetPass/{x?}','auth\ResetPassController@checkVerifyCode')->name('resetPass.checkVerifyCode');
Route::get('/resetPass/set/{x?}','auth\ResetPassController@view')->name('resetPass.view');
Route::post('/resetPass','auth\ResetPassController@store')->name('resetPass.store');

//---------------sign_out-----------------------

Route::get('/signOut', 'auth\SignOutController@signOut')->name("signOut");

});
