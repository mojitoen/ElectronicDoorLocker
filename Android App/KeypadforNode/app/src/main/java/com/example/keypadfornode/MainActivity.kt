package com.example.keypadfornode

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.TextView

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        //SocketHandler
        SocketHandler.setSocket()
        var mSocket = SocketHandler.getSocket()
        mSocket.connect()


        //Findview num-window
        var _numpadDisplay = findViewById<TextView>(R.id.editTextNumberPassword)

        //Findview Buttons
        var _button1 = findViewById<Button>(R.id.button1)
        var _button2 = findViewById<Button>(R.id.button2)
        var _button3 = findViewById<Button>(R.id.button3)
        var _button4 = findViewById<Button>(R.id.button4)
        var _button5 = findViewById<Button>(R.id.button5)
        var _button6 = findViewById<Button>(R.id.button6)
        var _button7 = findViewById<Button>(R.id.button7)
        var _button8 = findViewById<Button>(R.id.button8)
        var _button9 = findViewById<Button>(R.id.button9)
        var _button0 = findViewById<Button>(R.id.button0)
        var _buttonstar = findViewById<Button>(R.id.buttonstar)
        var _buttonbiometric = findViewById<Button>(R.id.biometricbutton)
        //-------------------------------------------------

        fun pressedNumber(i: String) {
            //Checks if there are 4 digits or more. If there is, resets the display and empties the var.
            if(_numpadDisplay.length() >= 4) {
                _numpadDisplay.text = ""
            }

            else {
                _numpadDisplay.setText(_numpadDisplay.text)
                _numpadDisplay.append(i)
            }
        }
        //Button functions
        _button1.setOnClickListener {
            pressedNumber("1")
        }
        _button2.setOnClickListener {
            pressedNumber("2")
        }
        _button3.setOnClickListener {
            pressedNumber("3")
        }
        _button4.setOnClickListener {
            pressedNumber("4")
        }
        _button5.setOnClickListener {
            pressedNumber("5")
        }
        _button6.setOnClickListener {
            pressedNumber("6")
        }
        _button7.setOnClickListener {
            pressedNumber("7")
        }
        _button8.setOnClickListener {
            pressedNumber("8")
        }
        _button9.setOnClickListener {
            pressedNumber("9")
        }
        _button0.setOnClickListener {
            pressedNumber("0")
        }

        //-------------------------------------------------
        //The star button is used as the send button, in order to validate the users code.
        _buttonstar.setOnClickListener {
            //Checks whether or not there are 4 digits. If there are, it gets sent to the auth server. If not, nothing happens.
            if(_numpadDisplay.length() == 4) {
                mSocket.emit("code", _numpadDisplay.text)
                _numpadDisplay.setText("")
            }
            else{
                //nothing
            }

        }



    }

}


