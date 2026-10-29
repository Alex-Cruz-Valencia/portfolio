---
title: "Getting students to trust an AI with their wellness"
date: "Mar 2026 – present"
excerpt: "I'm the PM on Evergreen, Dartmouth's AI wellness app. Students were quitting onboarding before they ever met its AI, so I pushed past the spec to rebuild it. Completion went from about 60% to 90%."
tags: ["AI Product", "User Research", "Stakeholder Management", "0-to-1"]
readTime: "1 min skim"
fullStoryTime: "5 min"
subtitle: "AI product · Onboarding · Influence without authority"
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
team: "Led 6 designers in V1; now a 7-person team (3 developers, 3 designers, 1 design consultant)"
methods: ["Campus survey", "Student interviews", "50-student survey", "Usability testing"]
outcome: "Onboarding completion rose from about 60% to 90%, with 80 questions cut to 30. Promoted to PM for all of Evergreen, now in testing with 200 students."
deck: "I'm the PM on Evergreen, Dartmouth's AI wellness app, now in testing with 200 students."
hero:
  kind: dots
  total: 10
  filled: 9
  groups: [6, 3]
  cols: 5
  value: "60% → 90%"
  label: "of students finish onboarding, before and after the redesign shipped."
story:
  problem: "Students quit a long onboarding before they ever met the AI."
  decision: "Testing showed polish wouldn't fix it, so I pushed past the spec to rebuild it."
  result: "Completion went from about 60% to 90% once it shipped."
stats:
  - value: "80 → 30"
    label: "onboarding questions, in 4 short modules"
  - value: "15 → 200"
    label: "students testing Evergreen"
  - value: "7+"
    label: "features shipped across 17+ sprints"
decisions:
  - title: "Polish it or rebuild it"
    problem: "Partners asked for a visual refresh. Testing showed the flow itself was losing students."
    decision: "Pushed past the spec: 80 questions down to 30, in 4 short modules."
    result: "Shipped to live users. Completion rose from about 60% to 90%."
    lesson: "Fix what users hit, not what the spec says."
  - title: "AI art or real photos"
    problem: "AI images got us the look we wanted. Then something felt off."
    decision: "Asked 50 students instead of trusting our gut."
    result: "48 chose real photos, and called them more ethical."
    lesson: "How you made it matters as much as what you made."
  - title: "My team's structure"
    problem: "I paired senior and newer designers. Perfect on paper."
    decision: "They asked to own solo tasks. I switched, even though pairs worked."
    result: "The team got the room it wanted, and V1 shipped."
    lesson: "Lead from what people tell you."
  - title: "Saying no during the crunch"
    problem: "Partner requests piled up during V1, including a risky AI events feature."
    decision: "Flagged the risks. New rule: features start when the dev team is ready."
    result: "The boundary held, and a simpler, safer events feature shipped later."
now:
  - title: "Tool calling for Evie"
    body: "What Evie can do on a student's behalf, and what it should never do on its own."
  - title: "How Evie remembers"
    body: "What it keeps, what it forgets, and how a student can see or delete it. The trust question, one layer down."
  - title: "First conversations with Evie"
    body: "Early data says about 80% of students now finish their first conversation, up from roughly 50%. Still coming in."
lesson: "Don't polish a flow people are quitting."
highlights:
  - value: "90%"
    label: "finish onboarding"
  - value: "80 \u2192 30"
    label: "intake questions"
  - value: "200"
    label: "students testing it"
---

## It all started when...

Before Evergreen had been tested with a single student, our own research told us students were uneasy about it. [Evergreen](https://evergreen.dartmouth.edu/) is a generative-AI wellness platform built at Dartmouth by hundreds of student builders, grounded in the university's behavioral-health research. A campus survey and student interviews kept saying the same thing: an AI in the wellness space, asking for personal data, felt like a lot to trust.

I was the PM taking design from there to a first testing build. I led 6 designers, and had no authority over the two groups whose decisions mattered most: project leadership and our faculty and staff partners. Almost every hard moment came down to changing someone's mind, and "because I think so" was never going to work.

## The onboarding

Our partners asked for a visual refresh of onboarding. Then we put it in front of students, and the problem wasn't how it looked. It was a long, non-skippable flow of about 80 questions, and students were checking out before they ever met Evie, the AI they'd signed up for. Fresh paint wasn't going to fix that.

So I pushed past the spec. That meant going back to partners who'd asked for something smaller and making the case with what testing showed, not with my opinion of their design:

- **Onboarding went from 80 questions to 30**, split into 4 short modules, because a student who quits on question 40 never meets Evie at all.
- **It shipped to live users**, and completion went from **about 60% to 90%**.

What I'd do differently: I brought the problem to partners before I brought a plan. The conversations went better once I showed up with both.

<figure class="case-figure case-figure-wide">
  <video autoplay muted loop playsinline preload="metadata" poster="/work/evergreen/insights.jpg" aria-label="Evergreen Insights screen: a month of moods, sleep, activity, and a weekly steps graph">
    <source src="/work/evergreen/insights.webm" type="video/webm" />
    <source src="/work/evergreen/insights.mp4" type="video/mp4" />
  </video>
  <figcaption>Insights: mood, sleep, and activity in one place. This is what onboarding is <em>for</em>: every student who quits early never gets here.</figcaption>
</figure>

## AI art or real photos

The team wanted an art style we'd found online and couldn't draw ourselves, so AI-generated images looked like the way to get there. Once we saw the results, people felt uneasy, but nobody trusted that gut reaction either.

So we surveyed 50 Dartmouth students: real student photos or the AI images. **Two** picked AI. Everyone else strongly preferred real photos, and told us they felt more *ethical*, not just better looking. I expected an opinion on aesthetics. I got one on ethics and the resource cost of generating images at all. We went with real photos.

## My team, and saying no

**Team structure.** Week one, I paired experienced designers with newer ones. It optimized for speed, quality, and mentorship at once. The designers told me, directly, that they'd rather own individual tasks. It was "working," and I changed it anyway. I should have led from what they told me, not my model of what was good for them.

**Scope.** Partners wanted Evergreen to recommend campus events. I flagged two risks before anyone built it: shaky assumptions behind the recommendations, and fairness, since no student org should get less visibility than another. It didn't make V1, and a simpler version that avoided both risks shipped later. When partner requests kept piling up during the crunch, I proposed a rule: new features start when the dev team is ready, not when they land on a list. The boundary held.

## Where it stands now

As of this fall I'm the PM for all of Evergreen, design *and* development. The research group has grown from about 15 students to around 200, and Evergreen is backed by $5M in Dartmouth research funding. I lead a 7-person team (3 full-stack developers, 3 designers and a design consultant), and we've shipped 7+ features across 17+ sprints. The rebuilt onboarding is live, and completion went from about 60% to 90%.

The work has moved deeper into the AI itself: what Evie can do for a student, what it remembers, and how it routes students to the right resources. I partner with our engineers on tool calling and on model tests for Evie's memory and risk decisions. Early data says more students now finish their first conversation with Evie, roughly 50% before and 80% now, though that number is still coming in. I'll keep updating this page as it lands.
