---
title: "The dashboard that got smaller on purpose"
date: "May – Aug 2026"
excerpt: "I spent my EchoStar internship turning manual spreadsheet analysis into a self-serve product dashboard. Almost every decision that shaped it (the platform, the scope, the feature I killed) came from a constraint, not a wishlist."
tags: ["Prioritization", "Data & Analytics", "Stakeholder Management"]
readTime: "1 min skim"
subtitle: "Data product · Prioritization under constraint · Killing my own feature"
order: 2
cardImage: "/work/echostar/card-preview.webp"
cardImageAlt: "Recreated dashboard with synthetic data: Device Sales page with four headline numbers"
org: "EchoStar"
role: "Product Commercialization Intern"
team: "Solo build, with my manager, leadership, and a cross-functional manager as stakeholders"
methods: ["Snowflake", "Streamlit", "SQL & Python", "Gemini Gems", "Stakeholder interviews", "Usability sessions"]
outcome: "Shipped a four-page self-serve dashboard on live Snowflake data covering ~13 product launches, replacing a recurring manual spreadsheet analysis."
tldr:
  - "Picked Streamlit over Looker Studio and Tableau because it was the one tool I could actually get to the data with."
  - "Built an Executive Mode for leadership, then asked leadership. They didn't want it, so I killed it."
  - "Cut eight planned pages down to four, and only showed numbers that already had a paper trail."
fullStoryTime: "5 min"
deck: "My EchoStar internship: turning hand-built spreadsheets into a self-serve dashboard, then cutting it down to what leaders actually used."
hero:
  kind: drop
  from: 8
  to: 4
  label: "pages planned, and pages shipped. Each one had to have valid data and a leader who'd actually use it."
story:
  problem: "Product performance lived in hand-built spreadsheets. Every new question cost someone hours."
  decision: "Build a self-serve dashboard, and let the constraints decide what made the cut."
  result: "Shipped 4 pages on live data, covering about 13 launches. Smaller on purpose."
feature:
  kind: video
  src: "/work/echostar/dashboard-walkthrough"
  poster: "/work/echostar/dashboard-walkthrough-poster.jpg"
  alt: "Screen recording of a dark dashboard moving through Sales, Launch Ramp, Bring Your Own, Inventory and Customer Sentiment pages, ending on a list of call summaries."
  frame: dark
  flag: "Recreation · synthetic data"
  caption: "The real dashboard ran on internal data I can't share, so I rebuilt its structure with a fictional company and made-up numbers."
stats:
  - value: "~13"
    label: "product launches covered"
  - value: "100s"
    label: "data points I checked by hand"
  - value: "1"
    label: "feature I killed"
decisions:
  - title: "Which tool to build on"
    problem: "Looker was the obvious pick. Security rules kept it from the data."
    decision: "Went with Streamlit, the one tool that could actually reach the numbers."
    result: "I built on live data instead of waiting on access that never came."
    lesson: "For an intern, access is a design constraint."
  - title: "Executive Mode"
    problem: "I assumed leaders wanted a simple, high-level view."
    decision: "Built an Executive Mode toggle, then asked leadership what they thought."
    result: "They wanted more depth, not less. I killed it and added drill-downs to real customer calls."
    lesson: "Ask the actual executives."
  - title: "Eight pages down to four"
    problem: "I'd mapped a page for every angle: returns, pricing, financials, and more."
    decision: "A page stayed only if its data was valid and leadership actually used it."
    result: "Four made it: Sales, Bring Your Own, Inventory, and Customer Sentiment."
    lesson: "Constraints are the spec."
  - title: "Only numbers people trusted"
    problem: "A manager on another team warned me how easily numbers get misread."
    decision: "Only showed figures that already existed on older dashboards, and hand-checked hundreds."
    result: "Leaders got numbers they already trusted, just much easier to use."
    lesson: "A fast wrong number is worse than a slow right one."
quote:
  text: "His process was a masterclass in precision: hand-validating hundreds of data points to ensure long-term stability, all while grounding every decision in a sharp, value-driven business case."
  by: "Tia Kubicka · Product Leader, Boost Mobile (EchoStar)"
lesson: "The feature I'm proudest of is the one I deleted."
highlights:
  - value: "8 \u2192 4"
    label: "dashboard pages"
  - value: "~13"
    label: "launches covered"
  - value: "1"
    label: "feature I killed"
---

## It all started when...

The product team I joined at EchoStar as a Product Commercialization Intern was tracking how its consumer products performed (sales, inventory, customer sentiment) the way a lot of teams do: someone pulled data into a spreadsheet, cut it by hand, and circulated the result. Every refresh was a person-hour. Every question that didn't fit the existing cuts was a new person-hour.

My project was to replace that with a living, self-serve dashboard on top of the company's Snowflake data. The brief was open-ended. What actually determined the shape of the thing were three constraints I didn't fully see coming.


## Constraint one: I couldn't get the tools I wanted

I evaluated three ways to build it: Looker Studio, Tableau, and Streamlit.

Looker Studio was the obvious first choice, and I couldn't make it work: company security rules kept it from reaching the data, and that never changed during my internship. Tableau had its own access hurdles, and its structure was rigid for what I wanted to do.

Streamlit connected to our data directly, with far fewer hoops between me and the numbers. That one thing outweighed everything else. I built on Streamlit.

The lesson I didn't expect going in: for an intern, *access* is a design constraint. The best tool you can actually get your hands on beats the better tool you can't.

## Constraint two: I built a feature, then killed it

The dashboard was detailed on purpose, because the people using it day to day wanted depth. But I assumed senior stakeholders would want something different: a glanceable, high-level view. So I proposed and built an "Executive Mode" toggle, a light/dark-style switch between the full dashboard and a simplified one.

Then I checked the assumption. Through my manager, leadership's feedback came back: they did **not** want a simplified view. They saw the granularity as the whole point: a differentiator over what they'd had before, not a burden to hide behind an "executive" label. Separately, a manager on another team gave me a smart, direct warning about data validity and the risk of how numbers get represented, which made me cautious about any feature whose job was to *summarize*.

Between that feedback and a tight timeline, I scrapped Executive Mode entirely. It wasn't worth building or maintaining something the intended users had told me they wouldn't use.

<figure class="case-figure case-figure-wide case-figure-dark">
  <a href="/work/echostar/04-customer-calls.webp" target="_blank" rel="noopener"><img src="/work/echostar/04-customer-calls.webp" width="1600" height="1150" loading="lazy" decoding="async" alt="Customer Calls panel filtered to one device and billing calls, showing call stats and summary cards tagged by sentiment, intent and outcome." /></a>
  <figcaption>What leadership wanted instead of a summary: more depth. Click any bar on the sentiment page and the agent summaries of the matching calls appear, so leaders can read what customers actually said. (Recreation, synthetic data.)</figcaption>
</figure>


I was wrong about what "executive" meant here. I'd borrowed a generic idea (executives want less detail) instead of asking the actual executives.

## Constraint three: the scope had to come down

I started with a wide map: dedicated pages for sales, bring-your-own activations, inventory, returns, geography, sales channels, pricing, financials, customer sentiment. Basically every angle on product performance.

Narrowing that became one of the last real decisions of the project. I landed on four core pages: **sales** (is it selling), **bring your own** (which customers activate a phone they already own, and through which channels), **inventory** (is there enough of it), and **customer sentiment** (how do people feel about it). The test for making the cut was simple: the data behind it had to be valid, and it had to be something leadership actually focused on. Those four passed. The rest didn't:

- **Financials** got cut even though I was sure we'd keep it. Product financial data was sensitive enough internally that it wasn't appropriate territory for an intern project to touch.
- **Returns, geography, channels, and pricing** got cut because the data behind them wasn't solid enough to validate in time, or they weren't where leadership's attention was.

One more guardrail came out of that data-validity warning: I limited the dashboard to figures that already had precedent on legacy dashboards, just presented better. New metrics invented by an intern were exactly the kind of thing that could backfire.

<figure class="case-figure case-figure-wide case-figure-dark case-figure-pair">
  <a href="/work/echostar/01-sales-overview.webp" target="_blank" rel="noopener"><img src="/work/echostar/01-sales-overview.webp" width="1600" height="1150" loading="lazy" decoding="async" alt="Sales page with four KPI cards and a weekly sales line chart by device, with filters in a left sidebar." /></a>
  <a href="/work/echostar/03-byo-channels.webp" target="_blank" rel="noopener"><img src="/work/echostar/03-byo-channels.webp" width="1600" height="1150" loading="lazy" decoding="async" alt="Bring Your Own page with a share-by-channel line chart and a bar chart of BYO activations by channel." /></a>
  <figcaption><strong>Sales</strong> leads with four numbers leaders already trusted (last week's units, change vs the 4-week average, top movers) and re-cuts the trend by device, channel, OEM or plan. <strong>Bring your own</strong> shows where customers arrive with a phone they already own, and how that shifts month to month. Click either to enlarge. (Recreation, synthetic data.)</figcaption>
</figure>


## What shipped

A four-page Streamlit dashboard reading live from Snowflake, covering roughly 13 product launches from the first half of 2026 and data ranging from hundreds of thousands to millions of rows. It covered the parts of product performance the team looked at most, built only on numbers with an existing paper trail, and replaced a recurring manual analysis with something people could query themselves.

<figure class="case-figure case-figure-wide case-figure-dark">
  <a href="/work/echostar/02-launch-ramp.webp" target="_blank" rel="noopener"><img src="/work/echostar/02-launch-ramp.webp" width="1600" height="960" loading="lazy" decoding="async" alt="Line chart of daily units by days since launch for 13 devices, two of which spike far above the rest in the first 10 days." /></a>
  <figcaption>The launch ramp lines every device up on day 0, so the strongest launches stand out at a glance. (Recreation, synthetic data.)</figcaption>
</figure>


AI did a lot of the drafting. I wrote SQL and Python with Gemini and other AI coding tools, and built a custom Gemini Gem that turned scattered stakeholder feedback into prioritized action items. But nothing an AI drafted shipped without me checking it. I hand-validated hundreds of data points against expected results and the existing internal dashboards before handoff, because a fast wrong number is worse than a slow right one.

> "Over ten short weeks, Alex architected an enterprise-grade AI platform to measure product performance. His process was a masterclass in precision: hand-validating hundreds of data points to ensure long-term stability, all while grounding every decision in a sharp, value-driven business case."
>
> Tia Kubicka, Product Leader, Boost Mobile (EchoStar)

I can't claim adoption metrics, since my internship ended close to the handoff. What I can say is that the version that shipped was smaller, narrower, and more conservative than the one I sketched on day one, and every one of those reductions was the right call.

## What this revealed about how I think

I came in thinking the work was choosing the right things to show. The work was actually reading the constraints correctly (security rules, data sensitivity, what stakeholders would actually use, whose numbers I was allowed to trust) and letting them carve the product down to what it should have been.

The feature I'm most glad about is the one I deleted. Building Executive Mode cost me time; killing it cost me a little pride. Shipping it would have cost the team a maintenance burden for a view nobody asked for.
