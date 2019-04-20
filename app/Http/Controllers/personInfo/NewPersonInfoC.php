<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class NewPersonInfoC extends MY_Controller
{

    function __construct()
    {
        parent::__construct();
        $this->load->model('main');
        $this->load->model('New_person_info');
        if (!isset($_COOKIE) or empty($_COOKIE['YARJAN']))
        {
            redirect('mainC/');
        }
    }

    public function index()
    {
        $res = $this->New_person_info->getRow();
        if (count($res) == 1)
        {
            $data          = array(
                "__job_status" => $res[0]["job_status"],
                "__job" => $res[0]["job"],
                "__marriage" => $res[0]["marriage"],
                "__education" => $res[0]["education"],
                "__field" => $res[0]["field"],
                "__my_income" => $res[0]["my_income"],
                "__family_income" => $res[0]["family_income"],
                "__house" => $res[0]["house"],
                "__car" => $res[0]["car"],
                "__child_count" => $res[0]["child_count"],
                "__age_older_child" => $res[0]["age_older_child"]
            );
        }
        $this->data        = $data;
        $this->middle      = 'operator/personInfo/newPersonInfo';
        $this->layout();
    }

    public function step1()
    {
        $input = array(
            "job" => $this->input->post("job"),
            "job_status" => $this->input->post("job_status"),
            "marriage" => $this->input->post("marriage"),
            "education" => $this->input->post("education"),
            "field" => $this->input->post("field"),
            "my_income" => $this->input->post("my_income"),
            "family_income" => $this->input->post("family_income"),
            "house" => $this->input->post("house"),
            "car" => $this->input->post("car"),
            "child_count" => $this->input->post("child_count"),
            "age_older_child" => $this->input->post("age_older_child")
        );
        $this->form_validation->set_rules('job_status', 'وضعیت اشتغال', 'required', array('required' => ' لطفا فیلد  وضعیت اشتغال را تعیین نمایید.'));
        $this->form_validation->set_rules('job', 'شغل', 'required', array('required' => ' لطفا فیلد  شغل را وارد نمایید.'));
        $this->form_validation->set_rules('marriage', 'وضعیت ازدواج', 'required', array('required' => ' لطفا فیلد  وضعیت ازدواج را تعیین نمایید.'));
        $this->form_validation->set_rules('education', 'تحصیلات', 'required', array('required' => ' لطفا فیلد  تحصیلات را تعیین نمایید.'));
        $this->form_validation->set_rules('field', 'رشته تحصیلی', 'required|trim', array('required' => ' لطفا فیلد  رشته تحصیلی را وارد نمایید.'));
        $this->form_validation->set_rules('my_income', 'میزان درآمد شما', 'required', array('required' => ' لطفا فیلد  میزان درآمد شما را تعیین نمایید.'));
        $this->form_validation->set_rules('family_income', 'میزان درآمد خانواده', 'required', array('required' => ' لطفا فیلد  میزان درآمد خانواده را تعیین نمایید.'));
        $this->form_validation->set_rules('house', 'وضعیت مسکن', 'required', array('required' => ' لطفا فیلد  وضعیت مسکن را تعیین نمایید.'));
        $this->form_validation->set_rules('car', 'وضعیت اتومبیل', 'required', array('required' => ' لطفا فیلد  وضعیت اتومبیل را تعیین نمایید.'));
        if ($input["marriage"] != "SINGLE" and $input["marriage"] != "")
        {
            $this->form_validation->set_rules('child_count', 'تعداد فرزندانم', 'required', array('required' => ' لطفا فیلد  تعداد فرزندانم را تعیین نمایید.'));
            $this->form_validation->set_rules('age_older_child', 'سن فرزند بزرگترم', 'required', array('required' => ' لطفا فیلد  سن فرزند بزرگترم را تعیین نمایید.'));
        }

        if ($this->form_validation->run() == false)
        {
            $data["_province"] = $this->main->getProvince();
            if (is_numeric($input['province']))
            {
                $data["_city"] = $this->main->getCity($input['province']);
            }
            $this->form_validation->set_error_delimiters('<div class="alertInputError">', '</div>');
            $data["step1"] = 1;
            $this->data    = $data;
            $this->middle  = 'operator/personInfo/newPersonInfo';
            $this->layout();
            return;
        }
        else
        {


            if ($input['marriage'] == "SINGLE")
            {
                $input['child_count']     = "";
                $input['age_older_child'] = "";
            }


            $this->New_person_info->step1($input);
            $res = $this->New_person_info->getRow();
            if ($res[0]['weight'] != NULL or $res[0]['weight'] != '')
            {
                $data = array(
                    "__weight" => $res[0]['weight'],
                    "__height" => $res[0]['height'],
                    "__skin_color" => $res[0]['skin_color'],
                    "__belief" => $res[0]['belief'],
                    "__health_condition" => $res[0]['health_condition'],
                    "__immigration" => $res[0]['immigration'],
                    "__face" => $res[0]['face'],
                    "__style" => $res[0]['style'],
                    "__mehrish" => $res[0]['mehrish'],
                    "__nationality" => $res[0]['nationality'],
                    "__life_style" => $res[0]['life_style'],
                );
            }

            $data["step2"] = 2;
            $this->data    = $data;
            $this->middle  = 'operator/personInfo/newPersonInfo';
            $this->layout();
        }
    }

    public function backStep1()
    {
        $res        = $this->New_person_info->getRow();
        $data       = array(
            "__job_status" => $res[0]["job_status"],
            "__job" => $res[0]["job"],
            "__marriage" => $res[0]["marriage"],
            "__education" => $res[0]["education"],
            "__field" => $res[0]["field"],
            "__my_income" => $res[0]["my_income"],
            "__family_income" => $res[0]["family_income"],
            "__house" => $res[0]["house"],
            "__car" => $res[0]["car"],
            "__child_count" => $res[0]["child_count"],
            "__age_older_child" => $res[0]["age_older_child"]
        );

        $data["_city"]     = $this->main->getCity($res[0]['province']);
        $data["_province"] = $this->main->getProvince();
        $data["step1"]     = 1;

        $this->data   = $data;
        $this->middle = 'operator/personInfo/newPersonInfo';
        $this->layout();
    }

    public function step2()
    {
        $input = array(
            "weight" => $this->input->post("weight"),
            "height" => $this->input->post("height"),
            "skin_color" => $this->input->post("skin_color"),
            "belief" => $this->input->post("belief"),
            "health_condition" => $this->input->post("health_condition"),
            "immigration" => $this->input->post("immigration"),
            "face" => $this->input->post("face"),
            "style" => $this->input->post("style"),
            "mehrish" => $this->input->post("mehrish"),
            "nationality" => $this->input->post("nationality"),
            "life_style" => $this->input->post("life_style"),
        );

        $this->form_validation->set_rules('weight', 'وزن', 'required', array('required' => ' لطفا فیلد  وزن را تعیین نمایید.'));
        $this->form_validation->set_rules('height', 'قد', 'required', array('required' => ' لطفا فیلد  قد را تعیین نمایید.'));
        $this->form_validation->set_rules('skin_color', 'رنگ پوست', 'required', array('required' => ' لطفا فیلد  رنگ پوست را تعیین نمایید.'));
        $this->form_validation->set_rules('belief', 'میزان اعتقادات ', 'required', array('required' => ' لطفا فیلد  میزان اعتقادات  را تعیین نمایید.'));
        $this->form_validation->set_rules('health_condition', 'وضعیت سلامتی', 'required', array('required' => ' لطفا فیلد  وضعیت سلامتی را وارد نمایید.'));
        $this->form_validation->set_rules('immigration', 'قصد مهاجرت به خارج', 'required', array('required' => ' لطفا فیلد  قصد مهاجرت به خارج را تعیین نمایید.'));
        $this->form_validation->set_rules('face', 'زیبایی', 'required', array('required' => ' لطفا فیلد زیبایی را وارد نمایید.'));
        $this->form_validation->set_rules('style', 'تیپ', 'required', array('required' => ' لطفا فیلد تیپ را تعیین نمایید.'));
        $this->form_validation->set_rules('mehrish', 'مهریه', 'required', array('required' => ' لطفا فیلد مهریه را تعیین نمایید.'));
        $this->form_validation->set_rules('nationality', 'قومیت', 'required', array('required' => ' لطفا فیلد قومیت را تعیین نمایید.'));
        $this->form_validation->set_rules('life_style', 'شیوه زندگی', 'required', array('required' => ' لطفا فیلد شیوه زندگی را تعیین نمایید.'));


        if ($this->form_validation->run() == false)
        {
            $this->form_validation->set_error_delimiters('<div class="alertInputError">', '</div>');
            $data["step2"] = 2;
            $this->data    = $data;
            $this->middle  = 'operator/personInfo/newPersonInfo';
            $this->layout();
            return;
        }
        else
        {

            $this->New_person_info->step2($input);
            $res = $this->New_person_info->getRow();
            if ($res[0]['i_am'] != NULL or $res[0]['i_am'] != '')
            {
                $data = array(
                    "__i_am" => $res[0]['i_am'],
                    "__you_are" => $res[0]['you_are']
                );
            }

            $data["step3"] = 3;
            $this->data    = $data;
            $this->middle  = 'operator/personInfo/newPersonInfo';
            $this->layout();
        }
    }

    public function backStep2()
    {
        $res           = $this->New_person_info->getRow();
        $data          = array(
            "__weight" => $res[0]['weight'],
            "__height" => $res[0]['height'],
            "__skin_color" => $res[0]['skin_color'],
            "__belief" => $res[0]['belief'],
            "__health_condition" => $res[0]['health_condition'],
            "__immigration" => $res[0]['immigration'],
            "__face" => $res[0]['face'],
            "__style" => $res[0]['style'],
            "__mehrish" => $res[0]['mehrish'],
            "__nationality" => $res[0]['nationality'],
            "__life_style" => $res[0]['life_style'],
        );
        $data["step2"] = 2;
        $this->data    = $data;
        $this->middle  = 'operator/personInfo/newPersonInfo';
        $this->layout();
    }

    public function step3()
    {
        $input = array(
            "i_am" => $this->input->post("i_am"),
            "you_are" => $this->input->post("you_are"),
        );

        $this->form_validation->set_rules('i_am', 'وزن', 'required', array('required' => ' لطفا فیلد  من چنین هستم را وارد نمایید.'));
        $this->form_validation->set_rules('you_are', 'قد', 'required', array('required' => ' لطفا فیلد  همسرم چنین باشد را وارد نمایید.'));

        if ($this->form_validation->run() == false)
        {
            $this->form_validation->set_error_delimiters('<div class="alertInputError">', '</div>');
            $data["step3"] = 3;
            $this->data    = $data;
            $this->middle  = 'operator/personInfo/newPersonInfo';
            $this->layout();
            return;
        }
        else
        {
            $this->New_person_info->step3($input);
            $res = $this->New_person_info->getRow();
            if ($res[0]['s_age_from'] != NULL or $res[0]['s_age_from'] != '')
            {
                $data = array(
                    "__s_age_from" => $res[0]['s_age_from'],
                    "__s_age_to" => $res[0]['s_age_to'],
                    "__s_education_from" => $res[0]['s_education_from'],
                    "__s_education_to" => $res[0]['s_education_to'],
                    "__s_height_from" => $res[0]['s_height_from'],
                    "__s_height_to" => $res[0]['s_height_to'],
                    "__s_weight_from" => $res[0]['s_weight_from'],
                    "__s_weight_to" => $res[0]['s_weight_to'],
                    "__s_income" => $res[0]['s_income'],
                    "__s_job_status" => $res[0]['s_job_status'],
                    "__s_house" => $res[0]['s_house'],
                    "__s_car" => $res[0]['s_car'],
                    "__s_belief" => $res[0]['s_belief'],
                    "__s_health_condition" => $res[0]['health_condition'],
                    "__s_personality" => $res[0]['s_personality'],
                    "__s_child" => $res[0]['s_child'],
                    "__s_immigration" => $res[0]['s_immigration'],
                    "__s_marriage_single" => $res[0]["s_marriage_single"],
                    "__s_marriage_deceased_spouse" => $res[0]["s_marriage_deceased_spouse"],
                    "__s_marriage_divorced" => $res[0]["s_marriage_divorced"],
                    "__s_location_fellow_citizen" => $res[0]["s_location_fellow_citizen"],
                    "__s_location_fellow_province" => $res[0]["s_location_fellow_province"],
                    "__s_location_abroad" => $res[0]["s_location_abroad"],
                    "__s_location_homeland" => $res[0]["s_location_homeland"],
                    "__s_skin_white" => $res[0]["s_skin_white"],
                    "__s_skin_bright_brunette" => $res[0]["s_skin_bright_brunette"],
                    "__s_skin_dark_brunette" => $res[0]["s_skin_dark_brunette"],
                    "__s_skin_black" => $res[0]["s_skin_black"],
                );
            }
            $data["step4"] = 4;
            $this->data    = $data;
            $this->middle  = 'operator/personInfo/newPersonInfo';
            $this->layout();
        }
    }

    public function backStep3()
    {
        $res           = $this->New_person_info->getRow();
        $data          = array(
            "__i_am" => $res[0]['i_am'],
            "__you_are" => $res[0]['you_are'],
        );
        $data["step3"] = 3;
        $this->data    = $data;
        $this->middle  = 'operator/personInfo/newPersonInfo';
        $this->layout();
    }

    public function step4()
    {
        $input = array(
            "s_age_from" => $this->input->post("s_age_from"),
            "s_age_to" => $this->input->post("s_age_to"),
            "s_education_from" => $this->input->post("s_education_from"),
            "s_education_to" => $this->input->post("s_education_to"),
            "s_height_from" => $this->input->post("s_height_from"),
            "s_height_to" => $this->input->post("s_height_to"),
            "s_weight_from" => $this->input->post("s_weight_from"),
            "s_weight_to" => $this->input->post("s_weight_to"),
            "s_job_status" => $this->input->post("s_job_status"),
            "s_income" => $this->input->post("s_income"),
            "s_house" => $this->input->post("s_house"),
            "s_car" => $this->input->post("s_car"),
            "s_belief" => $this->input->post("s_belief"),
            "s_health_condition" => $this->input->post("s_health_condition"),
            "s_personality" => $this->input->post("s_personality"),
            "s_child" => $this->input->post("s_child"),
            "s_immigration" => $this->input->post("s_immigration"),
        );

        if (count($this->input->post("s_marriage_status")) > 0)
        {
            if (in_array("single", $this->input->post("s_marriage_status")))
            {
                $input["s_marriage_single"] = 1;
            }
            else
            {
                $input["s_marriage_single"] = 0;
            }
            if (in_array("deceased_spouse", $this->input->post("s_marriage_status")) != FALSE)
            {
                $input["s_marriage_deceased_spouse"] = 1;
            }
            else
            {
                $input["s_marriage_deceased_spouse"] = 0;
            }
            if (in_array("divorced", $this->input->post("s_marriage_status")) != FALSE)
            {
                $input["s_marriage_divorced"] = 1;
            }
            else
            {
                $input["s_marriage_divorced"] = 0;
            }
        }
        else
        {
            $input["s_marriage_single"]          = 0;
            $input["s_marriage_deceased_spouse"] = 0;
            $input["s_marriage_divorced"]        = 0;
        }


        if (count($this->input->post("s_location")) > 0)
        {

            if (in_array("fellow_citizen", $this->input->post("s_location")))
            {
                $input["s_location_fellow_citizen"] = 1;
            }
            else
            {
                $input["s_location_fellow_citizen"] = 0;
            }
            if (in_array("fellow_province", $this->input->post("s_location")))
            {
                $input["s_location_fellow_province"] = 1;
            }
            else
            {
                $input["s_location_fellow_province"] = 0;
            }


            if (in_array("abroad", $this->input->post("s_location")))
            {
                $input["s_location_abroad"] = 1;
            }
            else
            {
                $input["s_location_abroad"] = 0;
            }


            if (in_array("homeland", $this->input->post("s_location")))
            {
                $input["s_location_homeland"] = 1;
            }
            else
            {
                $input["s_location_homeland"] = 0;
            }
        }
        else
        {
            $input["s_location_fellow_citizen"]  = 0;
            $input["s_location_fellow_province"] = 0;
            $input["s_location_abroad"]          = 0;
            $input["s_location_homeland"]        = 0;
        }

        if (count($this->input->post("s_skin")) > 0)
        {

            if (in_array("white", $this->input->post("s_skin")))
            {
                $input["s_skin_white"] = 1;
            }
            else
            {
                $input["s_skin_white"] = 0;
            }
            if (in_array("bright_brunette", $this->input->post("s_skin")))
            {
                $input["s_skin_bright_brunette"] = 1;
            }
            else
            {
                $input["s_skin_bright_brunette"] = 0;
            }
            if (in_array("dark_brunette", $this->input->post("s_skin")))
            {
                $input["s_skin_dark_brunette"] = 1;
            }
            else
            {
                $input["s_skin_dark_brunette"] = 0;
            }
            if (in_array("black", $this->input->post("s_skin")))
            {
                $input["s_skin_black"] = 1;
            }
            else
            {
                $input["s_skin_black"] = 0;
            }
        }
        else
        {
            $input["s_skin_white"]           = 0;
            $input["s_skin_bright_brunette"] = 0;
            $input["s_skin_dark_brunette"]   = 0;
            $input["s_skin_black"]           = 0;
        }

        $this->New_person_info->step4($input);
        redirect("homeC");
    }

}
