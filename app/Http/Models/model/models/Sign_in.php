<?php

class Sign_in extends CI_Model
{

    function _construct()
    {
        parent::_construct();
    }

    function auth($username, $pass)
    {
        $this->db->where(array('pass' => md5($pass), 'user' => $username))->from('users');
        return $this->db->get()->result_array();
    }

    function loginLog($status,$type, $username, $pass,$err)
    {
        $this->db->set('create_date', 'NOW()', FALSE);
        $data = array(
            'status' => $status,
            'username' => $username,
            'type' => $type,
            'pass' => $pass,
            'msg' => $err,
            'ip' => $this->input->ip_address(),
            'browser1' => $this->agent->browser(),
            'browser2' => $this->agent->agent_string()
        );
        $this->db->insert("log_login", $data);
        return $this->db->insert_id();
    }

}
