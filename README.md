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


## SSL Details

As of September 2017, GitHub Pages doesn't support SSL on custom domains out of the box. However, I've enabled SSL on https://www.christianmonaghan.com by using an SSL certificate from [AWS Certificate Manager](https://aws.amazon.com/certificate-manager/) and then [directing traffic first through AWS CloudFront](http://strd6.com/2016/02/github-pages-custom-domain-with-ssltls/). The AWS parts are managed through my root AWS account.

So what's this actually look like?

1. A CNAME for www.christianmonaghan.com points to the AWS CloudFront distribution (DNS is currently managed by google domains)
2. The AWS CloudFront distribution has an SSL certificate from ACM and its origin is set as the GitHub Pages CNAME (cmonaghan.github.io).
   - One gotcha to be aware of: The `Host` header must be forwarded with requests from CloudFront. [Otherwise, you get an infinite redirect loop](https://github.com/thenativeweb/forcedomain/issues/19). Header forwarding can be configured in the "Behaviors" section of the CloudFront distribution.

One downside to this approach is: since the DNS is currently managed through google domains, we're unable to use the same ACM certificate on https://christianmonaghan.com. In order to support SSL on the bare domain, we'll need to use a cert. from elsewhere or move the DNS management to Route53, which would allow us to create an A record on the bare domain with the CloudFront Distribution as an Alias target.
