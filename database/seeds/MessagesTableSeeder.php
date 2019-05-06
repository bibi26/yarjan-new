<?php

use Illuminate\Database\Seeder;
use App\Http\Models\Messages;

class MessagesTableSeeder extends Seeder
{

    function messageFaker()
    {

        return [
            0=>'کسی که فکر نمیکند به ندرت دم فرو میبندد',
            1=>'بعضی اشخاص چنان به خود مغرورند که اگر عاشق بشوند به خود بیشتر عشق می ورزند تا به معشوق',
            2=>'در زندگی اختیار بادها دست ما نیست ، ولی اختیار بادبانها دست ماست',
            2=>'امید یعنی آرزو کنیم چیزی اتفاق بیفتد',
            3=>'این عشق شماست ، نه آنها',
            4=>'بی صبری، شخص را از هیچ رنجی نمی رهاند، بلکه درد جدیدی را برای از پا در آوردن او به وجود می آورد.(افلاطون)',
            5=>'همیشه دود سیگار به سمتی میره که نمی خوای، دقیقا مثه مسیر زندگی ما…',
            6=>'وقتی می شنوی دوستت دارم',
            7=>'راز خوشبختی ما در این است که بدانیم دیگران دلیل خوشبختی ماهستند',
            8=>'تنها چیزی که توی فهمیدن، فهمیدم ، نفهمیدن واقعیت ها بود!',
            9=>'سلاام',
            10=>'خوبی؟',
            11=>'کجایی',
            12=>'چطوری؟',


        ];
    }

    function convert($array)
    {
        $data = [];
        foreach ($array as $key => $value) {
            $data[] = $key;
        }
        return $data;
    }


    public function run()
    {

        for ($i = 0; $i < 1000; $i++) {
            $s=mt_rand(1,4);
            $r=mt_rand(1,4);
            if($r!=$s) {
                \App\Http\Models\Messages::create([
                    'sender_user_id' => $s,
                    'reciever_user_id' => $r,
                    'text' => $this->messageFaker()[mt_rand(0, count($this->messageFaker()) - 1)],
                ]);
            }
        }
    }
}

