<?php

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/

//Broadcast::channel('App.User.{id}', function ($user, $id) {
//    return (int) $user->id === (int) $id;
//});
//Broadcast::channel('/broadcasting/auth', function ($user) {
//    dd('gghooooooooooooooooooooooooo');
//    return $user;
//});
//Broadcast::channel('messages', function ($user) {
//    dd('gghooooooooooooooooooooooooo');
//    return $user;
//});
Broadcast::channel('home.1', function ($user, $id) {
    return (int) $user->id === (int) $id;
});
