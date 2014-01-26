---
title: "Readify Numbers"
description: "I was recently working on a project that required me to display large numbers to the user (in the hundreds of thousands or millions). No one wants to read a long string of zeros, trying to figure out if the number is 100000000 or 10000000. I figured someone must have already written a simple script to perform this exact operation but after a bit of searching, I came up empty. So I decided to write my own script and here I am sharing it with you."
layout: post
tags: javascript
comments: yes
---
<img src="http://pulse.ncpolicywatch.org/wp-content/uploads/2009/02/numbers.gif" width="50%" align="right">

I was recently working on a project that required me to display large numbers to the user (in the hundreds of thousands or millions). No one wants to read a long string of zeros, trying to figure out if the number is 100000000 or 10000000. I figured someone must have already written a simple script to perform this exact operation but after a bit of searching, I came up empty. So I decided to write my own script and here I am sharing it with you. (The full code can be found as [a gist](https://gist.github.com/cmonaghan/8499612) on Github).

The goal is to convert numbers like so:

    200000 --> "200k"
    1200000 --> "1.2M"
    54100000000 --> "54.1B"

The first step is to determine how many digits the number has. To do this, we convert the number to a string. Before doing this however, we will want to round the input to an integer first because we don't want a number like 150.064 to throw us off with 6 digits.

    // convert input number to string and remove anything after the decimal
    var numberString = Math.floor(number).toString();

    // find digits length
    var digitsLength = numberString.length;

Next we want to trim our number down based on how many digits it contains. A number that has 6 digits is in the thousands, and therefore we would want to trim off the last 3 digits and add a 'k' for thousands. A number that has 7 digits is in the millions, and therefore we would want to trim off the last 6 digits and add an 'M' for millions. I've performed this task with a simple if/else statement. A switch statement could also work well here, but I prefer the if/else simply because there's less of a chance for error. When using switch statements, you can easily miss a 'break' or a 'default', causing your code not to work as you expect.

Below I'm using a helper function called trimToTenths, which as you might expect, trims the number to the tenths place. We'll look at this helper function in a second, but for now just know that this trimToTenths function allows us to keep the tenths place in our numbers. (I think '1.4M' looks much better than '1M').

    // check length (to determine whether to convert to thousands or millions)
    if (digitsLength <= 3 && digitsLength !== 0) {
      return trimToTenths( number.toString() );
    } else if (digitsLength <= 6) {
      number = number/1000;
      return trimToTenths( number.toString() ) + 'k';
    } else if (digitsLength <= 9) {
      number = number/1000000;
      return trimToTenths( number.toString() ) + 'M';
    } else if (digitsLength <= 12) {
      number = number/1000000000;
      return trimToTenths( number.toString() ) + 'B';
    } else {
      console.log('Only numbers with a string length between 1-12 digits before the decimal will be converted to a readable number.');
      return number.toString();
    }

As you may have noticed the above code has an else block at the end that will run if no other conditions are met. This block will only run for numbers exceeding 12 digits. (I've never really seen numbers displayed as '1.2T' for trillions or '1.2Q' for quadrillions. If your numbers are that big, then you need a different convention for displaying them.) I use a console.log instead of throwing an error because I don't want to interrupt the normal execution of the code, but I do want to display to the future user of this code that the number was not converted.

Below I've detailed how the helper function operates for trimming a number to the tenths place. It's fairly self-explanatory. The one notable point of interest is the line where roundedNum is defined. Rather than implement a lengthy function that would round numbers to the tenths place using some extension of Math.round(), I instead simply multiply the number by 10, round it to an integer, and then divide it by 10 again. This allows me to essentially round a number to the tenths place in one line of code rather than writing a whole new function.

    // helper functions
    function trimToTenths(stringifiedNumber) {
      var index = stringifiedNumber.indexOf('.');
      if (index === -1) {
        return stringifiedNumber;
      } else {
        var slicedNum = stringifiedNumber.slice(0, index + 3); // slices an extra digit so that it can be rounded
        var roundedNum = Math.round(Number(slicedNum) * 10) / 10; // multiply, then divide by 10 as a quick hack to round to the tenths place
        return roundedNum.toString();
      }
    }

And don't forget to do some error handling at the beginning of the function to avoid any odd behavior you minght encounter. For this I simply check to make sure the number passed to the function is either a number or can be cast to a number. If if fails this test, I throw an actual error because something unexpected occurred and needs to be remedied.

    // throw error for any parameter input that is not a number and cannot be converted into a number
    if (Number(number).toString() === 'NaN') {
      throw 'Error. The readifyNumbers input parameter must be a number.';
    }

My hope is that this snippet of code can help you solve a simple issue without having to duplicate work by writing a similar script from scratch. If you have any recommended optimizations, please write a comment!
