<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersVersions extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users_versions', function (Blueprint $table) {
            $table->integer('id');//change
            $table->string('username');
            $table->string('password');
            $table->string('status')->default("0");
            $table->boolean('active')->default("1");
            $table->timestamp('active_at');
            $table->integer('active_by');
            $table->mediumText('active_desc');
            $table->string('confirm')->default("unknown");
            $table->timestamp('confirm_at')->nullable();
            $table->integer('confirm_by')->nullable();
            $table->mediumText('confirm_desc')->nullable();
            $table->string('mobile')->nullable();
            $table->string('email')->nullable();
            $table->char('sex', 1)->nullable();
            $table->integer('province_id')->unsigned()->nullable();
            $table->string('city_id')->nullable();
            $table->string('fname')->nullable();
            $table->string('lname')->nullable();
            $table->string('nick_name')->nullable();
            $table->integer('age')->unsigned()->nullable();
            $table->char('birth_date', 10)->nullable();
            $table->string('verify_code')->nullable();
            $table->integer('height')->unsigned()->nullable();
            $table->integer('weight')->unsigned()->nullable();
            $table->string('job_status')->nullable();
            $table->string('job')->nullable();
            $table->string('marriage')->nullable();
            $table->string('education')->nullable();
            $table->string('field')->nullable();
            $table->string('my_income')->nullable();
            $table->string('family_income')->nullable();
            $table->string('house')->nullable();
            $table->string('car')->nullable();
            $table->integer('child_count')->nullable();
            $table->integer('age_older_child')->nullable();
            $table->string('skin_color')->nullable();
            $table->string('health_condition')->nullable();
            $table->boolean('immigration')->nullable();
            $table->integer('face')->nullable();
            $table->integer('style')->nullable();
            $table->string('nationality')->nullable();
            $table->string('life_style')->nullable();
            $table->mediumText('i_am')->nullable();
            $table->mediumText('you_are')->nullable();
            $table->string('s_age_from')->nullable();
            $table->string('s_age_to')->nullable();
            $table->string('s_education_from')->nullable();
            $table->string('s_education_to')->nullable();
            $table->string('s_height_from')->nullable();
            $table->string('s_height_to')->nullable();
            $table->string('s_my_income')->nullable();
            $table->string('s_house')->nullable();
            $table->string('s_car')->nullable();
            $table->string('s_job_status')->nullable();
            $table->string('s_health_condition')->nullable();
            $table->string('s_child')->nullable();
            $table->string('s_immigration')->nullable();
            $table->string('s_marriage_single')->nullable();
            $table->string('s_marriage_deceased_spouse')->nullable();
            $table->string('s_marriage_divorced')->nullable();
            $table->string('s_location_fellow_citizen')->nullable();
            $table->string('s_location_fellow_province')->nullable();
            $table->string('s_location_abroad')->nullable();
            $table->string('s_location_homeland')->nullable();
            $table->integer('step1')->nullable()->default("0");
            $table->integer('step2')->nullable()->default("0");
            $table->integer('step3')->nullable()->default("0");
            $table->integer('step4')->nullable()->default("0");
            $table->integer('step5')->nullable()->default("0");
            $table->timestamp('created_at');//change
            $table->timestamp('updated_at');//change
            $table->integer('version')->default("0");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users_versions');
    }
}
