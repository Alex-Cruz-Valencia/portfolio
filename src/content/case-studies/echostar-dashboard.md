---
title: "The dashboard that got smaller on purpose"
date: "Summer 2026"
excerpt: "I spent my EchoStar internship turning manual spreadsheet analysis into a self-serve product dashboard. Almost every decision that shaped it — the platform, the scope, the feature I killed — was forced by a constraint, not a wishlist."
tags: ["Prioritization", "Data & Analytics", "Stakeholder Management"]
readTime: "6 min read"
order: 1
---

## It all started when...

The product team I joined at EchoStar as a Product Commercialization Intern was tracking how its consumer products performed — sales, inventory, returns, sentiment — the way a lot of teams do: someone pulled data into a spreadsheet, cut it by hand, and circulated the result. Every refresh was a person-hour. Every question that didn't fit the existing cuts was a new person-hour.

My project was to replace that with a living, self-serve dashboard on top of the company's Snowflake data. The brief was open-ended. What actually determined the shape of the thing were three constraints I didn't fully see coming.

## Constraint one: I couldn't get the tools I wanted

I evaluated three ways to build it: Looker Studio, Tableau, and Streamlit.

Looker Studio was the obvious first choice, and I couldn't make it work. It could not export data out of Snowflake at all under the company's IT security rules — a wall that was never resolved, even by the end of the internship. Tableau had its own gate: building on it required passing a certification test and clearing a licensing requirement before I could get access, and its structure was rigid for what I wanted to do.

Streamlit integrated natively with Snowflake. That one property — fewer security hurdles and less IT gatekeeping between me and the data — outweighed everything else. I built on Streamlit.

The lesson I didn't expect going in: for an intern, *access* is a design constraint. The best tool you can actually get your hands on beats the better tool you can't.

## Constraint two: I built a feature, then killed it

The dashboard was detailed — deliberately, because the people using it day to day wanted depth. But I assumed senior stakeholders would want something different: a glanceable, high-level view. So I proposed and built an "Executive Mode" toggle, a light/dark-style switch between the full dashboard and a simplified one.

Then I checked the assumption. Through my manager, leadership's feedback came back: they did **not** want a simplified view. They saw the granularity as the whole point — a differentiator over what they'd had before, not a burden to hide behind an "executive" label. Separately, a manager outside my reporting line gave me a blunt warning about data validity and the risk of how numbers get represented, which made me cautious about any feature whose job was to *summarize*.

Between that feedback and a tight timeline, I scrapped Executive Mode entirely. It wasn't worth building or maintaining something the intended users had told me they wouldn't use.

I was wrong about what "executive" meant here. I'd imported a generic idea — executives want less detail — instead of asking the actual executives.

## Constraint three: the scope had to come down

I started with a wide map: dedicated pages for sales, inventory, returns, geography, sales channels, pricing, financials, customer sentiment — nearly every angle on product performance.

Narrowing that became one of the last real decisions of the project. I landed on four core categories: **sales** (is it selling), **inventory** (is there enough of it), **returns** (are customers bringing devices back), and **customer sentiment** (how do people feel about it). The cuts:

- **Financials** got cut even though I was sure we'd keep it. Product financial data was sensitive enough internally that it wasn't appropriate territory for an intern project to touch.
- **Geography, channels, and pricing** got cut to data-availability gaps and the timeline.
- The **returns** page, which I'd underestimated as a minor initiative, turned out to matter most — it reflected a real strategic pivot the company was actually making.

One more guardrail came out of that data-validity warning: I limited the dashboard to figures that already had precedent on legacy dashboards, just presented better. New metrics invented by an intern were exactly the kind of thing that could backfire.

## What shipped

A four-page Streamlit dashboard reading live from Snowflake, covering the parts of product performance the team looked at most, built only on numbers with an existing paper trail. It replaced a recurring manual analysis with something people could query themselves.

I can't claim adoption metrics — the internship ended close to the handoff. What I can say is that the version that shipped was smaller, narrower, and more conservative than the one I sketched on day one, and every one of those reductions was the right call.

## What this revealed about how I think

I came in thinking the work was choosing the right things to show. The work was actually reading the constraints correctly — security rules, data sensitivity, what stakeholders would truly use, whose numbers I was allowed to trust — and letting them carve the product down to what it should have been.

The feature I'm most glad about is the one I deleted. Building Executive Mode cost me time; killing it cost me a little pride. Shipping it would have cost the team a maintenance burden for a view nobody asked for.
