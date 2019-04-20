<?php

class Show_persons extends CI_Model
{

    function _construct()
    {
        parent::_construct();
    }

    function getRecords($limit, $start)
    {
        $this->db->select('persons.*,province.name AS province_name,city.name AS city_name');
        $this->db->from('persons');
        $this->db->join('province', 'province.id=persons.province');
        $this->db->join('city', 'city.id=persons.city');
        $this->db->where("user_id <>", USERID);
//        $this->db->where("sex <>", SEX);
        $this->db->limit($limit, $start);
        $row= $this->db->get()->result_array();
        $this->db->select('persons.id');
        $this->db->from('persons');
//        $this->db->where("sex <>", SEX);
        $count=$this->db->get()->num_rows();
        return array("rows"=>$row,"total_count"=>$count);
    }

    function getVisits($person_id)
    {
        $this->db->select('id');
        $this->db->from('visits');
        $this->db->where('person_id', $person_id);
        return $this->db->get()->result_array();
    }
    function visited($person_id)
    {
        $this->db->select('id');
        $this->db->from('visits');
        $this->db->where('person_id', $person_id);
        $this->db->where('user_from', USERID);
        return $this->db->get()->result_array();
    }

    function onlineStatus($user_id)
    {
        $this->db->select('id,user_id,timestamp');
        $this->db->from('ci_sessions');
        $this->db->where('user_id', $user_id);
        $this->db->order_by('timestamp', "desc");
        $this->db->limit(1);
        $res = $this->db->get()->result_array();
        if (count($res) != 0)
        {
            if (($res[0]["timestamp"] + $this->config->item("sess_time_to_update")) <= time())
            {
                return "offline";
            }
            else
            {
                
                return "online";
            }
        }
        else
        {
            return "offline";
        }
    }

}
