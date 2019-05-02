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
            return \Redirect::to('/');
                
        }
        else
        {

        }


//        if(!Auth::check() || Auth::user()->is_admin != '1'){
//            return redirect()->route('/');
//        }

        return $next($request);
    }

}
