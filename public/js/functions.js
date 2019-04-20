
function educationStatus(value)
{
    switch (value) {
        case "-1":
            return "مهم نیست";
            break;
        case "under_diploma":
            return "زیر دیپلم";
            break;
        case "diploma":
            return "دیپلم";
            break;
        case "above_diploma":
            return "فوق دیپلم";
            break;
        case "licensee":
            return "لیسانس";
            break;
        case "above_licensee":
            return "فوق لیسانس";
            break;
        case "public_dr":
            return "دکترای عمومی";
            break;
        case "private_dr":
            return "دکترای تخصصی";
            break;
        case "above_dr":
            return "فوق تخصص";
            break;
        case "hozavi":
            return "حوزوی";
            break;
        default :
            return 'نامشخص';
            break;
    }
}

function skinColorStatus(value)
{
 
    switch (value) {
        case "-1":
            return "مهم نیست";
            break;
        case "white":
            return "سفید";
            break;
        case "bright_brunetee":
            return "سبزه روشن";
            break;
        case "dark_brunetee":
            return "سبزه تیره";
            break;
        case "balk":
            return "سیاه";
            break;
        default :
            return 'نامشخص';
            break;
    }
}

function religionStatus(value)
{
    switch (value) {
        case "-1":
            return "مهم نیست";
            break;
        case "shia":
            return "اسلام-شيعه";
            break;
        case "suni":
            return "اسلام-سني";
            break;
        case "christian":
            return "مسيحي";
            break;
        case "jewish":
            return "يهودي";
            break;
        case "etc":
            return "ساير";
            break;
        default :
            return 'نامشخص';
            break;
    }
}

function beliefStatus(value)
{
    switch (value) {
        case "-1":
            return "مهم نیست";
            break;
        case "religious_high":
            return "مذهبي مقيد";
            break;
        case "religious_usual":
            return "مذهبي معمولي";
            break;
        case "religious_no":
            return "غير مذهبي";
            break;
        default :
            return 'نامشخص';
            break;
    }
}

function incomeStatus(value)
{
    switch (value) {
        case "-1":
            return "مهم نیست";
            break;
        case "0":
            return "بدون درآمد";
            break;
        case "-2M":
            return "زیر 2 میلیون تومان";
            break;
        case "2M-5M":
            return "بين 2 تا 5 میلیون تومان";
            break;
        case "5M-10M":
            return "بين 5 تا 10 میلیون تومان";
            break;
        case "+10M":
            return "بیش از 10 میلیون تومان";
            break;
        default :
            return 'نامشخص';
            break;
    }
}

function houseStatus(value)
{

    switch (value) {
        case "-1":
            return "مهم نیست";
            break;
        case "0":
            return "بدون مسکن شخصي";
            break;
        case "1":
            return "داراي مسکن شخصي";
            break;
        default :
            return 'نامشخص';
            break;
    }
}

function carStatus(value)

{

    switch (value) {
        case "-1":
            return "مهم نیست";
            break;
        case "0":
            return "بدون اتومبیل";
            break;
        case "-30M":
            return "کمتر از 30 میلیون تومان";
            break;
        case "30M-60M":
            return "بين 30 تا 60 میلیون تومان";
            break;
        case "60M-100M":
            return "بين 60 تا 100 میلیون تومان";
            break;
        case "100M-200M":
            return "بين 100 تا 200 میلیون تومان";
            break;
        case "200M-400M":
            return "بين 200 تا 400 میلیون تومان";
            break;
        case "+400M":
            return "بيش از 400 ميليون تومان";
            break;
        default :
            return 'نامشخص';
            break;
    }
}

function healthConditionStatus(value)
{

    switch (value) {
        case "-1":
            return "مهم نیست";
            break;
        case "healthful":
            return "سالم";
            break;
        case "special_disease":
            return "دارای بیماری خاص (دیابت ، هپاتیت و ...)";
            break;
        case "defective":
            return "دارای نقص عضو";
            break;
        default :
            return 'نامشخص';
            break;
    }
}

function jobStatus(value)
{
    switch (value) {
        case "-1":
            return "مهم نیست";
            break;
        case "unemployed":
            return "بیکار";
            break;
        case "employed":
            return "شاغل";
            break;
        case "student":
            return "دانشجو";
            break;
        default :
            return 'نامشخص';
            break;
    }
}

function marriageStatus(value)
{

    switch (value) {
        case "-1":
            return "مهم نیست";
            break;
        case "single":
            return "مجرد";
            break;
        case "deceased_spouse":
            return "همسر فوت شده";
            break;
        case "divorced":
            return "طلاق گرفته";
            break;
        default :
            return 'نامشخص';
            break;
    }
}

function nationalityStatus(value)
{
    switch (value) {
        case "-1":
            return "مهم نیست";
            break;
        case "fars":
            return "فارس";
            break;
        case "tork":
            return "ترک";
            break;
        case "kurd":
            return "کرد";
            break;
        case "lor":
            return "لر";
            break;
        case "baloch":
            return "بلوچ";
            break;
        case "mazani":
            return "مازندرانی";
            break;
        case "gilak":
            return "گیلک";
            break;
        case "arab":
            return "عرب";
            break;
        case "etc":
            return "سایر";
            break;
        default :
            return 'نامشخص';
            break;
    }
}

function lifeStyleStatus(value)
{
    switch (value) {
        case "-1":
            return "مهم نیست";
            break;
        case "dependent":
            return "همراه خانواده";
            break;
        case "independent":
            return "مستقل (مجردی)";
            break;
        default :
            return 'نامشخص';
            break;
    }
}

function sexStatus(value)
{

    switch (value) {
        case "f":
            return "زن";
            break;
        case "m":
            return "مرد";
            break;
        default :
            return 'نامشخص';
            break;
    }
}





