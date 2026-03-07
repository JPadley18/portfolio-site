---
title: Portfolio Site
description: A ground-up rewrite of my portfolio website using Vue and Nuxt. The very site you are now on!
image: images/thumbs/portfolio-thumb.jpg
date: '2026-02-25'
skills:
  - name: Nuxt
    icon: i-simple-icons-nuxt
    color: '#00DC82'
  - name: Vue
    icon: i-simple-icons-vuedotjs
    color: '#4FC08D'
  - name: TypeScript
    icon: i-simple-icons-typescript
    color: '#3178C6'
carousel:
  - 'images/projects/portfolio/portfolio-1.jpg'
  - 'images/projects/portfolio/portfolio-2.jpg'
  - 'images/projects/portfolio/portfolio-3.jpg'
links:
  - name: GitHub Repo
    icon: i-simple-icons-github
    to: https://github.com/jacob-padley/portfolio-site
---

Back in 2023, I wrote my original portfolio site in NextJS. This site was the most advanced one I had personally written to date, and it served its purpose well for nearly three years. However,
as time moved on I developed my front-end skills and expertise, and after these three years it was too tempting to attack this old code base of mine and bring it up to speed with my current ability.
After my placement at IBM, I was keen to put my newly learned Vue skills to the test to refresh my now slightly dated looking portfolio site and give it a new lease of life.

After some research into frameworks I could use to put such a site together in Vue, I settled on Nuxt as a solid and powerful foundation to build the site on. Nuxt had the added benefit of being
built on TailwindCSS, something that I also made use of on my old site. Some benefits of Nuxt that I have leveraged on this site are:
- Nuxt Content - allowing me to write about my projects and experience in Markdown, which is then dynamically loaded and displayed on the site. This makes the code base much cleaner by properly
  separating code and content.
- Nuxt Routing - automatically generates a routing structure from the file system layout, which makes the code structure far more clear and closer to how the real site appears.
- Nuxt Image - provides lazy-loading and optimisation for image assets on the site, as well as automatically showing placeholder content whilst images load.

All in all, the rewrite of my portfolio site has made the site far more maintainable, and has improved the user experience both on desktop and mobile platforms. Most importantly, it was a fun
opportunity to both make use of Vue, and learn a new framework at the same time.
