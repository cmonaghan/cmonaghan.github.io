---
layout: slides
title: "Fixing Broken Things"
date: "2014"
venue: "Hack Reactor, San Francisco"
description: "This is a short lightning talk I gave at Hack Reactor, a coding bootcamp in San Francisco. If you're not familiar with the Ignite format, each speaker gets 5 min and 20 slides (15 seconds per slide). I lost the speaker notes, so I only have the slides for this talk."
---

{% for i in (1..20) %}
{% include slide.html 
  id=i
  image="/slides/2014-ignite/2014-ignite-page{{ i }}.png" 
%}
{% endfor %} 