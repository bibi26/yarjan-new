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
Route::post('/violationReport', 'DetailPersonController@violationReport')->name("violationReport");

Route::group(['middleware' => [ 'cors']], function ()
{
Route::group(['middleware' => [ 'web']], function ()
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
    Route::post('/show_persons', 'ShowPersonsController@showPersonsView')->name("personInfo.showPersons");
    Route::get('/show_persons/online', 'ShowPersonsController@showPersonsView')->defaults('type', 'onlines');
    Route::get('/show_persons/visits', 'ShowPersonsController@showPersonsView')->defaults('type', 'visits');
    Route::get('/show_persons/favorites', 'ShowPersonsController@showPersonsView')->defaults('type', 'favorites');
    Route::get('/show_ persons/blacks', 'ShowPersonsController@showPersonsView')->defaults('type', 'blacks');
    Route::get('/detailPerson/{id}', 'DetailPersonController@detailPersonView')->name("personInfo.detailPerson");
    Route::get('/blackList/{id}/{blacked}', 'DetailPersonController@blackList')->name("blackList");
    Route::get('/favorite/{id}/{favorited}', 'DetailPersonController@favorite')->name("blackList");
    Route::post('/send_free_message', 'MessageController@freeMessage')->name("sendFreeMessage");
    Route::post('/send_real_message', 'MessageController@realMessage')->name("sendRealMessage");
    Route::get('/message/all', 'MessageController@messageView')->defaults('type', 'all');
    Route::get('/message/inbox', 'MessageController@messageView')->defaults('type', 'inbox');
    Route::get('/message/outbox', 'MessageController@messageView')->defaults('type', 'outbox');
    Route::get('/message/unread', 'MessageController@messageView')->defaults('type', 'unread');
    Route::get('/conversation/{user_id}', 'MessageController@conversations');
    Route::post('/conversation', 'MessageController@conversations');
//    Route::get('/table', 'DetailPersonController@table')->name("table");

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
Route::post('/signIn','auth\SignInController@login')->name("signIn.login");

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
});
Route::post('/broadcasting/auth', function (){
    return response([
        'messages' => '',
        'count' => '',
    ]);
});
//Route::get('/event', function (){
//    event( new \App\Events\NewMessage('cvvvvvvhiiiiiiiiii'));
//    broadcast( new \App\Events\NewMessage('cvvvvvvhiiiiiiiiii'));
//    return view('test');
//
//});
//Route::post('/laravel-websockets/event', function (){
//    event( new \App\Events\NewMessage('cvvvvvvhiiiiiiiiii'));
//    broadcast( new \App\Events\NewMessage('cvvvvvvhiiiiiiiiii'));
//
//
//});
//Route::post('/broadcasting/auth ', function (){
//  return true;
//});
