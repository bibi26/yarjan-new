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
                    'url': '{{route("contactus.mng")}}',
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
                    { data: 'mobile', name: 'mobile' },
                    { data: 'email', name: 'email' },
                    { data: 'message', name: 'message' },
                    { data: 'created_at', name: 'created_at' },
                ]
            });
        });
    </script>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">لیست پیام های تماس با ما</h4>
                    <div class="table-responsive m-t-40">
                        <table id='users-table' class="display nowrap table table-hover table-striped table-bordered"
                               cellspacing="0" width="100%">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>شماره همراه</th>
                                <th>ایمیل</th>
                                <th>شرح پیام</th>
                                <th>تاریخ ثبت</th>
                            </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

@stop

