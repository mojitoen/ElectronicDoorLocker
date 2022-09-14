package com.example.keypadfornode

import android.content.ContentValues.TAG
import android.util.Log
import io.socket.client.IO
import io.socket.client.Socket
import java.net.URISyntaxException
object SocketHandler {
    lateinit var mSocket: Socket

    @Synchronized
    fun setSocket() {
        try {
            mSocket = IO.socket("http://10.0.0.178:3000")
            Log.i(TAG, "Connected to opplegg")
        } catch (e:URISyntaxException) {
            Log.i(TAG, "Failed to connect to socket")
        }
    }

    @Synchronized
    fun getSocket(): Socket {
        return mSocket
    }
}
