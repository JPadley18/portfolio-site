---
title: TouCan
description: Android app using OpenCV to identify a drinks can using the phone camera and send directions to a Lego Mindstorms robot to navigate to the can.
image: images/thumbs/toucan-thumb.jpg
date: '2023-03-21'
skills:
  - name: Java
    icon: i-lucide-coffee
    color: '#df0638'
  - name: Android
    icon: i-simple-icons-android
    color: '#3DDC84'
carousel:
  - 'images/projects/toucan/toucan-1.jpg'
links:
  - name: GitHub Repo
    icon: i-simple-icons-github
    to: https://github.com/jacob-padley/TouCan
---

I created the TouCan app as part of a group coursework project in which we were tasked with programming a Lego Mindstorms robot using Java. 
The robot's objective was to use a phone camera to locate a can of RedBull (wrapped in pink paper for visibility) and send information about its location to 
the robot, which could then navigate to it and grab it using a claw on the front of the robot.

The app uses OpenCV to filter out colours other than the shade of pink it is calibrated for using the calibration mode of the app. It then takes the largest 
of the visible blobs of colour and sends the screen coordinates of its center to the robot over a Wi-Fi connection. The robot will then move left or right in 
order to keep the center of the can in the center of the camera, while moving forwards towards the can. Eventually, the robot detects the can touching the claw 
and closes, capturing the can.
