---
title: Hack & Seek
description: City-scale multiplayer hide & seek game designed to get the people of 2036 out of the house more often!
image: images/thumbs/hack-and-seek-thumb.jpg
date: '2026-02-22'
award: silver
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
  - 'images/projects/hack-and-seek/hack-and-seek-1.jpg'
  - 'images/projects/hack-and-seek/hack-and-seek-2.jpg'
---

Hack & Seek was our team's entry for HackLondon 2026. We chose to compete for the Societies' Track, titled "Build for 2036", in which the goal was to solve a problem that will exist ten years from
now. We figured that as technology advances, people leave the house less and less, which is of course detrimental to our health. Inspired by Jet Lag: The Game, and our love for making interactive
games at hackathons, we set about building Hack & Seek, a city-scale hide and seek game in which two players play in real time using live GPS data.

I personally primarily worked on the Go back-end service, which made use of Gin to provide an HTTPS API for the client web app to interface with, as well as websocket endpoints to allow real-time
multiplayer gameplay. The primary challenge of this project for me was to keep these websocket connections alive during periods of unstable network connection, which was a frequent problem as the Hiders
moved to their hiding positions, or as the Seeker tracks them down. This was especially a problem as soon as either client used the London Underground, which would guarantee their connection was
completely severed temporarily.

Aside from technical challenges, we decided to set ourselves a lofty goal for HackLondon. Insipired by past hackathon projects we had seen and judged ourselves, we made it our mission to finish hacking
with enough time to go out and film a demo video of our project in action, seeing as we were already in London for the hackathon. This meant we needed to be completely finished coding with around 2-3
hours to spare in order to have time to play a demo game, film it, and cut the footage together all in time for submission. This meant that pretty much the whole hackathon became "crunch time", and
it was some of the hardest, most condensed work I have ever done in one go. However, we were successful in our mission, and filming the demo video was without a doubt some of the most fun I've ever
had at a hackathon. You can see the demo video for yourself on the Devpost page for the project.

At the end of the event, our demo video and project idea impressed the judges enough that we won Second Place in our track. This was an incredible result, and I am extremely proud of what the team and I
accomplished in such a short time.
