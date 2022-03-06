<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    use HasFactory;

    protected $fillable = ['receiver_id', 'message', 'read'];

    public function receiver()
    {
        return $this->belongsTo(User::class, 'receiver_id');
    }

    public function sender()
    {
        return $this->belongsTo(User::class, 'sender_id');
    }

    public function conversationsWithUser(int $id)
    {
        return  $this->where(function ($query) use ($id) {
            $query->where('sender_id', auth()->user()->id);
            $query->where('receiver_id', $id);
        })

            ->orWhere(function ($query) use ($id) {
                $query->where('sender_id', $id);
                $query->where('receiver_id',  auth()->user()->id);
            })
            ->with(['sender', 'receiver'])
            ->get();
    }

    public function markMessgesAsRead(int $sender_id)
    {
        $this->where('sender_id', $sender_id)
            ->where('read', false)
            ->where('receiver_id', auth()->user()->id)
            ->update(['read' => true]);
    }
}
