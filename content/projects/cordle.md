---
title: Cordle
description: Competitive Wordle bot for Discord. Complete with an elo system so that you can prove that you're better than your friends once and for all.
image: images/thumbs/cordle-thumb.png
date: '2023-02-5'
skills:
  - name: Go
    icon: i-simple-icons-go
    color: '#00ADD8'
  - name: JavaScript
    icon: i-simple-icons-javascript
    color: '#F7DF1E'
  - name: Docker
    icon: i-simple-icons-docker
    color: '#2496ED'
---

Cordle began as a project for Royal Hackaway V6, a 24-hour hackathon event run by the Royal Holloway Computing Society. It consists of a Discord Bot which, 
when present in a Discord server, allows users of the server to challenge each other to duels of the popular word puzzle game, 'Wordle'.

Both players play at the same time and work towards the same goal word. The first player to solve their puzzle is the winner, and will gain competitive points while their opponent will lose points. 
The bot also allows users to view their stats or the stats of another player, such as career wins, losses and draws. Users can also view a top-10 style leaderboard of all Cordle 
players.

Cordle was originally written in NodeJS using a Firebase database, and after Royal Hackaway I worked with another member of the original team to re-make Cordle using Go with 
a MySQL database, which greatly increased the performance of the bot. We containerised the project with Docker and hosted it, finally creating a stable release version of Cordle.