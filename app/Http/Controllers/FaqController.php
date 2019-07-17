<?php
namespace App\Http\Controllers;

class FaqController extends Controller
{
    private $view='faq';
    public function view()
    {
        return view($this->view);

    }


}
