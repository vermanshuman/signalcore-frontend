# SignalCore — API-First Intelligence Platform

SignalCore is a production-grade, API-first intelligence platform for **structured error analysis** and **task-bounded AI agents**.

This repository is a **freelance / portfolio showcase**, designed to look and behave like a real internal tool — not a toy SaaS.

---

## What This Demo Shows

### 1. Error Explanation API
A deterministic API that converts raw error logs into structured diagnostics.

**Output includes**
- Summary
- Diagnosis
- Checks to perform
- Fix suggestions
- Confidence score

No chat. No hallucinations. Structured output only.

---

### 2. Incident Investigator Agent (AI Agent Demo)

A **single, task-bounded AI agent** that demonstrates real agent orchestration.

**Agent behavior**
1. Classifies the error
2. Calls internal error-explanation tool
3. Synthesizes an incident report
4. Assigns fix priority and agent score

**Agent output**
- Root cause
- Contributing factors
- What to check next
- Fix priority (P0 / P1)
- Confidence
- Agent execution trace

This is **not** a chatbot and **not** open-ended AI.

---

## Architecture

### Frontend
- React + Vite
- HashRouter (GitHub Pages compatible)
- No API keys exposed
- Structured card-based UI
- One-click execution

### Backend
- FastAPI
- API proxy pattern
- Secure server-side API key usage
- Demo-only rate limiting (5/day)
- Explicit AI agent execution logs

---

## Why This Matters

This demo intentionally avoids:
- Chat UIs
- Autonomous agents
- Over-engineering
- Fake AI claims

Instead, it demonstrates how **AI agents are actually built in production**:
- Deterministic
- Tool-driven
- Bounded
- Observable
- Auditable

---

## Running Locally

### Backend
```bash
uvicorn app.main:app --reload
