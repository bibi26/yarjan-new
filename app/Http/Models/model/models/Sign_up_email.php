<?php

class Sign_up_email extends CI_Model
{

    function _construct()
    {
        parent::_construct();
    }

    function signUP($input, $verify_code)
    {
        $input_ins = array(
            'user' => $input["email"],
            'type' => "email",
            'pass' =>md5( $input["pass1"]),
            'sex' => $input["sex"],
            'verify_code' => $verify_code,
        );
        foreach ($input_ins as $key => $val)
        {
            $insert_fields[] = "'" . $val . "'";
        }
        foreach ($input_ins as $key => $val)
        {
            $update_fields[] = $key . "='" . $val . "'";
        }
        $this->db->query("INSERT INTO users (" . implode(', ', array_keys($input_ins)) . ") VALUES (" . implode(', ', $insert_fields) . ") ON DUPLICATE KEY UPDATE " . implode(', ', $update_fields));
        $main_id = $this->db->insert_id();

        if ($this->db->affected_rows() <= 0)
        {
            log_message('info', ERRPOINT . " | " . __DIR__ . " | " . __CLASS__ . " | " . __METHOD__ . " | " . __LINE__ . " " . json_encode($input_ins));
            return FALSE;
        } 
        $input_ins1 = array(
            "user_id" => $main_id,
            "first_name" => $input["first_name"],
            "last_name" => $input["last_name"],
            "sex" => $input["sex"],
            "birth_date" => $input["birth_date_year"] . '-' . $input["birth_date_month"] . '-' . $input["birth_date_day"],
            "province" => $input["province"],
            "city" => $input["city"],
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
        $person_id = $this->db->insert_id();
        return $person_id;
    }

    function chkUniqEmail($email)
    {
        $this->db->select('status');
        $this->db->where('user', $email);
        $this->db->where('type', 'email');

        $this->db->from('users');
        $this->db->limit(1);
        return $this->db->get()->result_array();
    }

}
