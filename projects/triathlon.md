---
layout:    project
title:     "Triathlon Analysis"
link:      "https://triathlon.woolgathering.io/"
date:      "November 2025"
goal:      "Understand how I did relative to others in a recent triathlon."
languages: "HTML & CSS"
infra:     "Vercel serverless"
apis:      "N/A"
repo_name: "triathlon"
---

I recently participated in my first triathlon. (Yay me!) Afterwards, the race organizers provided the race results in a 32-page PDF that listed each athlete, their finish time for each leg of the event, and the finishing position for each athlete relative to others in their same gender and age group. However, there were only 19 participants for my age and gender. I was curious how I did relative to a larger sample size including a wider range of age and gender.

I was able to complete this project in about 4 hours. The hardest part was parsing the dataset from a 32-page PDF with inconsistent formatting.

I was able to make this dataset machine-readable by feeding it to Claude and asking it to use OCR to extract each participant's race times and append it to a CSV. This took a bit of manual effort and iteration, but eventually we got there.


![See how the page looks before any athlete is selected](../assets/2025-11-27-triathlon-no-athlete.png)
*This is how the page looks before any athlete is selected*

![See how the athlete name auto-complete feature works](../assets/2025-11-27-triathlon-autocomplete.png)
*This is how the athlete name auto-complete feature works*

![See percentile distributions for a given athlete](../assets/2025-11-27-triathlon-percentiles.png)
*See percentile distributions for a given athlete*
