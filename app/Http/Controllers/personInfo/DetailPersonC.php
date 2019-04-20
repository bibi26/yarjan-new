<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class DetailPersonC extends MY_Controller
{

    function __construct()
    {
        parent::__construct();
        $this->load->model('Detail_person');
    }

    function index($id)
    {
        $this->Detail_person->visit($id);
        $res          = $this->Detail_person->getRow($id);
            if (file_exists(FCPATH . "uploads/profiles/{$res[0]['user_id']}/{$res[0]['user_id']}.jpg"))
            {
                $data['profile_image'] = base_url() . "uploads/profiles/" . $res[0]["user_id"] . "/" . $res[0]["user_id"] . ".jpg";
            }
            else
            {
                if ($res[0]["sex"] == "M")
                {
                    $data['profile_image'] = base_url() . "/assets/img/me-flat.png";
                }
                else
                {
                    
                    $data['profile_image'] = base_url() . "/assets/img/wman1.png";
                }
            }
        $res[0]["birth_date"]=jdate("Y", '', '', 'Asia/Tehran', 'en') - substr($res[0]['birth_date'], 0, 4);
        $data['row']  = $res[0];
        $this->data   = $data;
        $this->middle = 'operator/personInfo/detailPerson';
        $this->layout();
    }

}
