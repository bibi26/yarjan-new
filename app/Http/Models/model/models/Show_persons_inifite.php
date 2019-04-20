<?php

class Show_persons extends CI_Model
{

    function _construct()
    {
        parent::_construct();
    }

 
    function getrecords($limit, $start)
    {
        $this->db->select('*');
        $this->db->from('countries');
                $this->db->limit($limit, $start);

        return $this->db->get()->result_array();
    }
    
  

}
