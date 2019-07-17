<?php
namespace App\Http\Controllers;

class RulesController extends Controller
{
    private $view='rules';
    public function view()
    {
        return view($this->view);

    }


}
