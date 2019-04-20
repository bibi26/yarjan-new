<?php

class Forget_pass extends CI_Model
{
    function _construct()
    {
        parent::_construct();
    }
    
        function auth($username)
    {
        $this->db->where(array( 'user' => $username))->from('users');
        return $this->db->get()->result_array();
    }
    
      function updateVerifyCode($id,$verify_code)
    {
        return $this->db->where('id', $id)->update('users', array('verify_code'=>$verify_code));
    }
    
       function chkVerifyCode($mobile,$verify_code)
    {
        $this->db->select('id');
        $this->db->where('user', $mobile);
        $this->db->where('verify_code', $verify_code);
        $this->db->from('users');
        $this->db->limit(1);
        return $this->db->get()->result_array();
    }
    
          function resetPass($mobile, $new_pass)
    {
        return $this->db->where('user', $mobile)->update('users', array('pass'=>md5($new_pass)));
    }
    
   
    
    
}
