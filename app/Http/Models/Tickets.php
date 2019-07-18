<?php

namespace App\Http\Models;

use Request;
use DB;
use Illuminate\Database\Eloquent\Model;

class Tickets extends Model
{
    public $timestamps = true;
    protected $fillable = [
        'user_id', 'category_id', 'subject'];
    private static $_instance = null;

    public static function _()
    {
        if (self::$_instance == null) {
            self::$_instance = new Tickets;
        }
        return self::$_instance;

    }

    public function ticket()
    {
        return $this->hasMany(TicketComments::class);
    }

    public function lists()
    {
        $qusery = $this;
        if (user()['role'] == 'admin') {
            return $qusery->get();
        }
        return $qusery->where('user_id', user()['user_id'])->get();

    }

    function store($data)
    {
        try {
            $this->create(
                [
                    "user_id" => user()['user_id'],
                    "category_id" => $data['category_id'],
                    "subject" => $data['subject'],
                ]);

            return modelResponse();
        } catch (\Exception $e) {
            myLog($e->getFile() . '|' . $e->getLine() . '|' . $e->getMessage());
            return modelResponse(true, __('errors.errSystem'));
        }
    }


}
