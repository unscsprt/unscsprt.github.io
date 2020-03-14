---
title: Effect of Background JS Processes on UX Performance with React
date: "2019-03-10T18:00:23.275Z"
---

My team recently encountered a problem with a React slider component.
We spent a while investigating the root cause, but couldn't identify
a single source of the problem. However, I noticed that enabling an
ad blocker to prevent 3rd party scripts from loading seemed to help.
These scripts (everything from ads to tracking to fraud prevention)
added numerous event listeners that would invoke functions on the same
interactions that our component in question, in this case a range
slider, needed to function. This caused the slider to become
monetarily unresponsive and drastically decreased frame rates. This
prevented React from making the necessary DOM updates to reflect user
interactions, making it ultimately unusable from a UX
perspective.

To see if I could recreate this effect, I wrote a simple application to
simulate blocking work on the main thread that would delay React's
rendering, causing a framerate drop and the UI to become unresponsive.

Check out the [live demo](https://craigpalermo.github.io/slider-perf-demo)
and try adjusting the parameters. The effects are especially noticeable
on mobile devices, which we cannot forget to account for in 2019.
