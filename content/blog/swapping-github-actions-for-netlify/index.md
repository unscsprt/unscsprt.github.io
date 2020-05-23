---
title: Swapping GitHub for Netlify
date: "2020-05-23T19:00:00.000Z"
---

I wrote previously about [building this site with GitHub Actions](/building-this-site-with-github-actions) and hosting it on GitHub Pages. While that was a fun learning experience, the issues configuring GitHub pages to work with a custom domain and having to manually edit the workflow if my project structure changed caused me to consider alternatives. I'd never used [Netlify](https://www.netlify.com/) before, but have heard good things about it, and its free tier offered a drop-in replacement for my existing setup with GitHub Actions and Pages, only with less configuration.

With little setup, Netlify provided automatic `www.` to root domain redirects and free, auto-renewing SSH keys via [Let's Encrypt](https://letsencrypt.org/). I replaced my custom workflow configuration that I'd used to build the site with GitHub Actions and move files around in favor of simply giving Netlify a build command and publish directory. For a personal project like this, I like to prioritize ease of maintenance, and limiting the amount of customization and moving parts needed to keep the lights on helps a great deal. 

Bonus: Netlify also includes basic server-side traffic statistics, so I can know how many readers end up here while respecting privacy-conscious users.
