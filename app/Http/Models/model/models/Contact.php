<?php

class Contact extends CI_Model
{

    function _construct()
    {
        parent::_construct();
    }

    function regist($input,$type)
    {
        $data= array(
            'from' => $input['email_mobile'],
            'type' =>$type,
            'msg' => $input['message'],
            'ip' => $this->input->ip_address(),
            'browser1' => $this->agent->browser(),
            'browser2' => $this->agent->agent_string()//            'user_id' =>(get_cookie('MakanBaMa'))?unserialize(get_cookie('MakanBaMa'))['USERID']:'',
        );
       $this->db->set('create_date','NOW()', FALSE);
       return $this->db->insert('contact', $data);
    }

}
