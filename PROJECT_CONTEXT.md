# 🧭 Project Context — PayYourSubs

A micro-SaaS built under **Code of Gondor Ltd** for managing club and team subscriptions.

---

## 🚀 Product Summary

**PayYourSubs** helps clubs, teams, and community groups collect recurring membership fees online and manage their members efficiently.

**Audience:** Amateur sports clubs, youth teams, and community associations.

**Core Goals:**
- Automate recurring payments through Stripe.
- Track active members and overdue payments.
- Provide simple dashboards for club admins.
- Support multiple clubs under one parent account.
- Reduce admin time for volunteer-led organizations.

---

## ⚙️ Tech Stack

| Layer | Technology | Purpose |
|-------|-------------|----------|
| **Frontend** | Next.js 14 (App Router) | Framework for UI & routing |
| **Styling** | Tailwind CSS | Utility-first styling for responsive design |
| **Auth / Data** | Firebase (Auth + Firestore) | Secure user authentication & club data |
| **Payments** | Stripe Subscriptions API | Handles recurring membership billing |
| **Deployment** | Vercel | Hosting & CI/CD with custom domains |
| **Version Control** | GitHub (`pookymac/payyoursubs`) | Source control for codebase |

**Domains:**
- `https://payyoursubs.com` → Marketing site
- `https://app.payyoursubs.com` → Web app dashboard

---

## 🧩 Folder Structure

# 🧭 Project Context — PayYourSubs

A micro-SaaS built under **Code of Gondor Ltd** for managing club and team subscriptions.

---

## 🚀 Product Summary

**PayYourSubs** helps clubs, teams, and community groups collect recurring membership fees online and manage their members efficiently.

**Audience:** Amateur sports clubs, youth teams, and community associations.

**Core Goals:**
- Automate recurring payments through Stripe.
- Track active members and overdue payments.
- Provide simple dashboards for club admins.
- Support multiple clubs under one parent account.
- Reduce admin time for volunteer-led organizations.

---

## ⚙️ Tech Stack

| Layer | Technology | Purpose |
|-------|-------------|----------|
| **Frontend** | Next.js 14 (App Router) | Framework for UI & routing |
| **Styling** | Tailwind CSS | Utility-first styling for responsive design |
| **Auth / Data** | Firebase (Auth + Firestore) | Secure user authentication & club data |
| **Payments** | Stripe Subscriptions API | Handles recurring membership billing |
| **Deployment** | Vercel | Hosting & CI/CD with custom domains |
| **Version Control** | GitHub (`pookymac/payyoursubs`) | Source control for codebase |

**Domains:**
- `https://payyoursubs.com` → Marketing site
- `https://app.payyoursubs.com` → Web app dashboard

---

## 🧩 Folder Structure

/app
/app → Main SaaS dashboard (logged-in area)
/auth → Login and signup pages
/components → Reusable UI components
/api → Serverless API routes (Next.js functions)
/public → Static assets (icons, logos, images)


---

## 🤖 AI Collaboration Guide

### ChatGPT (External AI)
Use ChatGPT for:
- Designing and planning new features.
- Generating full code examples or architecture patterns.
- Debugging complex logic or architecture issues.
- Writing documentation, onboarding notes, or product copy.
- Reviewing pull requests or live deployment issues.

### Copilot Chat (VS Code Integrated)
Use Copilot Chat for:
- Editing code inside your local project with file context.
- Making targeted improvements or bug fixes.
- Adding error handling, UI tweaks, or refactors.
- Maintaining naming conventions and structure.
- Reading this file (`PROJECT_CONTEXT.md`) to understand the project.

---

## 🔄 Workflow

1. **Plan** new features or logic with ChatGPT.  
2. **Copy generated code** into VS Code.  
3. **Ask Copilot Chat** to integrate or modify files based on this context.  
4. **Test locally:**  
   ```bash
   npm run dev

