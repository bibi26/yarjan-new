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
                        "mData": 'id',
                        "mRender": function (data, type, full, meta) {
                            return meta.row + meta.settings._iDisplayStart + 1;
                        }
                    },
                    { data: 'id', name: 'id' },
                    { data: 'title', name: 'title' },
                    { data: 'category', name: 'category' },
                    { data: 'created_at', name: 'created_at' },
                    { data: 'status', name: 'status' },
                ],
                initComplete: function () {
                    this.api().columns().every(function () {
                        var column = this;
                        var input = document.createElement("input");
                        input.style.width='80%';

                        $(input).appendTo($(column.footer()).empty())
                            .on('change', function () {
                                column.search($(this).val()).draw();
                            });
                    });
                }
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
                                <th>شناسه تیکت</th>
                                <th>عنوان</th>
                                <th>بخش</th>
                                <th>تاریخ ایجاد</th>
                                <th>تاریخ اخرین پیام</th>
                                <th>وضعیت</th>
                            </tr>
                            </thead>
                            <tfoot>
                            <tr>
                                <th>#</th>
                                <th>شناسه کاربر</th>
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
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

@stop

