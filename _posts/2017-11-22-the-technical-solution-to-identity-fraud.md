---
layout: post
title:  "The Solution to Identity Fraud"
---

Identity fraud [severely damages lives](https://www.bloomberg.com/news/articles/2017-09-13/my-three-years-in-identity-theft-hell).
It happens to [millions of people every year](https://www.ftc.gov/news-events/press-releases/2003/09/ftc-releases-survey-identity-theft-us-273-million-victims-past-5), and costs families and businesses [billions of dollars](https://www.cnbc.com/2017/02/01/consumers-lost-more-than-16b-to-fraud-and-identity-theft-last-year.html).

Currently, the only thing an attacker needs to impersonate you are the answers to a few personal questions.
As data breaches become more common, that information is easier to acquire, and [cases of identity fraud have dramatically increased](https://www.ftc.gov/system/files/attachments/press-releases/ftc-announces-significant-enhancements-identitytheft.gov/idt-complainttrends_jan2016.pdf).

This system isn’t working because [our model is insecure]({{ "/2017-11-11/what-the-equifax-breach-means" | absolute_url }}).

So how can we design something better?

First, we must assume all private data is known or could be known in the future.
Someone has the data from the [2017 Equifax hack](https://www.nytimes.com/2017/09/07/business/equifax-cyberattack.html), complete with all the information necessary to defraud 143 million people.
What would make identity fraud hard or impossible, even _with_ all that private data?

### A second factor

Many people may already be familiar with the concept of "two-factor authentication" or "multifactor authentication" as it's become increasingly used by financial institutions and popular websites.

Multifactor authentication requires authentication from at least two of the following categories:
* knowledge (e.g. a password, a PIN, personal information)
* possession (e.g. a phone, an ATM card, a USB key)
* inherence<sup>1</sup> (e.g. a fingerprint, a retinal scan)

Requiring a second verification method makes fraud extremely difficult.

Even if an attacker could acquire the personal data on 143 million people, it would be extremely difficult to also steal the corresponding wallets or phones of those 143 million people.

Credit agencies could implement multifactor authentication as an extra security measure that consumers could opt-in for.
Even easier, credit agencies already have every consumer's phone number, so could conceivably implement phone-based multifactor authentication with no opt-in necessary.
However this would only be a stopgap measure.

> First, we must assume all private data is known or could be known in the future.

Proving possession of a phone number or email account is still susceptible to compromise since [phone numbers can be assumed](https://www.bellingcat.com/news/2016/04/30/russia-telegram-hack/) and [emails can be hacked](https://www.nytimes.com/2014/08/06/technology/russian-gang-said-to-amass-more-than-a-billion-stolen-internet-credentials.html).
Many websites still use phone number or email authentication as a second factor, though the U.S. National Institute of Standards and Technology (NIST) has declared [SMS-based authentication insecure](https://techcrunch.com/2016/07/25/nist-declares-the-age-of-sms-based-2-factor-authentication-over/).

This is still strictly better than today's current identity verification model, which doesn't use any second factor.
It would be practical and easy to implement because almost everyone already owns a phone number or email address, but these methods can only ever serve as a substandard second factor.

What we really need is something that is hard to possess and impossible to replicate.

### A physical device is best

Each person could keep this physical device in their wallet, or on their keychain, or on their phone.
Imagine that before signing up for a credit card or tax refund or mortgage, an individual must prove possession of this physical device.

![Estonian ID card]({{ "/assets/estonia_id_card.jpg" | absolute_url }}){:height="190px" style="display:inline"}
![YubiKey]({{ "/assets/yubi_key.png" | absolute_url }}){:height="190px" style="display:inline"}
![Authy two-factor authentication]({{ "/assets/authy.jpg" | absolute_url }}){:height="190px" style="display:inline"}
_Figure 1. A digital ID card would be best, but using any one of these devices would make large-scale identity fraud impossible._

It would be impossible for an attacker to collect 143M physical devices scattered throughout the world in order to make use of this sensitive data.

So assuming each individual has a physical device, what should it do?

### Public/private keypairs

Public/private keypairs are how information is transferred securely over the internet.
It's a pair of keys that allows one-way encryption, where one key is used to encrypt (public key), and the other to decrypt (private key).

It's like giving out a bunch of open locks, where anyone can lock something inside, but only you have the key to unlock the contents.

![public private keys]({{ "/assets/pki_public_private_keys.png" | absolute_url }})
_Figure 2. Anyone can use the public key to encrypt information, but only the recipient can decrypt it using the private key._

This means you can give out your public key to literally anyone, but only you have the private key to read the messages they encrypt.
Pretty cool!

When you visit a site that uses HTTPS (aka most websites), it's using this same method to encrypt all information sent between you and the website.
This allows you to safely share sensitive information with a website (like your credit card details) without someone intercepting and stealing it.

It's well-understood and extremely secure.

Now imagine you have a physical device<sup>2</sup> with your private key installed.
Your corresponding public key is uploaded to a public database that tracks public keys and the person they are tied to.
This database stores nothing sensitive since by definition public keys are intended to be shared.

> If you are who you say you are, you should be able to decrypt this.

Now when I want to sign up for a credit card and must prove my identity to the bank, the bank asks the database to verify that I'm really Christian Monaghan.
The database looks up my public key on file, and uses it to encrypt a secret message and send it to me.

I plug in my private key device and type in my password.
My device decrypts the secret message and sends it back to the database.
The database sees that I correctly decrypted the message, which means I possess the private key, knew the password to use it, and am therefore the real Christian Monaghan.

![public key infrastructure identity verification]({{ "/assets/pki_identity_verification.png" | absolute_url }})
_Figure 3. Identity is proved through both knowledge (a password), and possession of a physical key._

It's a test where the database asks, "If you are who you say you are, you should be able to decrypt this."

### A trusted authority

So who would operate this mystical "public database?"
Ideally the federal government would operate it, though a collection of private companies could also do this.

This is called a [Public Key Infrastructure](https://en.wikipedia.org/wiki/Public_key_infrastructure).
On a technical level, anyone can operate it.
But the important thing is that institutions trust the entity operating the database.

The federal government is currently the only trusted authority when it comes to physical photo IDs like a passport.<sup>3</sup>
It would make sense for the federal government to play a similar role in maintaining online identities.
The government certainly has great name brand recognition. ;)

> An identity platform would open the door for new innovations.

However, private companies could fill this role instead.
The internet faced a similar problem decades ago for proving website identity.
The solution was to use a public key infrastructure to issue [public key certificates](https://en.wikipedia.org/wiki/Public_key_certificate) verified by a collection of private companies.

This is interesting because website identity is not verified by a government.
Rather, the trust in these public key certificates boils down to a few root certificate authorities operated by private companies (e.g. Comodo, Symantec, Digicert, Entrust).
These have been deemed trustworthy and come preinstalled on your computer and browser.

This model has worked quite well.
It's distributed and decentralized.
If any certificate authority [falls from grace](https://security.googleblog.com/2017/09/chromes-plan-to-distrust-symantec.html) or [becomes compromised](https://www.cnet.com/news/comodohacker-returns-in-diginotar-incident/), it can be revoked.
This system is resilient and self-policing.

So in the end, the federal government could be a trusted authority, or private companies could fill this role.
However, the federal government would bring enormous advantages, since it has the power to drive widespread adoption, and could make the physical device a legal photo ID.

### Platform benefits

A secure method for identity verification would provide a powerful platform to improve existing online services, while also laying the foundations for new innovations.

In addition to preventing identity fraud, the same device could be used to provide digital signatures.
In other words, this same device could be used not only for _authentication_, but also for _authorization_.<sup>4</sup>

This could be made legally equivalent to manual signatures, preventing the need for signing paper forms, notarizing documents, or accessing services in person (as is currently the case with many government support services).

An identity platform would open the door for new innovations like [personal data stores](http://openpds.media.mit.edu/) and [secure online voting](http://news.bbc.co.uk/2/hi/europe/4343374.stm).

### The future is now

Data breaches have become the new norm.
Until we implement a secure model for identity verification, millions of people will continue to be hurt, and billions of dollars lost every year.

We already have the tools.
Now let's build a better world.

---

<sub>
1.
Inherence means some physical characteristic of the user (aka biometrics). Inherence based on biometrics is not ideal because things like fingerprints cannot be revoked if compromised, as happened in the [2015 OPM hack](https://www.theatlantic.com/technology/archive/2015/09/opm-hack-fingerprints/406900/).
</sub>

<sub>
2.
This device could be a USB key, an ID card, or something else we as a society choose to standardize on.
</sub>

<sub>
3.
Notably, U.S. states issue driver's licenses, however having over 50 unique state implementations of a Public Key Infrastructure would be an enormous duplication of effort.
It would also create more opportunities for implementation mistakes.
</sub>

<sub>
4.
The first proves your identity, while the second agrees to a legal contract.
In the physical world, _authentication_ is when you show your photo ID to the bank to prove who you are.
_Authorization_ is when you sign your name to approve opening a new bank account.
</sub>
