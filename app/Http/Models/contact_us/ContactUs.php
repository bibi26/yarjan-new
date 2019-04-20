<?php

namespace App\Http\Models\contact_us;

use DB;
use Illuminate\Database\Eloquent\Model;

class ContactUs extends Model
{
    public $timestamps = true;

    protected $fillable = [
        'mobile',
        'email',
        'message'
    ];

}
