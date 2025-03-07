---
layout: slides
title: "Migrating HealthCare.gov to Terraform: Lessons Learned"
date: "October 2018"
venue: "O'Reilly Velocity Conference, New York"
description: "I gave this talk after our team completed a major migration to Terraform for three critical production systems at HealthCare.gov. All these systems were hosted on AWS. We had previously used Cloudformation since 2014. This talk considers the relative tradeoffs of each tool, and what we learned in the process of our migration. I lost the speaker notes, so I only have the slides for this talk."
---

{% for i in (1..56) %}
{% include slide.html 
  id=i
  image="/slides/velocity-2018/velocity-2018-page{{ i }}.png" 
%}
{% endfor %} 
