---
title: DataIker Facial Recognition
description: My machine learning project created during my work experience at Data Iku. Software for the Raspberry Pi that uses machine learning and OpenCV to identify and greet office members by name using facial recognition.
image: images/thumbs/dataiker-thumb.jpg
date: '2019-07-26'
skills:
  - name: Python
    icon: i-simple-icons-python
    color: '#3776AB'
  - name: Raspberry Pi
    icon: i-simple-icons-raspberrypi
    color: '#A22846'
carousel:
  - 'images/projects/dataiku/dataiku-1.jpg'
links:
  - name: GitHub Repo
    icon: i-simple-icons-github
    to: https://github.com/jacob-padley/dataiker-recognition
---

I created this project during my work experience at data science company DataIku. It consists of a Raspberry Pi that uses OpenCV and an onboard 
camera to identify human faces that it can see. In its 'learning' mode, it will store each captured image of a face on an Amazon S3 bucket. These images can then 
be labelled using a webapp that I created. I created a machine learning model on the company's bespoke software, DSS, which can use these labelled images to learn 
to distinguish the different employees of DataIku (or 'DataIkers') by name using only their face.

If the device is not in 'learning' mode, it will instead use an API endpoint on DSS 
to attempt to identify any office member that walks past the camera, and greet them by name on the LCD screen attached to the Pi.
