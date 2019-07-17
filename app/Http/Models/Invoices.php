<?php

namespace App\Http\Models;

use DB;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Invoices extends Model
{
    public $timestamps = true;

    protected $fillable = [
        'user_id',
        'package_id',
        'sms_plane_id',
        'payed',
        'price',
        'payment_code',
        'description',
    ];
    private static $_instance = null;

    public static function _()
    {
        if (self::$_instance == null) {
            self::$_instance = new Invoices;
        }
        return self::$_instance;
    }

    function store()
    {
        try {
            return $this->create([
                'user_id' => user()['user_id'],
                'package_id' => session('package'),
                'sms_plane_id' => session('sms'),
                'price' => '',
            ]);
            return modelResponse();
        } catch (\Exception $e) {
            myLog($e->getFile() . '|' . $e->getLine() . '|' . $e->getMessage());
            return modelResponse(true, __('errors.errSystem'));
        }
    }

    function goToPay($id)
    {
        try {
            return $this->where(['id' => $id, 'payed' => 0])->update(['go_to_pay_date' => Carbon::now(), 'payed' => 1]);
            return modelResponse();
        } catch (\Exception $e) {
            myLog($e->getFile() . '|' . $e->getLine() . '|' . $e->getMessage());
            return modelResponse(true, __('errors.errSystem'));
        }
    }


}
