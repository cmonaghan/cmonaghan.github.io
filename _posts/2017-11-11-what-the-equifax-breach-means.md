---
layout: post
title:  What the Equifax Breach Means for the Future of Online Security
featured: true
---

I'm the engineering lead for the login system used by two of the US government's largest consumer websites.
In total, we secure the identities of one in five Americans.
Part of the account signup process requires an identity verification step via Experian, one of the big three credit agencies.

This online identity verification process is standard for many websites that deal with sensitive user data.
Many Americans don't realize credit agencies not only determine financial creditworthiness, but also serve as the primary safeguard against identity fraud.
This is a problem.

> We cannot rely on private data staying private forever.

Identity verification is important to get right---it's how companies determine if you are who you say you are before issuing a credit card, an insurance policy, a mortgage, or a tax refund.
Before the internet, a lender would generally do business in person and could simply check the applicant's physical photo ID to verify the applicant was who they said they were.

With the rise of the internet, there came a need to verify identities online.
Credit agencies stepped in to fill this role, leveraging their vast troves of consumer credit history to ask the online user questions supposedly only the real person would know.

Today this means users submit some personal information such as name, address, and phone number, and then the credit agency provides a few multiple choice questions the user must correctly answer to verify their identity, such as:
* _"Which of these high schools did you attend?"_
* _"At which of these banks have you held an account?"_
* _"At which of these addresses have you previously lived?"_

If your answers match the credit agency's data, then you must be who you say you are!

Credit agencies charge handsomely for this service, however, this security model has always been predicated on the shaky assumption that user data is private and will always remain private. The increasing rate of data breaches from the [Equifax breach of 143M people](https://www.nytimes.com/2017/09/07/business/equifax-cyberattack.html) to the [OPM hack of 21.5M people](https://www.nytimes.com/2015/07/10/us/office-of-personnel-management-hackers-got-data-of-millions.html?_r=0) to the [Yahoo hack of 1B accounts](https://www.nytimes.com/2017/03/17/technology/yahoo-hack-data-indictments.html) shows this assumption to be false.

> Regulation and data privacy laws will not make our current process secure.

Here’s an example showing how this currently works. This is the identity verification process used for signing up for a credit card, applying for a loan, or claiming a tax refund.

##### Step 1: Submit your contact information
![Identity Verification Step 1]({{ "/assets/ridp_step_1.png" | absolute_url }})

After submitting this information, you are then prompted with the following multiple choice questions:

##### Step 2: Answer some questions only the "real you" would know
![Identity Verification Step 2]({{ "/assets/ridp_step_2.png" | absolute_url }})

Regulation and data privacy laws will not make our current process secure when it remains based on flimsy principles.
We cannot rely on private data staying private forever, especially when it's spread across so many disparate systems from credit agencies to government agencies to banks to phone carriers.

Regardless of the regulations we put in place, there will always be another Equifax breach or OPM hack. We should focus on how to transition to a secure underlying method of identity verification.
Doing so would render the exposure of private data harmless (at least from identity fraud).

There are real technical solutions to identity verification that would eradicate identity fraud overnight.
We already have well-established models for securing web traffic (via HTTPS) and verifying the identities of websites (via SSL certificates).
We can use these same principles to verify the identities of people.

In fact, [Estonia solved this problem years ago](https://e-estonia.com/solutions/e-identity/id-card/) with their digital ID card.
[Japan is following Estonia's example](http://estonianworld.com/technology/japan-to-implement-id-card-following-estonias-example/) and [India successfully rolled out its own ID card "Aadhaar"](https://en.wikipedia.org/wiki/Aadhaar) to its over 1B citizens.

This model could be securely administered by the government, or even a collection of private entities.
Our current system is clearly broken, but it doesn't need to be this way.
We already have the tools to eliminate identity fraud.
We just need to use them.
