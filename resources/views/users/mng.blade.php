@extends('home')
@section('content')
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
                    {data: 1, name: 'id'},
                    {data: 2, name: 'email'},
                    {data: 3, name: 'created_at'},
                    {data: 4, name: 'updated_at'}
                ]
            });
        });
    </script>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">کارتابل مدیران ثبت شده</h4>
                    <div class="table-responsive m-t-40">
                        <table id='users-table' class="display nowrap table table-hover table-striped table-bordered"
                               cellspacing="0" width="100%">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>نام کاربری</th>
                                <th>IP</th>
                                <th>مرورگر</th>
                            </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
@stop

