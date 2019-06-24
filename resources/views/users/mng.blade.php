@extends('home')
@section('content')
@section('title', __('titles.mngUsers'))
<script>
        $(function () {

            $('#users-table').DataTable({
                processing: true,
                serverSide: true,
                ajax: {
                    'type': 'POST',
                    'url': '{{route("usersMng")}}',
                    'data': {
                    }
                },
                columns: [
                    {
                        "orderable": true,
                        "mData": null,
                        "mRender": function (data, type, full, meta) {
                            return meta.row + meta.settings._iDisplayStart + 1;
                        }
                    },
                    { data: 'id', name: 'id' },
                    { data: 'email', name: 'email' },
                    { data: 'mobile', name: 'mobile' },
                    { data: 'full_name', name: 'full_name' },
                    { data: 'created_at', name: 'created_at' },
                    { data: 'location', name: 'location' },
                    {
                        "orderable": false,
                        "data": null,
                        "mRender": function (data, type, full) {
                            console.log(full.confirm);
                            if (full.confirm == "accept")
                            {
                                return "<b style='color:red;'>تایید</b>";

                            }
                            else if (full.confirm == "reject")
                            {
                                return "<b style='color:green;'>رد</b>";

                            }
                            else if (full.confirm == "unknown")
                            {
                                return "<b>در حال بررسی</b>";
                            }
                            else
                            {
                                return "<span>تعریف نشده</span>";

                            }
                        }
                    },
                    { data: 'step', name: 'step' },
                    {
                        "orderable": false,
                        "data": null,
                        "mRender": function (data, type, full) {
                            if (full.active == "0")
                            {
                                return "<b style='color:red;'>غیرفعال</b>";

                            }
                            else if (full.active == "1")
                            {
                                return "<b style='color:green;'>فعال</b>";

                            }
                            else
                            {
                                return "<span>تعریف نشده</span>";

                            }
                        }
                    },
                    { data: 'status', name: 'status' },
                    { data: 'action', name: 'action' },

                    // {
                    //     "orderable": false,
                    //     "mData": null,
                    //     "mRender": function (data, type, full) {
                    //         return "<a class='btn btn-danger btn-md' href='javascript:void(0)' onclick='showDelModal(&quot;" + full.id + "&quot;)' >حذف</a>";
                    //     }
                    // }
                ]
            });


        });
    </script>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">کارتابل کاربران ثبت شده</h4>
                    <div class="table-responsive m-t-40">
                        <table id='users-table' class="display nowrap table table-hover table-striped table-bordered"
                               cellspacing="0" width="100%">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>شناسه کاربر</th>
                                <th>ایمیل</th>
                                <th>شماره همراه</th>
                                <th>نام و نام خانوادگی</th>
                                <th>ورود به سیستم </th>
                                <th>محل زندگی</th>
                                <th>تایید مدیر</th>
                                <th>سطح</th>
                                <th>فعال</th>
                                <th>وضعیت</th>
                                <th>عملیات </th>
                            </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

@stop

