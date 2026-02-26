---
title: "Which Way the Wind Blows"
date: "2026-02-26"
excerpt: "We used to think out-of-the-box. Now we're defining what the box is."
---

## AI feels destabilizing

The compounding effect of technical advancement and product exploration is bearing fruit: [ChatGPT](https://chatgpt.com), [Claude Code](https://code.claude.com/docs/en/overview) / [Codex](https://openai.com/codex/), [OpenClaw](https://openclaw.ai), and the open-source ecosystem are pushing AI adoption beyond research and niche use into everyday workflows. This process is ongoing, and active usage, combined with economic pressure and continuous research, is shaping where it goes next.

Engineers are now experiencing what [professional writers felt](https://www.newyorker.com/magazine/2019/10/14/can-a-machine-learn-to-write-for-the-new-yorker) during the first wave of generative models – a sudden compression of skill premiums and a step into the unknown. In hindsight, it was inevitable. Code, while sharing the same modality as text, has a crucial additional property: it can be executed. Software has been [“eating the world”](https://a16z.com/why-software-is-eating-the-world/) for decades, hence the impact propagates strongly across the stack.  

In this note, I’ll share my observations with some strong opinions on how this might unfold within the software engineering industry. The goal is to offer a framing and some reassurance for those who feel like it’s the end of the world.

## This shift is inevitable

LLMs entered the world as powerful black boxes with no instructions included. Early adopters experimented with prompt engineering almost heuristically — [repeating](https://arxiv.org/abs/2512.14982) the same phrases, [bribing](https://medium.com/@jordan_gibbs/a-comprehensive-guide-to-bribing-chatgpt-cfbefefc49a0) the model, or even [threatening](https://www.theregister.com/2025/05/28/google_brin_suggests_threatening_ai/) it — to blindly navigate a multidimensional space of learned priors. In that sense, LLMs are ideal exploration engines.

Over time, we started bringing structure: [chain-of-thought](https://arxiv.org/abs/2201.11903) prompting, [reasoning](https://openai.com/o1/) models, and [agentic](https://arxiv.org/pdf/2210.03629) loops are the result of active experimentation aimed at improving exploration effectiveness.

However, exploration alone is neither enough nor sustainable. Eventually, we seek determinism. We [constrain prompts](https://arxiv.org/abs/2407.16216), [formalize interfaces](https://modelcontextprotocol.io/docs/getting-started/intro), [construct evaluations](https://newsletter.pragmaticengineer.com/p/evals), and define invariants for given systems. From a systems perspective, the goal is to find an equilibrium between probabilistic exploration and reliable deterministic behaviour to achieve the best utilisation of the allocated resources.

## Profession Drift

Until recently, writing code was among [the highest-leverage activities](https://en.wikipedia.org/wiki/The_Mythical_Man-Month): planning, executing, and deploying were costly in both time and money. It hasn't been solved yet, however, there is a [clear trend](https://blog.cloudflare.com/vinext/) toward the era of "disposable" software where, at some point, given business needs, it may become cheaper to rewrite a solution than to maintain one. Software engineers might find this oddly satisfying since we tend to rewrite things from scratch. The implication is that the profession's transformation is already underway. 

I want to focus on two specific roles, though others can be extrapolated in similar fashion, and suggest how they are drifting in an AI-native world:

**Production Engineering** evolves into **Execution Environment Engineering** within familiar domains of reliability and scalability. On one side, this includes LLM infrastructure observability: traces for auditing probabilistic behaviour, tool permission boundaries, and prompt control. On the other, it expands into cost governance, routing strategies, and latency tracking.

**Software Engineer** evolves into **Harness Engineering**, shifting the focus from implementation to the problem space itself. This includes defining system invariants, formalizing boundaries between deterministic and probabilistic components through contracts, building guardrails with enforceable constraints, and constructing feedback loops for self-reinforcement within an execution environment deliberately crafted for the problem at hand.

## Exploration vs Exploitation

I believe it is helpful to view this transition under the lens of the [explore-exploit dilemma](https://en.wikipedia.org/wiki/Exploration–exploitation_dilemma). LLMs are exceptional exploration engines, and we are steadily improving how effectively we use them. Still, products cannot remain in exploration mode indefinitely, and, once patterns emerge, value drifts to exploitation — constraining behaviours into deterministic systems to achieve reliability and control over discovered trajectories. 

In AI-native systems, both strategies must coexist, hence successful systems will separate the exploratory layer from the deterministic one, and maintain strict control over the boundary between them.

The lifecycle might look like this:

#### Stage 1 — Agentic Bootstrap
Whether it is an [email agent](https://www.fyxer.com), a [coding agent](https://github.com/features/copilot) gluing APIs together, or [computer-use agent](https://openai.com/index/computer-using-agent/) (CUA) ordering groceries on your behalf: it's an exploration-heavy stage with lightweight constraints and no pressure on reliability nor efficiency.

Models orchestrate tools, generate intermediate reasoning, and operate in flexible loops to set up the data flywheel for usage data collection to harden the system further. 

#### Stage 2 — Distillation
As patterns repeat, successful trajectories are extracted and encoded into deterministic flows. Prompts lower to contracts. Heuristics transform into invariants. Guardrails and evaluation pipelines formalize expectations. 

Taking the CUA example: instead of repeatedly running an expensive loop against a retailer's website, one might build a bespoke executable solution for ordering. This will **reduce cost and latency** of the solution **while sacrificing coverage** with reproducibility and reliability in return.

#### Stage 3 — Controlled Agency
Distillation is rarely final: edge cases emerge, downstream dependencies change, and requirements evolve. 

Agents will remain inside a hardened execution environment to handle ambiguity, self-heal, and, even, explore new solutions once the current system hits its limits. Which reflects a natural tendency to move **from generalist into specialist** over time.  

## What's Next? 

In an agentic economy, we may begin to treat agents similarly to [people](https://arxiv.org/abs/2406.20094): deploy them to solve a problem, extract the learnings, harden the system, and move them to the next frontier. Ideally, neither humans nor agents should remain trapped in repetitive tasks once they can be formalised and automated.

This won't eliminate engineering, but add yet another abstraction layer to climb. Also, transition itself won't happen overnight: compute is expensive, model access is uneven, AI adoption is [still early](https://www.anthropic.com/research/anthropic-economic-index-january-2026-report). 

Being at the edge is uncomfortable. Weekly releases of [new products](https://www.kimi.com/bot) and [models](https://blog.google/innovation-and-ai/technology/ai/nano-banana-2/) from top labs and companies around the world make it very competitive and thrilling to follow, but also exhausting and depressing. The best way I have found for myself to fight frustration is to reduce noise and to use tools directly.   

We used to [think out-of-the-box](https://en.wikipedia.org/wiki/Thinking_outside_the_box). Now we're defining what the box is.