---
title: "Getting students to trust an AI with their wellness"
date: "Mar 2026 – present"
excerpt: "I'm the PM on Evergreen, Dartmouth's AI wellness app. Students told us an AI asking for their data felt like a lot to trust, so I spent my time making it ask for less, and proving that was the right call."
tags: ["AI Product", "User Research", "Stakeholder Management", "0-to-1"]
readTime: "2 min skim"
fullStoryTime: "5 min"
subtitle: "AI product · Trust & data permissions · Influence without authority"
order: 1
featured: true
mascot: "/work/evergreen/evie-mascot.webp"
cardImage: "/work/evergreen/evie-chat.webp"
cardImageAlt: "Evergreen app on an iPhone: Evie, the AI, helping a student set a SMART goal for undergraduate research"
gallery:
  - src: "/work/evergreen/home.webp"
    alt: "Evergreen home screen: categories like study habits and social connections, recommended dialogues, and campus events"
    caption: "Home. Dialogues, events, and videos picked for the student."
    frame: "screen"
  - src: "/work/evergreen/evie-chat.webp"
    alt: "Evie, Evergreen's AI, walking a student through setting a SMART goal, with suggested replies"
    caption: "Evie. Conversations with suggested replies, so a student never faces a blank box."
  - src: "/work/evergreen/evie-mood-checkin"
    kind: "video"
    poster: "/work/evergreen/evie-mood-checkin.jpg"
    alt: "A student tells Evie they are not feeling great, then drags a five-point mood scale from Not great to I'm good"
    caption: "Mood check-in. A 5-point scale you drag, not a form you fill out."
org: "Evergreen, at Dartmouth's DALI Lab"
role: "Product Manager (promoted from Project Assistant)"
team: "Led 6 designers in V1; now design and engineering"
methods: ["Campus survey", "Student interviews", "50-student survey", "A/B test design"]
outcome: "Upfront permissions cut from 8 to 2 and onboarding from 80 questions to 30, once real users backed the case. Promoted to PM for all of Evergreen, now in testing with 200 students."
story:
  problem: "Students said an AI asking for personal data felt like a lot to trust. Evergreen asked for 8 permissions before they'd even met Evie."
  decision: "I pushed to ask for 2. Leadership said no twice, so instead of a third argument, I got them to commit to testing it."
  result: "Once real students started onboarding, the friction showed up right where we said it would. 8 became 2."
stats:
  - value: "8 → 2"
    label: "permissions asked for up front"
  - value: "80 → 30"
    label: "onboarding questions, in 4 short modules"
  - value: "48 of 50"
    label: "students picked real photos over AI art"
  - value: "15 → 200"
    label: "students testing Evergreen, first test to now"
decisions:
  - title: "How much to ask for up front"
    problem: "The design asked for 6 permissions and 2 integrations on day one. Our research said students were already uneasy."
    decision: "I recommended 2. Leadership wanted full transparency and said no twice. So I proposed shipping V1 as is and committing to an A/B test later."
    result: "Real users settled it. 8 became 2, and the whole onboarding got rebuilt, from 80 questions to 30."
    lesson: "Next time I'd bring a plan, not just a disagreement."
  - title: "AI art or real photos"
    problem: "We wanted an art style we couldn't draw ourselves, so AI images looked like the answer. Then we saw them, and something felt off."
    decision: "Nobody trusted their gut, so we asked 50 students to pick between real photos and the AI images."
    result: "48 picked real photos, and said they felt more ethical, not just better looking. Real photos shipped."
    lesson: "How you made it can matter to users as much as what you made."
  - title: "My team's structure"
    problem: "Week one, I paired experienced designers with newer ones. Speed, quality, mentorship: it checked every box on paper."
    decision: "The designers told me they'd rather own individual tasks. It was working, and I changed it anyway."
    result: "The team got the room it asked for, and we shipped the V1 testing build."
    lesson: "Lead from what people tell you, not your model of them."
  - title: "Saying no during the crunch"
    problem: "Partners kept adding requests during the V1 push, including AI event suggestions with a real fairness risk."
    decision: "I flagged the risks and proposed a rule: new features start when the dev team is ready, not when they hit a list."
    result: "The boundary held. Partners came back later and accepted the same answer, and a simpler, safer events feature shipped."
now:
  - title: "Tool calling for Evie"
    body: "What Evie can do on a student's behalf, and what it should never do on its own."
  - title: "How Evie remembers"
    body: "What it keeps, what it forgets, and how a student can see or delete it. The permissions question, one layer down."
  - title: "Onboarding friction audit"
    body: "Onboarding is still where students drop off most. I'm finding exactly where, and why."
lesson: "When you can't win the decision, win a way to learn it."
---

## It all started when...

Before Evergreen had been tested with a single student, our own research told us students were uneasy about it. [Evergreen](https://evergreen.dartmouth.edu/) is a generative-AI wellness platform built at Dartmouth by hundreds of student builders, grounded in the university's behavioral-health research. A campus survey and student interviews kept saying the same thing: an AI in the wellness space, asking for personal data, felt like a lot to trust.

I was the PM taking design from there to a first testing build. I led 6 designers, and had no authority over the two groups whose decisions mattered most: project leadership and our faculty and staff partners. Almost every hard moment came down to changing someone's mind, and "because I think so" was never going to work.

## The permissions ask

The design assumed students would grant around six permissions and two integrations up front, so the AI had what it needed from day one. Our research said that would make an uneasy user more uneasy. I recommended cutting the upfront ask to **two** and asking for the rest later, in context.

Leadership said no in the first meeting, and again in the second. Their reason was a good one: full transparency, showing students the whole scope of how their data *could* be used. My team was behind fewer permissions, but we couldn't get there before the V1 deadline.

So in the third meeting I stopped arguing for the change and argued for a test: ship V1 with the full ask, but **commit to A/B testing the number of permissions** later, so real behavior would make the call instead of either side's conviction. Leadership agreed. Without that, "how many permissions" would have quietly become "however many V1 shipped with."

What I'd do differently: I brought a recommendation and a disagreement. I should have brought a plan that also answered their transparency concern.

## How 8 became 2

What finally moved it wasn't a better slide. It was real students. Once Evergreen started onboarding the research group, the friction showed up right where we'd said it would, and more and more people on the project came around.

It turned out to be bigger than permissions. The whole onboarding changed, which is what we'd been pushing for since the start:

- **The upfront ask went from 8 to 2**, with the rest asked for later, in context.
- **Onboarding went from 80 questions to 30**, split into 4 short modules, because a student who quits on question 40 never meets Evie at all.

I didn't win this one in a meeting. My job was to keep the question on the table, with the case ready, for when the evidence showed up.

<figure class="case-figure case-figure-wide">
  <video autoplay muted loop playsinline preload="metadata" poster="/work/evergreen/insights.jpg" aria-label="Evergreen Insights screen: a month of moods, sleep, activity, and a weekly steps graph">
    <source src="/work/evergreen/insights.webm" type="video/webm" />
    <source src="/work/evergreen/insights.mp4" type="video/mp4" />
  </video>
  <figcaption>Insights: mood, sleep, and activity in one place. This is what the permissions are <em>for</em>, which is exactly why when and how we ask for them matters.</figcaption>
</figure>

## AI art or real photos

The team wanted an art style we'd found online and couldn't draw ourselves, so AI-generated images looked like the way to get there. Once we saw the results, people felt uneasy, but nobody trusted that gut reaction either.

So we surveyed 50 Dartmouth students: real student photos or the AI images. **Two** picked AI. Everyone else strongly preferred real photos, and told us they felt more *ethical*, not just better looking. I expected an opinion on aesthetics. I got one on ethics and the resource cost of generating images at all. We went with real photos.

## My team, and saying no

**Team structure.** Week one, I paired experienced designers with newer ones. It optimized for speed, quality, and mentorship at once. The designers told me, directly, that they'd rather own individual tasks. It was "working," and I changed it anyway. I should have led from what they told me, not my model of what was good for them.

**Scope.** Partners wanted Evergreen to recommend campus events. I flagged two risks before anyone built it: shaky assumptions behind the recommendations, and fairness, since no student org should get less visibility than another. It didn't make V1, and a simpler version that avoided both risks shipped later. When partner requests kept piling up during the crunch, I proposed a rule: new features start when the dev team is ready, not when they land on a list. The boundary held.

## Where it stands now

As of this fall I'm the PM for all of Evergreen, design *and* development. The research group has grown from about 15 students to around 200, and Evergreen is backed by $5M in Dartmouth research funding. The work has moved deeper into the AI itself: what Evie can do for a student, what it remembers, and why students still drop off in onboarding. I'll keep updating this page as that lands.
