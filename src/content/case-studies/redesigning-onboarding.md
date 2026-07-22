---
title: "When Nobody Signed Up"
date: "May 2025"
excerpt: "Our student org launched a new event platform. Two weeks in, signups were half of what we expected — not because students didn't care, but because we'd buried the start button."
tags: ["UX Research", "Onboarding", "Prioritization"]
readTime: "6 min read"
---

## It all started when...

Three weeks into the semester, our VP of Events mentioned in passing that "people just aren't signing up." The event platform had launched two weeks prior. We had 200+ members and a full calendar — but only 34 had completed their first sign-up.

My first instinct was that students weren't interested. My second instinct, after sitting with it for a day, was to check the data before assuming.

## The Hypothesis

I ran five informal interviews over two lunch hours — not a formal study, just conversations with people I saw at the student center. I asked each person to show me how they'd sign up for an event right now, on their phone, while I watched.

Four out of five couldn't find the button.

Not because the platform was bad. Because "Sign Up" was buried three taps deep behind a modal that looked like a cookie consent banner. People were dismissing it without reading it.

My hypothesis: **the problem wasn't interest, it was friction at first contact.** If we moved the sign-up action to the surface — literally made it the first thing visible — completions would recover without touching anything else.

## The Prioritization Call

At the same time, our tech lead wanted to build event recommendations — a "you might also like" feature that would surface relevant events based on past attendance. It was a genuinely good idea, and I could see why it felt urgent.

Here's why I pushed back: recommendations only help users who've already signed up once. We had a completion problem at step one. Building recommendations before fixing onboarding was adding a second floor to a house with no front door.

We had two weeks of sprint capacity. I made the call to fix the sign-up surface first and defer recommendations to the next sprint. The tech lead disagreed initially — I had to make the case that we were solving for different problem layers, and that his idea would get more usage once we had more users who'd completed a first action. He came around.

## What Was Built

We reduced the sign-up flow from four taps to two. The dismissible modal became a persistent bottom sheet. Student info auto-filled from their university login — something that had been possible the whole time but never wired up.

The change took three days to ship. Not because it was simple engineering, but because we spent the first day and a half arguing about whether to do it at all.

## The Outcome

Sign-up completions increased from 34 to 89 in the two weeks following the change. We didn't run a controlled experiment, so I can't attribute all of it to the onboarding fix — it was also the middle of a busy semester. But the qualitative signal was consistent: the three users I re-interviewed said it "finally made sense," and our VP of Events stopped mentioning low signups at weekly check-ins.

The recommendations feature shipped three weeks later. It performed well. I think it performed better than it would have if we'd built it first.

## What This Revealed About How I Think

I almost shipped the recommendation feature first. It was more exciting to build, and on paper it looked like it addressed "engagement." This project was a reminder that the most important PM instinct isn't choosing the right feature — it's correctly diagnosing which layer of the problem you're actually in.

Recommendations are a retention problem. We had an acquisition problem. Getting that distinction right before writing a single line of code was the actual work.

---

*[Replace this with your actual project. The structure above — hook, hypothesis, prioritization call, what was built, outcome, reflection — is the template. Keep it specific and honest. Recruiters can tell the difference between a case study written to impress and one written to think.]*
