<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTriggerGatewayShares extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $prefix = config('database.connections.oracle.prefix');
        \Illuminate\Support\Facades\DB::unprepared("create or replace trigger update_gateway_shares
after update on ".$prefix."gateway_shares
     for each row
        begin
         insert into ".$prefix."gateway_share_versions (id,business_id,type,amount,gateway_serial,version,created_at,updated_at)  
         values (:old.id,:old.business_id,:old.type,:old.amount,:old.gateway_serial,:old.version,:old.created_at,:old.updated_at) ;
    end;");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        \Illuminate\Support\Facades\DB::unprepared("DROP trigger update_gateway_shares");
    }
}
