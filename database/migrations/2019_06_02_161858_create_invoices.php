<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInvoices extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('invoices', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id');
            $table->integer('package_id')->nullable();
            $table->integer('sms_plane_id')->nullable();
            $table->integer('price');
            $table->integer('payed')->nullable()->default(0);
            $table->timestamp('go_to_pay_date')->nullable();
            $table->string('payment_code')->nullable();
            $table->timestamp('payment_date')->nullable();
            $table->mediumText('description')->nullable();
            $table->timestamps();
        });
        DB::statement("ALTER TABLE invoices AUTO_INCREMENT = 10000;");

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('invoices');
    }
}
