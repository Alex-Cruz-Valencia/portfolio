---
title: "Leading design on a product students weren't sure they trusted"
date: "Mar 2026 – present"
excerpt: "As PM on Evergreen, Dartmouth's student-built AI wellness platform, I led a 6-person design team toward first testing — with no formal authority over the leadership or partners I most needed to move. The recurring problem: winning the argument with evidence instead of position."
tags: ["Design Leadership", "User Research", "Stakeholder Management", "0-to-1"]
readTime: "8 min read"
order: 1
featured: true
org: "Evergreen · DALI Lab & Dartmouth Center for Technology and Behavioral Health"
role: "Product Manager (promoted from Project Assistant) — design team in v1, now design and engineering"
team: "6 designers, with project leadership and faculty/staff partners as stakeholders"
methods: ["Campus survey", "Student interviews", "50-student preference survey", "A/B test design"]
outcome: "Shipped the V1 testing build and kept the permissions question alive. Now PM for all of Evergreen: upfront permissions cut from 8 to 2, onboarding from 80 questions to 30."
tldr:
  - "Students told us an AI that asks for personal data felt like a lot to trust. I recommended cutting the upfront ask from six permissions and two integrations down to two."
  - "Leadership said no twice. So I stopped arguing for the change and won a commitment to A/B test it instead."
  - "Now that I PM all of Evergreen: the upfront permissions ask is down from 8 to 2, and onboarding from 80 questions to 30, split across 4 modules."
  - "Settled an AI-imagery debate with a 50-student survey. 48 picked real photos, and told us they felt more ethical."
  - "Held scope against partner feature creep through the V1 crunch, and the boundary stuck."
---

## It all started when...

Before Evergreen had been tested with a single student, our own research told us students were uneasy about it. [Evergreen](https://evergreen.dartmouth.edu/) is a generative-AI wellness platform built at Dartmouth — hundreds of student builders, grounded in the university's behavioral-health research, with a conversational tool at the center. A campus survey and student interviews kept surfacing the same discomfort: an AI in the wellness space, asking for personal data, felt like a lot to trust.

I was the product manager taking design from that starting point toward a first real testing build with Dartmouth students. I led a 6-person design team. I had no authority at all over the two groups whose decisions mattered most: project leadership and our faculty and staff partners.

Almost every hard moment that followed came down to the same thing — I needed to change someone's mind, and "because I think so" was never going to be enough.

## Leading the team: my structure wasn't the team's structure

Week one, I split the 6 designers into three sub-teams: two mixed pairs, each an experienced designer with a newer one, plus an animation pair. On paper it optimized for everything at once — speed on a tight timeline, quality, and real mentorship for the newer designers.

The designers told me, directly, that they'd rather not work in fixed pairs. They wanted individual design tasks and the room to coach themselves through them.

The structure was "working." I changed it anyway, toward individual assignments. The thing I'd been optimizing — my read of the speed/quality/mentorship tradeoff — turned out to matter less than how the people doing the work actually wanted to work. I should have led from what they told me, not from my own model of what was good for them.

## The decision I'm known for: the permissions ask

Evergreen's design assumed users would grant around six permissions and two integrations up front, so the AI features had what they needed from day one.

Our research said that was a mistake. Students were already uncomfortable; asking for that much access on the way in would make it worse. I recommended cutting the upfront ask to **two**, and letting the rest come later, in context.

Leadership rejected it — in the first meeting, and again in the second. Their position was principled: full transparency, showing users the entire scope of how their data *could* be used, even data that didn't legally require an explicit opt-in. My whole team was aligned behind fewer permissions. I couldn't get leadership there in time for the V1 deadline.

So in a third meeting I stopped arguing for the design change and argued for a different thing: accept the full permissions ask for the V1 testing build, but **commit to A/B testing the number of permissions** in a later version, so the long-term call would be made on real user behavior instead of either side's conviction. Leadership accepted that.

It wasn't the outcome I wanted. But it kept the question alive. Without that commitment, "how many permissions" would have quietly become "however many V1 shipped with" the moment V1 shipped.

What I'd do differently: I brought leadership a recommendation and a disagreement. I should have brought a plan — either a concrete way to satisfy their transparency concern with fewer upfront asks, or an alternative that solved what they were actually worried about.

## Settling a design fight with data instead of taste

The team wanted to use AI-generated images across the app. We'd found an art style online we liked and didn't have the resources or skill to recreate by hand; AI felt like the way to get there. Once we saw the actual generated results, the team felt uneasy about them — but nobody fully trusted that gut reaction either.

So we tested it. A survey to 50 Dartmouth students: real student photos versus the AI-generated images. **Two** students preferred the AI version. Everyone else strongly preferred real photos — and told us the real photos felt more *ethical*, not just better-looking.

That surprised me. I expected students to weigh in on aesthetics. They cared at least as much about the ethics and the resource cost of generating the images in the first place. We went with real student photos.

The lesson stuck: with a creative tool, "how you made it" can matter to users as much as what you made. That belongs in the process from the start, not just in a test of the output.

## Holding the line on scope

Two more, briefly, both about protecting a crunch:

- **The event-suggestion feature.** Partners wanted Evergreen to recommend campus events to students. Before the team spent time on it, I flagged two risks to leadership: the assumptions the recommendations would rest on, and a fairness problem — no student org should get systematically less visibility than another. There wasn't time to build it responsibly for V1, so it didn't ship. Leadership later shipped a much simpler version that sidestepped both risks.
- **Feature creep from partners.** During the V1 push, partners kept adding requests. My team could technically have built them; doing it under that time pressure would have produced weak work and burned people out. I held the line and proposed a rule: new features get picked up when the development team is ready for them, not because they've been added to a list. The boundary held — partners came back with the same asks later and didn't push when I gave the same answer.

## The outcome

Evergreen went into its first testing phase with a group of about 15 Dartmouth students. The onboarding flow was rebuilt from the partner spec after testing showed polish alone couldn't fix a flow that was too long and hard to move through. The real-photo decision held. The permissions A/B commitment was locked in — though as of my last work on it, the test hadn't run yet, so I can't tell you what it found.

## Where it stands now

The scope grew. As of this fall I'm the PM for all of Evergreen — design *and* development — and the research group testing it has grown from about 15 students to around 200. Evergreen is backed by $5M in Dartmouth research grant funding, so the decisions here carry real weight.

The work has also moved deeper into the AI itself. Three things are on my plate right now:

- **Tool calling for Evie**, Evergreen's AI. Deciding what Evie can do on a student's behalf, which tools come first, and what it should never be allowed to call on its own in a wellness context.
- **How Evie remembers.** What it keeps, for how long, what it deliberately forgets, and how a student can see, correct, or delete what it knows about them. This is the permissions question again, one layer down.
- **An onboarding friction audit.** Onboarding is where students are dropping off. I'm finding out exactly where and why before anyone redesigns it.

Two numbers already moved. The upfront permissions ask, the one leadership rejected twice in V1, is now down from **8 to 2**: six permissions and two integrations on the way in became two, with the rest asked for later, in context. And onboarding went from **80 questions to 30**, split across 4 shorter modules instead of one long wall, because a student who quits on question 40 never meets Evie at all.

I'll keep updating this page as the tool-calling and memory work lands.

## What this revealed about how I think

Every real decision here was made without the authority to just make it. What moved leadership on permissions wasn't a better argument, it was a testable compromise. What settled the image debate wasn't seniority, it was 50 survey responses. What fixed my team structure was listening to the people in it.

The pattern I'd take anywhere: when you can't win the decision, win a way to *learn* the decision. And come to the room with a plan, not just a concern.
