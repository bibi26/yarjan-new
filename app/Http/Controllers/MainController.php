<?php
namespace App\Http\Controllers;
use App;

use App\Http\Models\Cities;
use Illuminate\Http\Request;
class MainController extends Controller
{
    public function getCity()
    {
        $province_id = Request::input('provinceId');
        $result=Cities::where('province_id',$province_id)->where('id','like','%0000')->get();
        return responseHandler(false,'' ,$result);

    }
}
