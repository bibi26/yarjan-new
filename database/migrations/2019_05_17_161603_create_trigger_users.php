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

CREATE TRIGGER update_users BEFORE UPDATE ON `users`
FOR EACH ROW BEGIN
    IF (old.confirm='accept' and old.status=2  or  old.fname <> OLD.fname or old.lname <> OLD.lname or old.nick_name <> OLD.nick_name or old.i_am <> OLD.i_am  or old.you_are <> OLD.you_are) THEN
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
            updated_at,
            version
          )  
          
         values 
         (

            OLD.id,
            OLD.username,
            OLD.password,
            OLD.status,
            OLD.active,
            OLD.active_at,
            OLD.active_by,
            OLD.active_desc,
            'unknown',
            '0000-00-00 00:00:00',
            NULL,
            NULL,
            OLD.mobile,
            OLD.email,
            OLD.sex,
            OLD.province_id,
            OLD.city_id,
            OLD.fname,
            OLD.lname,
            OLD.nick_name,
            OLD.age,
            OLD.birth_date,
            OLD.verify_code,
            OLD.height,
            OLD.weight,
            OLD.job_status,
            OLD.job,
            OLD.marriage,
            OLD.education,
            OLD.field,
            OLD.my_income,
            OLD.family_income,
            OLD.house,
            OLD.car,
            OLD.child_count,
            OLD.age_older_child,
            OLD.skin_color,
            OLD.health_condition,
            OLD.immigration,
            OLD.face,
            OLD.style,
            OLD.nationality,
            OLD.life_style,
            OLD.i_am,
            OLD.you_are,
            OLD.s_age_from,
            OLD.s_age_to,
            OLD.s_education_from,
            OLD.s_education_to,
            OLD.s_height_from,
            OLD.s_height_to,
            OLD.s_my_income,
            OLD.s_house,
            OLD.s_car,
            OLD.s_job_status,
            OLD.s_health_condition,
            OLD.s_child,
            OLD.s_immigration,
            OLD.s_marriage_single,
            OLD.s_marriage_deceased_spouse,
            OLD.s_marriage_divorced,
            OLD.s_location_fellow_citizen,
            OLD.s_location_fellow_province,
            OLD.s_location_abroad,
            OLD.s_location_homeland,
            OLD.step1,
            OLD.step2,
            OLD.step3,
            OLD.step4,
            OLD.step5,
            OLD.created_at,
            OLD.updated_at,
            OLD.version
         );
         SET NEW.version = OLD.version+1;
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
