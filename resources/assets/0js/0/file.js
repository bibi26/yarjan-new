function showDelModal(id) {
    $('#ModalDel').modal('show');
    $('#rowIdDel').val(id);
}

function delRow(id) {
    $('#ModalDel').block({
        message: '<h6><img src="' + BASE_URL + '/assets/images/loading.gif" />در حال بررسی اطلاعات...<h6/>',
        css: {backgroundColor: '#FFA500'}
    });
    $.ajax({
        url: BASE_URL + "file/MngFileC/delFile",
        data: {"id": id},
        type: 'post',
        success: function (data, textStatus) {
            var res = jQuery.parseJSON(data);
            if (res.status) {
                $('#ModalDel').hide();
                window.location = BASE_URL + 'file/MngFileC/index';
            }
            else
            {
                alert(res.msg);
                $('#ModalDel').unblock();
            }
        },
        error: function (xhr, textStatus, errorThrown) {
            $('#ModalDel').unblock();
            alert('request failed');
        }
    });
}

