<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class ShowPersonsC extends MY_Controller
{

    private $limit = 10;

    function __construct()
    {
        parent::__construct();
        $this->load->model('Show_persons');
    }

    function getRecords()
    {
        if ($this->input->is_ajax_request())
        {
            $page_number = $this->input->post("page_number");
            $res_row     = $this->Show_persons->getRecords($this->limit, ($page_number - 1) * $this->limit);
        }
        else
        {
            $page_number = 0;
            $res_row     = $this->Show_persons->getRecords($this->limit, $page_number);
        }

        $info = array();
        foreach ($res_row["rows"] as $xx)
        {
            if (file_exists(FCPATH . "uploads/profiles/{$xx['user_id']}/{$xx['user_id']}.jpg"))
            {
                $xx['profile_image'] = base_url() . "uploads/profiles/" . $xx["user_id"] . "/" . $xx["user_id"] . ".jpg";
            }
            else
            {
                if ($xx["sex"] == "M")
                {
                    $xx['profile_image'] = base_url() . "/assets/img/me-flat.png";
                }
                else
                {
                    
                    $xx['profile_image'] = base_url() . "/assets/img/wman1.png";
                }
            }
            $online_status       = $this->Show_persons->onlineStatus($xx["user_id"]);
            $xx['online_status'] = $online_status;
            $xx['birth_date']    = jdate("Y", '', '', 'Asia/Tehran', 'en') - substr($xx['birth_date'], 0, 4);
            $xx['visits']        = count($this->Show_persons->getVisits($xx["id"]));
            $xx['visited']       = count($this->Show_persons->visited($xx["id"])) > 0 ? TRUE : FALSE;
            $info[]              = $xx;
        }

        if ($this->input->is_ajax_request())
        {
            $data['posts'] = $info;
            $data['count'] = count($info);
            echo (json_encode($data));
            die;
        }
        else
        {
            $data['posts']       = $info;
            $data['total_count'] = $res_row["total_count"];
            $this->data          = $data;
            $this->middle        = 'operator/personInfo/showPersons';
            $this->layout();
        }
    }

//
//    function getRecords()
//    {
//        $page_number = 0;
//        $res_row     = $this->Show_persons->getRecords($this->limit, $page_number);
//
//        $info = array();
//        foreach ($res_row as $xx)
//        {
//            $online_status       = $this->Show_persons->onlineStatus($xx["user_id"]);
//            $xx['online_status'] = $online_status;
//            $xx['birth_date']    = jdate("Y", '', '', 'Asia/Tehran', 'en') - substr($xx['birth_date'], 0, 4);
//            $xx['visits']        = count($this->Show_persons->getVisits($xx["id"]));
//            $xx['visited']        = count($this->Show_persons->visited($xx["id"]))>0?TRUE:FALSE;
//            $info[]              = $xx;
//        }
//        $data['posts'] = $info;
//        $this->data    = $data;
//        $this->middle  = 'operator/personInfo/showPersons';
//        $this->layout();
//    }
//
//    function getRecords26()
//    {
//        $page_number = $this->input->post("page_number");
//        $res         = $this->Show_persons->getRecords($this->limit, ($page_number - 1) * $this->limit);
//        $info        = array();
//        foreach ($res as $xx)
//        {
//            $online_status       = $this->Show_persons->onlineStatus($xx["user_id"]);
//            $xx['online_status'] = $online_status;
//            $xx['birth_date']    = jdate("Y", '', '', 'Asia/Tehran', 'en') - substr($xx['birth_date'], 0, 4);
//            $xx['visits']        = count($this->Show_persons->getVisits($xx["user_id"]));
//            $info[]              = $xx;
//        }
//        $data['posts'] = $info;
//        $data['count'] = count($info);
//        echo (json_encode($data));
//        die;
//    }
}
