---
title: "SeedChange"
description: "I recently finished working on a project to launch AngelPM, an angel investor platform. Our client needed a tool for customers to track their portfolio of startup investments, along with a central location for deal documents and a dashboard to see a snapshot view of where money was invested. I've included some screenshots to show how we went about the project."
layout: post
tags: test
category: languages
comments: yes
---

<img src="/post_resources/2014-seedchange-photos/landing-page-1.png" width="60%" align="right">I recently finished working on a project to launch AngelPM, an angel investor platform for SeedChange customers. [SeedChange](https://www.seedchange.com/) is an equity crowdfunding platform that connects startups with individual investors.

SeedChange needed a tool for customers to track their portfolio of startup investments, along with a central location for deal documents and a dashboard to see a snapshot view of where money was invested. In addition to the front-end, this project also required a custom-built admin portal to manage user and company information. There was no existing platform, so our team built the application from the ground up, choosing our stack.

I've included some screenshots to show how we created our simple UI design.

<img src="/post_resources/2014-seedchange-photos/charts-2.png">
The user dashboard.

I used the nvd3 chart library to create all the data visualizations. Using nvd3 compared to raw D3 allowed me to get the charts up and working right away. For your basic chart visualizations, I found nvd3 to be plenty powerful.

<img src="/post_resources/2014-seedchange-photos/companies.png">
Specific details on each investment.

I used Backbone.Marionnette for the framework. It was my first time using Marionnette, but I found that Marionnette takes care of a lot of the boilerplate code that regular Backbone forces you to write. I used jQuery to create an accordion dropdown effect for each page.

<img src="/post_resources/2014-seedchange-photos/admin.png">
The administrator interface for updating user and company information.

##The Stack:
- Node.js/Express
- PostgreSQL
- Bookshelf (ORM)
- Backbone.Marionnette

##Extras:
- D3
- Require.js
- Bootstrap
- Sass
- Modernizr
- Passport
