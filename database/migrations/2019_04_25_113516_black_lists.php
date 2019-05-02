<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class BlackLists extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('black_lists', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('blacker_user_id');
            $table->integer('blacked_user_id');
            $table->tinyInteger('blacked');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('black_lists');
    }
}
