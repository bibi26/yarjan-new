<?php

class New_person_info extends CI_Model
{

     function __construct()
    {
        parent::__construct();
        $this->user_id= unserialize(get_cookie('YARJAN'))['USERID'];
    }

    function getRow()
    {
      $user_id=  unserialize(get_cookie('YARJAN'))['USERID'];
                $this->db->where(array('user_id' => $user_id))->from('persons');
        return $this->db->get()->result_array();
    }
    function step1($input)
    {
      $input_ins1 = array(
            "user_id" =>  $this->user_id,
            "job_status" => $input["job_status"],
            "job" => $input["job"],
            "marriage" => $input["marriage"],
            "education" => $input["education"],
            "field" => $input["field"],
            "my_income" => $input["my_income"],
            "family_income" => $input["family_income"],
            "house" => $input["house"],
            "car" => $input["car"],
            "child_count" => $input["child_count"],
            "age_older_child" => $input["age_older_child"],
            "status" => 1
        );
      
        foreach ($input_ins1 as $key => $val)
        {
            $insert_fields1[] = "'" . $val . "'";
        }
        foreach ($input_ins1 as $key => $val)
        {
            $update_fields1[] = $key . "='" . $val . "'";
        }
        $this->db->query("INSERT INTO persons (" . implode(', ', array_keys($input_ins1)) . ") VALUES (" . implode(', ', $insert_fields1) . ") ON DUPLICATE KEY UPDATE " . implode(', ', $update_fields1));
        $main_id = $this->db->insert_id();
        return $main_id;
    }
    
    function step2($input)
    {

       $data = array(
            "weight" => $input["weight"],
            "height" =>  $input["height"],
            "skin_color" => $input["skin_color"],
            "belief" => $input["belief"],
            "health_condition" => $input["health_condition"],
            "immigration" =>  $input["immigration"],
            "face" =>  $input["face"],
            "style" =>  $input["style"],
            "mehrish" =>  $input["mehrish"],
            "nationality" =>  $input["nationality"],
            "life_style" => $input["life_style"],
            "status" => 2
        );
  
        return $this->db->where('user_id',  $this->user_id)->update('persons', $data);

    }
    
    function step3($input)
    {

       $data = array(
            "i_am" => $input["i_am"],
            "you_are" =>  $input["you_are"],
            "status" => 3
        );
  
        return $this->db->where('user_id',  $this->user_id)->update('persons', $data);

    }
        function step4($input)
    {
       $data = array(
            "s_age_from" => $input["s_age_from"],
            "s_age_to" =>  $input["s_age_to"],
            "s_education_from" => $input["s_education_from"],
            "s_education_to" =>  $input["s_education_to"],
            "s_height_from" => $input["s_height_from"],
            "s_height_to" =>  $input["s_height_to"],
            "s_weight_from" => $input["s_weight_from"],
            "s_weight_to" =>  $input["s_weight_to"],
            "s_income" =>  $input["s_income"],
            "s_house" => $input["s_house"],
            "s_car" =>  $input["s_car"],
            "s_job_status" =>  $input["s_job_status"],
            "s_belief" =>  $input["s_belief"],
            "s_health_condition" =>  $input["s_health_condition"],
            "s_personality" =>  $input["s_personality"],
            "s_child" =>  $input["s_child"],
            "s_immigration" => $input["s_immigration"],
            "s_marriage_single" =>  $input["s_marriage_single"],
            "s_marriage_deceased_spouse" => $input["s_marriage_deceased_spouse"],
            "s_marriage_divorced" =>  $input["s_marriage_divorced"],
             "s_location_fellow_citizen" => $input["s_location_fellow_citizen"],
             "s_location_fellow_province" => $input["s_location_fellow_province"],
             "s_location_abroad" => $input["s_location_abroad"],
             "s_location_homeland" => $input["s_location_homeland"],
             "s_skin_white" => $input["s_skin_white"],
             "s_skin_bright_brunette" => $input["s_skin_bright_brunette"],
             "s_skin_dark_brunette" => $input["s_skin_dark_brunette"],
             "s_skin_black" => $input["s_skin_black"],
            "status" => 4
        );
  
        return $this->db->where('user_id',  $this->user_id)->update('persons', $data);

    }

}
