<?php

namespace App\Http\Controllers;
use App\Http\Models\Provinces;
use App\Http\Models\Cities;

use Illuminate\Support\Facades\Request;

class StoreController extends Controller
{

    public function getProvince()
    {
        $result = $this->StoreModel->getProvince();
        return response([
            'hasErr' =>  false  ,
            'msg' => $result ,
        ]);
    }

    public function getCity()
    {
        $province_id = Request::input('provinceId');
        $result=Cities::where('province_id',$province_id)->get();
        return response([
            'hasErr' =>  false  ,
            'msg' => $result
        ]);
    }

    public function getRole()
    {
        $result = $this->StoreModel->getRole();
        return response([
            'hasErr' =>  false  ,
            'msg' => $result
        ]);
    }

}
