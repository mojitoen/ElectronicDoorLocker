# Electronic Door Lock
# Documenting the journey
# 14.09.2022
In an attempt to better my understanding of electronics and it's connection to code, i'm attempting to build a cheap, affordable electronic door lock which will connect 
to a keypad(digital, kotlin based app). 

The idea is to have an app connect to a node.js server(express) using socket.io and if input is correct, send a signal along to an arduino chip which will unlock/lock an electronic lock.
![image](https://user-images.githubusercontent.com/66651087/190036183-85d3315a-5181-42af-af2b-79cad66225db.png)
This is the basis XML for the app in question. No functionality as of yet. 

As the day went on, i purchased a few parts. Ordered an arduino uno "version" from KjellCompany. Have to wait and see if the half price version can do the things the licensed arduino can.
![image](https://user-images.githubusercontent.com/66651087/190222540-48e0586d-800b-497d-815e-59efa33ef701.png)
![image](https://user-images.githubusercontent.com/66651087/190222605-e17395e6-f710-4d74-b571-22a8d810a70a.png)
And I've already got a raspberry Pi laying around.
![Untitled](https://user-images.githubusercontent.com/66651087/190223859-1e33d12f-f81d-46a4-a9c7-9c8bdfcf99e1.png)


Added some functionality to the keypad app. It takes input up to four digits, and after that, adding another digit will reset it.
Pressing the star button when you have 4 digits will allow you to send the code.
![306929555_795061181623737_3419575287991729586_n](https://user-images.githubusercontent.com/66651087/190222992-6e610db1-b909-4b5c-ba88-7cc9bb0111c1.jpg)

![306308611_770384877351010_7641461173645428123_n](https://user-images.githubusercontent.com/66651087/190223600-2c311db6-66b2-4b69-8856-3a818d9c3b68.jpg)
![image](https://user-images.githubusercontent.com/66651087/190223653-4ef60c6c-d19a-4a74-8647-cd9ed0fc1f5c.png)

# 15.09.2022
After adding a few functions to the authentication server it turned out the arduino chip might not be necessary after all. 
![image](https://user-images.githubusercontent.com/66651087/190281506-ff7cbd82-adbf-41ba-8a49-1ccc4fe33923.png)
Using the node package onoff, it's possible to change the GPIO board to whatever is required.
After setting up the raspberry pi, installing NPM and importing the project however, there was a short during measuring which meant that the raspberry pi was bricked.
![Untitled](https://user-images.githubusercontent.com/66651087/190281773-57e112dc-b5c4-4f21-a572-428b6eee3f02.png)
Using the multimeter before short however allowed us to confirm that the code did indeed work for going HIGH.
A new one has been ordered, and i assume we'll see it in a few days. 
Next wrinkle will be to stop codes from being sent in cleartext. 
