---
title:       "Shipping Lume in my spare time with AI agents"
date:        "2026-10-16"
author:      "Henrique Pacheco"
description: "How I built and shipped Lume for Mac and iPhone in my evenings, by directing AI agents through an agent orchestrator I built."
category:    "Tech"
featured:    true
image:       "../../assets/posts/lume-dashboard.webp"
---

It's been a long time since I last wrote here. In the meantime I built something I want to talk about: **Lume**, a net worth and financial independence (FIRE) tracker for Mac and iPhone. It reads your own bank and broker statements on your device and works out each month from them, so every figure shows where it came from. There's no bank login and nothing is fetched on your behalf. You can find it at <a href="https://lume-app.dev/" target="_blank" rel="noopener noreferrer">lume-app.dev ↗</a>.

I built and shipped it on my own, in my evenings, by directing AI agents. Not in the "type a prompt and get an app" sense. This post is about how that actually worked, what I kept for myself, what changed along the way and what it cost.

## What Lume does

The idea is simple. Once a month you do a close: you import your statements, categorise the lines, type in what no statement shows, and confirm. From that, Lume works out where you stand and how far you are from financial independence. One purchase covers both the Mac and the iPhone, and sync between them is optional and end-to-end encrypted.

Under the hood it's one codebase in React and TypeScript inside Tauri 2, with a thin Rust layer for macOS and iOS. Sync goes through Supabase, but everything is encrypted on the device first (Argon2id and AES-GCM), so the server only holds data it can't read. For an app that deals with your money, that felt like the only acceptable option.

## How I build it

The agents don't run on their own. They run through **an agent orchestrator I built**: a pipeline that takes items from a backlog and moves each one through the same steps. An agent plans the change, another implements it, then it's tested, checked in a browser and reviewed before it can be merged.

So the agents plan, implement, test, check the result and review each change. What I keep for myself is the part I think matters most:

* **Deciding what to build.** The backlog is mine. The agents don't choose what Lume should become.
* **Design.** How a screen looks and how a flow feels is my call.
* **Reviewing the result.** Every change comes back to me before it goes in, and I can send it back.
* **Releasing.** Nothing reaches the App Store unless I put it there.

This split is what makes it work for me. The agents are very good at carrying a well-described change from start to finish. They are not the ones who should decide whether that change is worth making. When I get that part right, the rest of the pipeline mostly does its job. When I get it wrong, the orchestrator just helps me build the wrong thing faster.

## The timeline

The first commit was in May 2026. Lume 1.0 went live on the Mac App Store in early June, and 1.1 followed later that month with multi-currency support and fixes.

Then came a quiet summer. Between the Mac launch and September, very little happened.

September is where most of the story is. In a few weeks:

* **1.2.0 (9 Sep)** added sync, a recovery code and account deletion, with 1.3.x following between the 11th and the 13th.
* **1.4.0 (14 Sep)** was the first iPhone release.
* **1.5.0 (17 Sep)** brought storage and sync v2, plus statement and broker imports.
* **2.0.0 (19 Sep)** went live with a new approach: statements first.
* **2.0.1** fixed a crash when opening files on the Mac.
* **2.1** added liabilities: loans, mortgages and credit cards.

Looking at that list now, it's a lot of releases for a short stretch of evenings. That pace is only possible because each step was small and the agents could carry most of it while I wasn't at the keyboard.

## Changing the model right after launch

The biggest change in that run was 2.0. Up to then, Lume worked on balances you typed in by hand: each month you'd enter what each account held. In 2.0, you import statements instead, and the numbers come from them.

This wasn't a fix for something that broke. It was a deliberate change of approach. Statements-first is a more powerful way to store the data: it keeps the source of every number and gives a lot more flexibility for what Lume can do later. Once I saw that, the question was only when to do it, and the answer was sooner rather than later. The app had just launched, and it would only get harder to change the foundation with every release built on top of the old one.

It wasn't free. Sync had just shipped, and it had been built around balances. Moving to statements meant rethinking sync around statements too, which is a big part of why storage and sync v2 landed in 1.5.0, just before 2.0. Changing your storage model right after launch is not the textbook move, but I'm glad I did it while the app was still small.

## App Review said no

On 24 September, Apple rejected the 2.2.0 submission. The reason was a crash, and the annoying part was that it only happened on a real device.

The pipeline checked what it was set up to check, and a real device wasn't part of it. So I changed the rule: from then on, **every build is tested on a real device before any submission**: a real iPhone, and a sandboxed Mac through TestFlight. It's a bit more work on my side for each release, but it closes exactly the gap that let that crash through.

## What it cost

Lume was built in evenings only. That's the honest answer, and it shaped how the work was done more than anything else.

When you only have evenings, and you're a father of 2, you can't hold a big change in your head for days. So the work has to be cut into small, reviewable steps: something that can be described clearly, built and checked while I'm away, and reviewed when I'm back. That's exactly the kind of work the orchestrator is good at. A typical evening for me is deciding what's next, reviewing what came back and sending the next items on their way.

It also means I spend most of my time on the parts I said I keep: the product, the design, the review and the release. That turned out to be a good trade.

## Shipping was the easy part

I shipped a Mac and iPhone app on my own, in my evenings. It turned out that was the easy part.

The hard part is getting it found. Right now almost nobody finds Lume, and a well-built app that nobody knows about doesn't help anyone. So that's the work now: getting Lume found through organic search, one page and one post at a time.

If you track your net worth or you're working towards financial independence, I'd love for you to give it a try at <a href="https://lume-app.dev/" target="_blank" rel="noopener noreferrer">lume-app.dev ↗</a>. See you next time!
