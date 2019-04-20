<?php

class Detail_person extends CI_Model
{

    function _construct()
    {
        parent::_construct();
    }

    function visit($id)
    {
      $data=array(
          "user_from"=>USERID,
          "person_id"=>$id
      );
        return $this->db->insert('visits',$data);
    }
    function getRow($id)
    {
      $this->db->select('persons.*,province.name AS province_name,city.name AS city_name');
        $this->db->from('persons');
        $this->db->join('province', 'province.id=persons.province');
        $this->db->join('city', 'city.id=persons.city');
        $this->db->where("persons.id", $id);
        return $this->db->get()->result_array();
    }

}
