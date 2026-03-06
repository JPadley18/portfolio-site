---
title: Tuner
description: A real-time online quiz game that turns your most listened to Spotify tracks into a music quiz for you and your friends!
image: images/thumbs/tuner-thumb.png
date: '2024-02-18'
skills:
  - name: Go
    icon: i-simple-icons-go
    color: '#00ADD8'
  - name: React
    icon: i-simple-icons-react
    color: '#61DAFB'
  - name: TypeScript
    icon: i-simple-icons-typescript
    color: '#3178C6'
  - name: Docker
    icon: i-simple-icons-docker
    color: '#2496ED'
carousel:
  - 'images/projects/tuner/tuner-1.png'
  - 'images/projects/tuner/tuner-2.png'
  - 'images/projects/tuner/tuner-3.png'
  - 'images/projects/tuner/tuner-4.png'
---

Tuner was our entry for HackSussex 2024's 24-hour Hackathon event. It is a real-time quiz game (think Kahoot) in which you and your friends log in using your Spotify account,
allowing Tuner to shuffle together your most listened to tunes and turn them into a musical guessing game. There are multiple rounds in which a song will play, and four options will be presented
that players use to try and identify the song. The player with the most correct guesses at the end wins!

During this project, I began working primarily on the back-end API service that I wrote in Go, which needed to integrate with the Spotify API in order to allow players to log in using their Spotify
accounts. I then worked on a system that would allow the server to look at the most played tracks of each player in the game and shuffle them together into a randomised quiz for the players to play.
I also worked on the Web Socket system that allowed players to play in real-time against each other and stay in sync with each other. Later in the hackathon, I moved on to working on the React front
end as we were struggling to get it up to speed with the rest of the project. In the end, we came out with a very well-rounded project that we were all very proud of.