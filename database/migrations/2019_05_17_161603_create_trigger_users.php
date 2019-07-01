<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTriggerUsers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        \Illuminate\Support\Facades\DB::unprepared("

CREATE TRIGGER update_users AFTER UPDATE ON `users`
FOR EACH ROW BEGIN
    IF (old.confirm='accept' and old.status=2  or  old.fname <> new.fname or old.lname <> new.lname or old.nick_name <> new.nick_name or old.i_am <> new.i_am  or old.you_are <> new.you_are) THEN
   INSERT INTO users_versions
          (
            id,
            username,
            password,
            status,
            active,
            active_at,
            active_by,
            active_desc,
            confirm,
            confirm_at,
            confirm_by,
            confirm_desc,
            mobile,
            email,
            sex,
            province_id,
            city_id,
            fname,
            lname,
            nick_name,
            age,
            birth_date,
            verify_code,
            height,
            weight,
            job_status,
            job,
            marriage,
            education,
            field,
            my_income,
            family_income,
            house,
            car,
            child_count,
            age_older_child,
            skin_color,
            health_condition,
            immigration,
            face,
            style,
            nationality,
            life_style,
            i_am,
            you_are,
            s_age_from,
            s_age_to,
            s_education_from,
            s_education_to,
            s_height_from,
            s_height_to,
            s_my_income,
            s_house,
            s_car,
            s_job_status,
            s_health_condition,
            s_child,
            s_immigration,
            s_marriage_single,
            s_marriage_deceased_spouse,
            s_marriage_divorced,
            s_location_fellow_citizen,
            s_location_fellow_province,
            s_location_abroad,
            s_location_homeland,
            step1,
            step2,
            step3,
            step4,
            step5,
            created_at,
            updated_at
          )  
          
         values 
         (

            NEW.id,
            NEW.username,
            NEW.password,
            NEW.status,
            NEW.active,
            NEW.active_at,
            NEW.active_by,
            NEW.active_desc,
            'unknown',
            '0000-00-00 00:00:00',
            NULL,
            NULL,
            NEW.mobile,
            NEW.email,
            NEW.sex,
            NEW.province_id,
            NEW.city_id,
            NEW.fname,
            NEW.lname,
            NEW.nick_name,
            NEW.age,
            NEW.birth_date,
            NEW.verify_code,
            NEW.height,
            NEW.weight,
            NEW.job_status,
            NEW.job,
            NEW.marriage,
            NEW.education,
            NEW.field,
            NEW.my_income,
            NEW.family_income,
            NEW.house,
            NEW.car,
            NEW.child_count,
            NEW.age_older_child,
            NEW.skin_color,
            NEW.health_condition,
            NEW.immigration,
            NEW.face,
            NEW.style,
            NEW.nationality,
            NEW.life_style,
            NEW.i_am,
            NEW.you_are,
            NEW.s_age_from,
            NEW.s_age_to,
            NEW.s_education_from,
            NEW.s_education_to,
            NEW.s_height_from,
            NEW.s_height_to,
            NEW.s_my_income,
            NEW.s_house,
            NEW.s_car,
            NEW.s_job_status,
            NEW.s_health_condition,
            NEW.s_child,
            NEW.s_immigration,
            NEW.s_marriage_single,
            NEW.s_marriage_deceased_spouse,
            NEW.s_marriage_divorced,
            NEW.s_location_fellow_citizen,
            NEW.s_location_fellow_province,
            NEW.s_location_abroad,
            NEW.s_location_homeland,
            NEW.step1,
            NEW.step2,
            NEW.step3,
            NEW.step4,
            NEW.step5,
            NEW.created_at,
            NEW.updated_at
         );
         END IF;
         END;


        ");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        \Illuminate\Support\Facades\DB::unprepared("DROP trigger update_users");
    }
}
