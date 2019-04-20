<?php

namespace App\Http\Middleware;

use Closure;

class IsAdminMiddleware
{

    /**

     * Handle an incoming request.

     *

     * @param  \Illuminate\Http\Request  $request

     * @param  \Closure  $next

     * @return mixed

     */
    public function handle($request, Closure $next)
    {
//           if (!session()->has('LOGEDUSER'))
//        {
//            $data = array(
//                'success' => FALSE,
//                'message' => 'بدلیل عدم استفاده طولانی مدت از سیستم ، لطفا مجددا خارج و سپس وارد شوید. ' . "<a onload='alert(55);' href='login'><b style='color:red;'>[خروج]<b/><a/>",
//            );
//            echo json_encode($data);
//            return;
//        }
      
        if (\Cookie::get('LOGEDIN')==false)
        {
//            return \Redirect::to('/');
//                $user = unserialize(Cookie::get('LOGEDIN'));
//                session()->put('LOGEDUSER', serialize(array(
//                    'user_type' => $user['user_type'],
//                    'office' => $user["office"],
//                    'userkey' => $user["userkey"],
//                    'user_id' => $user["user_id"],
//                    'first_name' => $user["first_name"],
//                    'last_name' => $user["last_name"],
//                    'province_id' => $user["province_id"],
//                    'city_id' => $user["city_id"],
//                    'username' => $user["username"],
//                    'ver_code' => $user["ver_code"],
//                    'role' => $user["role"],
//                )));
                
        }
        else
        {

//            \DB::table('sessions')->insert(
//                ['payload' => 'john@example.com', 'last_activity' => 12]
//            );
//            session()->put('LOGEDUSER', serialize(array(
//                'user_type' => NULL,
//                'office' => NULL,
//                'userkey' => NULL,
//                'user_id' => NULL,
//                'first_name' => NULL,
//                'last_name' => NULL,
//                'province_id' => NULL,
//                'city_id' => NULL,
//                'username' => NULL,
//                'ver_code' => NULL,
//                'role' => NULL
//            )));
        }


//        if(!Auth::check() || Auth::user()->is_admin != '1'){
//            return redirect()->route('/');
//        }

        return $next($request);
    }

}
