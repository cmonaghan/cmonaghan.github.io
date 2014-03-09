---
title: "Setting Up Travis CI for iOS"
description: "I recently moved our iOS applications's continuous integration server from Jenkins to TravisCI. I have experience setting up Node.js projects, and those can be configured and auto-deploying to Heroku in under an hour. I knew iOS would be trickier since it would require a build step, and since Apple has some additional required credentials and certifications, but I completely underestimated how tricky it would be to set up an iOS application for continuous integration and auto-deploy to TestFlight."
layout: post
tags: programming
category: iOS
comments: yes
---

<img src="/post_resources/2014-setting-up-travisCI-for-iOS/travis-mascot-200px.png" width="35%" align="right">

I recently moved our iOS applications's continuous integration server from Jenkins to TravisCI. I have experience setting up Node.js projects, and those can be configured and auto-deploying to Heroku in under an hour. I knew iOS would be trickier since it would require a build step, and since Apple has some additional required credentials and certifications, but I completely underestimated how tricky it would be to set up an iOS application for continuous integration and auto-deploy to TestFlight. Below is just a taste of some of the gotcha's I ran into.

#### Gotchas

* where to find app name, developer name, profile UUID number
* where to find provisioning profile
* how to export developer identity
* how to find TestFlight team token
* how to find TestFlight upload API
* how to encrypt passwords (what to expect in `.travis.yml`)
* `chmod +x` in `before_install`
* how to test the deploy scripts from you command line before moving them to Travis
* add `!scripts/travis/profile` to `.gitignore` (if profile is currently listed in `.gitignore`)
* `testflight.sh` files found online don't work properly
* exporting the scheme from xcode


## Resources:

(in order of usefulness)

* [Travis CI for iOS](http://www.objc.io/issue-6/travis-ci.html) - This is the holy grail for information on integrating iOS with TravisCI and TestFlight
* [johanneswuerbach's gist](https://gist.github.com/johanneswuerbach/5559514) - 3 bash scripts and some limited information on how to set up iOS with Travis
* [davidjrice's gist](https://gist.github.com/davidjrice/7556250) - same 3 scripts as johanneswuerbach, but with some modifications
* [OneBusAway wiki](https://github.com/OneBusAway/onebusaway-iphone/wiki/Continuous-Integration-with-Travis-CI-and-TestFlight) - a lot of good info on how to perform some of the specific steps such as exporting your developer identity and provisioning profile
* [TestFlight docs](https://www.testflightapp.com/api/doc/) - how to upload a build to TestFlight from the command line
* [Travis docs: encryption keys](http://docs.travis-ci.com/user/encryption-keys/) - useful documentation on how to encrypt your variables
* [Travis docs: secure environment variables](http://docs.travis-ci.com/user/build-configuration/#Secure-environment-variables) - useful docs, though I initially missed the bit that says "secure env variables aren't available for pull requests from forks", which made them unusable for my application
