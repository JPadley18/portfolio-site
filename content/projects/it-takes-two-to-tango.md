---
title: It Takes Two to Tango
description: 1 vs. 1 online puzzle game based on the popular LinkedIn puzzle game, Tango. It's a real-time race to see who can solve the puzzle first!
image: images/thumbs/it4-thumb.png
date: '2025-05-24'
award: bronze
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
---

It Takes Two to Tango was our project for Royal Hackaway V8, the eighth annual 24-hour hackathon event hosted by the Royal Holloway Computing Society. The game
is a real-time multiplayer browser game where two players face off to try to solve a Tango puzzle the fastest. The game features a display in which you can see the progress of your
opponent compared to your own, which is updated in real time as you play. The first player to solve the puzzle is the winner.

The browser game was written using React, and makes use of Web Sockets to communicate with the Go back-end, which enables real-time communication to take place between players and the
game server. The game also features a lobby system, where players can create, view, and join public game lobbies to play against their friends.

As the team member most experienced in Go, the majority of my work on this project was on the back-end service, in which I wrote the underlying communication logic that allowed the players
to stay in sync with each other, as well as the logic governing the mechanics of the game, and the API that allowed the creation, viewing and joining of lobbies.

We were extremely honoured to take home 3rd place overall at Royal Hackaway V8 with this project!