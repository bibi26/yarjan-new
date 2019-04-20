<?php

namespace App\Http\Models;

use Request;
use DB;
use Illuminate\Database\Eloquent\Model;

class Cities extends Model
{
    public $timestamps = true;

    public function province()
    {
        return $this->belongsTo(Cities::class,'province_id','id');
    }

}
