# This is my personal site

This is the 3rd iteration of my site. It's built using Jekyll. Its design was inspired by the Jekyll theme [Tale](https://github.com/chesterhow/tale), and the lightweight CSS framework [skeleton](http://getskeleton.com/).


## Usage
### 1. Fork and Clone
Fork this repository then clone it.

### 2. Install dependencies
This site uses Jekyll's built-SCSS compiler to generate CSS. You'll need to install the Jekyll gem:

```bash
$ gem install jekyll
```

### 3. Running Locally
To test the site locally (including drafts), run this from the root directory:

```bash
$ jekyll serve --drafts --watch
```

Go to http://localhost:4000.


## Cloudflare Pages

This site's domain and deployment is setup using Cloudflare Pages.

## Redirect from christianmonaghan.com to woolgathering.io

I setup a Lambda@edge rule which sends a 301 redirect to for any requests to christianmonaghan.com. It's manually configured as it's a simple function. If any changes are made to this function, it must be "Deployed" not just "Published" for the changes to take effect.
