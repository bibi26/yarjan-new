<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProvinces extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('provinces', function (Blueprint $table) {
            $table->integer('id');
            $table->string('name')->unique();
            $table->timestamp('created_at')->default(DB::raw('CURRENT_TIMESTAMP'));
            $table->timestamp('updated_at')->default(DB::raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
        });
        //        DB::select( DB::raw("INSERT INTO `provinces` VALUES (1,'تهران'),(2,'خراسان رضوی'),(3,'اصفهان'),(4,'آذربایجان شرقی'),(5,'البرز'),(6,'فارس'),(7,'خوزستان'),(8,'آذربایجان غربی'),(9,'قم'),(10,'کرمانشاه'),(11,'سیستان و بلوچستان'),(12,'گیلان'),(13,'کرمان'),(14,'همدان'),(15,'مرکزی'),(16,'یزد'),(17,'اردبیل'),(18,'هرمزگان'),(19,'قزوین'),(20,'زنجان'),(21,'لرستان'),(22,'کردستان'),(23,'گلستان'),(24,'مازندران'),(25,'خراسان شمالی'),(26,'بوشهر'),(27,'خراسان جنوبی'),(28,'ایلام'),(29,'چهارمحال و بختیاری'),(30,'سمنان'),(31,'کهگیلویه و بویراحمد');"));

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('provinces');
    }
}
