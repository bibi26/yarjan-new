<?php

namespace App\Http\Controllers;

use http\Env\Request;
use App\Http\Models\Tickets;
use App\Http\Models\TicketComments;
use Yajra\Datatables\Datatables;
use DB;

class TicketsController extends Controller
{

    private $listView = 'tickets.list';
    private $newView = 'ticket.new';

    function listView()
    {
        return view($this->listView);
    }

    function newView()
    {
        return view($this->newView);
    }


    function mng()
    {
        $users = Tickets::_()->lists();
        return Datatables::of($users)
            ->addColumn('created_at', function ($users) {
                return \Morilog\Jalali\Jalalian::forge($users->created_at)->format('Y-m-d H:m:i');
            })
            ->make(true);
    }


    function store(Request $request)
    {
        $this->validate($request, [
            'category_id' => ["required", "integer"],
            'subject' => ["required"],
            'comment' => ["required"],
            'attachment' => ['mimes:jpeg,jpg,gif,png,zip', 'max:' . config("constants.upload.ticket.fileSizeKiloByte")]
        ]);

        DB::beginTransaction();
        try {
            $ticket = Tickets::_()->store($request);
            $request['ticket_id']= $ticket->id;
            $comment=TicketComments::_()->store($request);
            DB::commit();
        } catch (\Exception $e) {
            DB::rollback();
            return back()->withInput()->with('ePop', 'خطای سیستمی');
        }

        if ($request->hasFile('attachment')) {
            try {
                $request->file($request['attachment'])->move(config("constants.upload.ticket.folder"), $comment->id);
            } catch (\Exception $e) {
                \Log::channel('notify')->error("LINE => " . __LINE__ . " METHOD => " . __METHOD__ . " INFO => " . $e->getMessage());
                return back()->withInput()->with('ePop', 'خطا در آپلود فایل!');
            }
        }
        return back()->withInput()->with('sPop', 'پیام شما با موفقیت ارسال گردید و در اسرع وقت جواب داده خواهد شد');
    }


}
