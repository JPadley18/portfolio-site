---
title: Turtle Printer
description: A software I created to for new students joining the Royal Holloway Computing Society. It allows new programmers to write Python code that draws images using the Turtle library and print their creations on a thermal receipt printer.
image: images/thumbs/turtle-thumb.jpg
date: '2023-09-18'
skills:
  - name: Python
    icon: i-simple-icons-python
    color: '#3776AB'
  - name: Raspberry Pi
    icon: i-simple-icons-raspberrypi
    color: '#A22846'
---

Turtle Printer is a software written in Python using Tkinter as an extension to the popular Python Turtle library, which provides an easy, beginner 
friendly way to create images using simple programming concepts in Python. I came up with this idea while on the Computing Society committee at Royal Holloway as 
a fun way to get freshers into coding. The software saw a large amount of use during our introductory events at the beginning of the school year, and produced lots 
interesting images.

The software provides the user with an area in which they can input Python code to send commands to the Turtle which is drawn on the right-hand side of the screen. 
The code can then be executed to produce an image. The hardest part of this project was 'sandboxing' the code area to prevent malicious code from being run that 
could damage the software or the host computer. In the end, I achieved this by creating a carefully controlled list of functions that the user is allowe to use in 
the sandbox.

Once the user has created their image, they can submit it. It is then sent over Wi-Fi to a Raspberry Pi that in turn sends the image to a thermal receipt printer, 
which allowed the freshers to take home their drawings.