<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Models\Packages;
use App\Http\Models\SmsPlanes;
use App\Http\Models\Invoices;


class PlanesController extends Controller
{
    private $view = 'planes.main';


    function step1View()
    {
        $packages = Packages::all();
        return view($this->view, ['step' => 1, 'packages' => $packages]);
    }

    function step2View()
    {
        if(!session('package_id')){
            return \Redirect::to("/planes/step1")->with('ePop', 'خطای دسترسی');
        }
        $smsPlanes = SmsPlanes::all();
        return view($this->view, ['step' => 2, 'smsPlanes' => $smsPlanes]);
    }

    function step3View()
    {
        if(!session('factor')){
            return \Redirect::to("/planes/step2")->with('ePop', 'خطای دسترسی');
        }
        return view($this->view, ['step' => 3]);
    }

    function step1(Request $request)
    {
        $this->validate($request, [
            'package' => ["required", "integer"],
        ]);
        session(['package_id' => $request['package']]);
        return \Redirect::to("/planes/step2");
    }

    function step2(Request $request)
    {
        $this->validate($request, [
            'sms_plane' => ["required", "integer"],
        ]);
        session(['sms_plane_id' => $request['sms_plane']]);
        $package = Packages::_()->show(session('package_id'));
        $smsPlane = SmsPlanes::_()->show($request['sms_plane']);
        $invoice = Invoices::_()->store();
        if ($invoice['error']) {
            return \Redirect::to("/planes/step2")->with('ePop', 'خطای سیستمی');
        }
        session(['factor' => json_encode([[
            'invoice_id' => $invoice->id,
            'package_name' => $package['name'],
            'sms_plane' => $smsPlane['name'],
            'price' => $package['price'] + $smsPlane['price']
        ]])]);
        return \Redirect::to("/planes/step3");
    }

    function step3()
    {
        if(!session('factor')){
            return \Redirect::to("/planes/step3")->with('ePop', 'خطای دسترسی');
        }
        $factor=json_decode(session('factor'))[0];
        $invoice = Invoices::_()->serviceCall($factor->invoice_id);
        if ($invoice['error']) {
            return \Redirect::to("/planes/step3")->with('ePop', 'خطای سیستمی');
        }
        return \Redirect::to("/planes/serviceCall");
    }

}


