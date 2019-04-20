<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Request;

class CartableController extends Controller
{

    private $view = 'cartable';

    function cartableView()
    {
        return view($this->view);
    }

}
