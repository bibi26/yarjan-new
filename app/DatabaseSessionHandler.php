<?php

namespace App\Session;

class DatabaseSessionHandler extends \Illuminate\Session\DatabaseSessionHandler
{
    /**
     * {@inheritDoc}
     */
    public function write($sessionId, $data)
    {
        $user_id =empty(user()['user_id'])?null:user()['user_id'];

        if ($this->exists) {
            $this->getQuery()->where('id', $sessionId)->update([
                'payload' => base64_encode($data),
                'user_id' => $user_id,
                'ip_address' => $this->ipAddress(),
                'user_agent' => $this->userAgent(),
                'last_activity' => time(),
            ]);
        } else {
            $this->getQuery()->insert([
                'id' => $sessionId,
                'user_id' => $user_id,
                'ip_address' => $this->ipAddress(),
                'user_agent' => $this->userAgent(),
                'payload' => base64_encode($data),
                'last_activity' => time(),
            ]);
        }

        $this->exists = true;
    }
}
