<?php

use Illuminate\Database\Seeder;
use App\Http\Models\Messages;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class MessagesTableSeeder extends Seeder
{

    function messageFaker()
    {

        return [
            0 => 'کسی که فکر نمیکند به ندرت دم فرو میبندد',
            1 => 'بعضی اشخاص چنان به خود مغرورند که اگر عاشق بشوند به خود بیشتر عشق می ورزند تا به معشوق',
            2 => 'در زندگی اختیار بادها دست ما نیست ، ولی اختیار بادبانها دست ماست',
            2 => 'امید یعنی آرزو کنیم چیزی اتفاق بیفتد',
            3 => 'این عشق شماست ، نه آنها',
            4 => 'بی صبری، شخص را از هیچ رنجی نمی رهاند، بلکه درد جدیدی را برای از پا در آوردن او به وجود می آورد.(افلاطون)',
            5 => 'همیشه دود سیگار به سمتی میره که نمی خوای، دقیقا مثه مسیر زندگی ما…',
            6 => 'وقتی می شنوی دوستت دارم',
            7 => 'راز خوشبختی ما در این است که بدانیم دیگران دلیل خوشبختی ماهستند',
            8 => 'تنها چیزی که توی فهمیدن، فهمیدم ، نفهمیدن واقعیت ها بود!',
            9 => 'سلاام',
            10 => 'خوبی؟',
            11 => 'کجایی',
            12 => 'چطوری؟',
        ];
    }

    function convert($array)
    {
        $data = [];
        foreach ($array as $key => $value)
        {
            $data[] = $key;
        }
        return $data;
    }

    public function run()
    {
<<<<<<< HEAD

        for ($i = 0; $i < 500; $i++) {
            $s=mt_rand(1,4);
            $r=mt_rand(1,4);
            if($r!=$s) {
                \App\Http\Models\Messages::create([
                    'sender_user_id' => $s,
                    'reciever_user_id' => $r,
                    'text' => $this->messageFaker()[mt_rand(0, count($this->messageFaker()) - 1)],
                ]);
            }
=======
        $conversation_id = DB::table('conversations')->insertGetId([
            'one_user_id' => 26000,
            'two_user_id' => 26001,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
        for ($i = 0; $i < 50; $i++)
        {
            \App\Http\Models\Messages::create([
                'conversation_id' => $conversation_id,
                'sender_user_id' => mt_rand(26000, 26001),
                'text' => $this->messageFaker()[mt_rand(0, count($this->messageFaker()) - 1)],
            ]);
        }
        $conversation_id = DB::table('conversations')->insertGetId([
            'one_user_id' => 26000,
            'two_user_id' => 26002,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
        for ($i = 0; $i < 50; $i++)
        {
            \App\Http\Models\Messages::create([
                'conversation_id' => $conversation_id,
                'sender_user_id' => mt_rand(26000, 26002),
                'text' => $this->messageFaker()[mt_rand(0, count($this->messageFaker()) - 1)],
            ]);
>>>>>>> 1c7424fc8e865c67f38fc1b2b673609374e2eeb5
        }
        $conversation_id = DB::table('conversations')->insertGetId([
            'one_user_id' => 26000,
            'two_user_id' => 26003,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
        for ($i = 0; $i < 50; $i++)
        {
            \App\Http\Models\Messages::create([
                'conversation_id' => $conversation_id,
                'sender_user_id' => mt_rand(26000, 26003),
                'text' => $this->messageFaker()[mt_rand(0, count($this->messageFaker()) - 1)],
            ]);
            $conversation_id = DB::table('conversations')->insertGetId([
                'one_user_id' => 26001,
                'two_user_id' => 26003,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ]);
            for ($i = 0; $i < 50; $i++)
            {
                \App\Http\Models\Messages::create([
                    'conversation_id' => $conversation_id,
                    'sender_user_id' => mt_rand(26001, 26003),
                    'text' => $this->messageFaker()[mt_rand(0, count($this->messageFaker()) - 1)],
                ]);
            }
            $conversation_id = DB::table('conversations')->insertGetId([
                'one_user_id' => 26001,
                'two_user_id' => 26004,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ]);
            for ($i = 0; $i < 50; $i++)
            {
                \App\Http\Models\Messages::create([
                    'conversation_id' => $conversation_id,
                    'sender_user_id' => mt_rand(26001, 26004),
                    'text' => $this->messageFaker()[mt_rand(0, count($this->messageFaker()) - 1)],
                ]);
            }
        }
    }

}
