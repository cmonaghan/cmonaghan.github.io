---
title: "How to build a responsive navbar in under 5 minutes"
description: "With the proliferation of so many digital devices, it's important to make sure your application can be used on devices with screens of various sizes. This quick demo will show you how to make a beautiful navigation bar compatible with mobile devices."
layout: post
tags: programming
comments: yes
---

Nearly every web app you build will require a navbar. And if you've ever tried to build a navbar from scratch with nothing but raw HTML and CSS, then you know how laborious this process can be. To make things more difficult, with the proliferation of so many digital devices, it's important to make sure your application can be used on devices with screens of various sizes. Normally, this would require writing a lot of clever Javascript, HTML, and CSS to make a responsive navbar that can collapse and expand as your window size changes. But fortunately for us, someone has already built such a tool. Enter [Bootstrap](http://getbootstrap.com/).

Bootstrap is an open-source project originally developed at Twitter, and has been around since 2011. Bootstrap offers immense power for quickly building all the basic components that a modern web app requires, including a mobile-friendly responsive navbar. (It also doesn't hurt that Bootstrap was built with a keen eye for clean design.)

You can see the code in action [here](http://codepen.io/anon/pen/rDgBI). Make sure to drag your browser window to different sizes in order to see the navbar collapse as your browser window drops below a threshhold size.

<img src="/post_resources/2014-how-to-make-a-responsive-navbar/navbar-expanded.png">
<small>A picture of the navbar expanded.</small>

<img src="/post_resources/2014-how-to-make-a-responsive-navbar/navbar-collapsed.png">
<small>A picture of the navbar collapsed.</small>


# The Steps

#### Set up

Our first step is to set up a basic HTML document and include the bootstrap library dependencies. Note that jQuery is required for Bootstrap to work. (The optional theme is not required, but it adds a nice gradient and drop shadow to our navbar so I'll include it.)

    <html>

      <head>
        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css">

        <!-- Optional theme -->
        <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap-theme.min.css">

        <!-- jQuery is required for bootstrap to work -->
        <script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.0/jquery.min.js"></script>

        <!-- Latest compiled and minified JavaScript -->
        <script src="http://netdna.bootstrapcdn.com/bootstrap/3.1.0/js/bootstrap.min.js"></script>
      </head>

      <body>

      </body>

    </html>

#### Creating the basic structure

Bootstrap provides a number of classes that add functionality to your HTML. If you simply include these classes in your HTML, that functionality will be imparted to the element. Inside the body of our HTML, let's define a basic nav with some of these classes. If you'd like to learn more about what these classes do, refer to the [Bootstrap documentation](http://getbootstrap.com/components/#nav).

    <div class="container" style="margin-top:20px;">
      <nav class="navbar navbar-default" role="navigation">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class="active"><a href="#">Products</a></li>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

Now if you render the HTML, you'll see the basic structure of a nice little navbar with our four links. Also, note the class `collapse`. This class is crucial for showing or hiding these links depending on the screen size of the viewing device, adding the mobile-friendly responsive functionality we are looking for.

#### Adding a dropdown item

Next let's add a link for 'My Account' that includes a dropdown of options. After the closing `ul` tag of our unordered list, let's add a new unordered list to hold the links we want aligned right with the additional class `navbar-right`. To get the dropdown functionality from our 'My Account' link, we are going to add a new unordered list within our `li` element and use the class `dropdown-menu`.

    <ul class="nav navbar-nav navbar-right">
      <li class="dropdown">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown">My Account <b class="caret"></b></a>
        <ul class="dropdown-menu">
          <li><a href="#">Edit my profile</a></li>
          <li><a href="#">Settings</a></li>
          <li><a href="#">Help</a></li>
          <li class="divider"></li>
          <li><a href="#">Sign out</a></li>
        </ul>
      </li>
    </ul>

Bootstrap also provides a class `divider` which has been employed here, and gives a nice visual break to the dropdown list.

#### Adding a horizontal nav for mobile devices

Lastly, let's add the collapsed navbar that can be used for mobile devices. Just after the div with the `container-fluid` class, let's add the following code:

    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
    </div>

This will make a small button appear on the top right of the nav bar if the screen is below a threshhold width. The Bootstrap default is 768px. You can see this feature in action by dragging the corner of your browser window and making it smaller. Once your browser window has a width less than 768px, the links will disappear and be replaced by this nav button.

Inside this `navbar-header` is also the ideal place add a company logo or brandname. Add the following code after our `button` closing tag to include a name for our app.

    <a class="navbar-brand" href="#">Widgets Inc.</a>

#### In summary

Bootstrap is immensely powerful. It's helpful for creating the basic components of a web app in a clean and beautiful way. Read more about what kinds of things you can do with Bootstrap in the [Bootstrap documentation](http://getbootstrap.com/components/#nav).

# Complete Source Code

    <html>

      <head>
        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css">

        <!-- Optional theme -->
        <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap-theme.min.css">

        <!-- jQuery is required for bootstrap to work -->
        <script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.0/jquery.min.js"></script>

        <!-- Latest compiled and minified JavaScript -->
        <script src="http://netdna.bootstrapcdn.com/bootstrap/3.1.0/js/bootstrap.min.js"></script>
      </head>

      <body>

        <div class="container" style="margin-top:20px;">
          <nav class="navbar navbar-default" role="navigation">
            <div class="container-fluid">
              <!-- Brand and toggle get grouped for better mobile display -->
              <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">Widgets Inc.</a>
              </div>

              <!-- Collect the nav links, forms, and other content for toggling -->
              <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                  <li class="active"><a href="#">Products</a></li>
                  <li><a href="#">Our Story</a></li>
                  <li><a href="#">Team</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                  <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">My Account <b class="caret"></b></a>
                    <ul class="dropdown-menu">
                      <li><a href="#">Edit my profile</a></li>
                      <li><a href="#">Settings</a></li>
                      <li><a href="#">Help</a></li>
                      <li class="divider"></li>
                      <li><a href="#">Sign out</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

      </body>

    </html>
