<?php

namespace App\Http\Controllers;

use App\Http\Models\Visits;
use App\Http\Models\Favorites;
use App\Http\Models\BlackLists;
class CartableController extends Controller
{

    private $view = 'cartable';

    function cartableView()
    {
//        event( new \App\Events\NewMessage('cvvvvvvhiiiiiiiiii'));
//        broadcast( new \App\Events\NewMessage('cvvvvvvhiiiiiiiiii'));
        $getMyVisited = Visits::_()->myVisitors()->count();
        $getMyFavorites = Favorites::_()->myFavorites()->count();
        $getMyBlacks = BlackLists::_()->myblacks()->count();
        return view($this->view,['visit_count'=>$getMyVisited,'favorite_count'=>$getMyFavorites,'black_count'=>$getMyBlacks]);
    }

}
