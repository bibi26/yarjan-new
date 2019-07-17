<?php
namespace App\Http\Controllers;

class FeaturesController extends Controller
{
    private $view='features';
    public function view()
    {
        return view($this->view);

    }


}
