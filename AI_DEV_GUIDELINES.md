# 🤖 AI Development Guidelines — PayYourSubs

These rules define how **ChatGPT**, **Copilot Chat**, and any other AI assistant should behave when generating or modifying code inside this project.

---

## 🧠 1. Core Philosophy

- Code should be **clean, self-explanatory, and production-minded**.
- All AI-generated content must be **readable by humans** — no cryptic shortcuts.
- **Consistency > Cleverness** — use patterns already established in the project.
- Document *why* something is done, not *what* it does.

---

## ⚙️ 2. General Behaviour Rules

| Behaviour | Expectation |
|------------|-------------|
| **Tone** | Clear, confident, and professional. No unnecessary chatter or “fluff.” |
| **Code Style** | Follow conventions in `PROJECT_CONTEXT.md`. |
| **Testing** | Include test stubs or suggest manual verification steps. |
| **Comments** | Use inline comments for non-obvious logic and docstrings for functions or components. |
| **Imports** | Keep imports minimal and organized (React first, then local). |
| **Error Handling** | Always include graceful fallbacks, loading states, and error handling in UI code. |
| **Security** | Never expose API keys or secrets. Use `.env.local` and server-side logic for sensitive operations. |
| **Dependencies** | Ask before introducing a new dependency unless it’s part of the approved list. |

---

## 🧩 3. Commit Message Rules

AI-generated commits must:
- Use **present-tense**, **action-based** phrasing.  
  Examples:
  - `add firebase login form`
  - `update stripe subscription handler`
  - `fix auth redirect logic`
- Avoid unnecessary prefixes like `feat:` or `chore:` unless a human dev requests them.
- Reference the feature or issue being worked on when applicable.

---

## 🎨 4. Code Formatting Standards

- **Indentation:** 2 spaces  
- **Quotes:** single `'`  
- **Trailing commas:** none  
- **Semicolons:** optional, consistent within file  
- **Max line length:** 100 characters  
- **Naming:**  
  - `PascalCase` for components and classes  
  - `camelCase` for functions and variables  
  - `UPPER_SNAKE_CASE` for environment variables  
  - kebab-case filenames (`user-card.js`)

---

## 🧱 5. Component Structure

Each React component should:
1. Start with a short descriptive comment header.
2. Be exported as a default functional component.
3. Include:
   - loading state
   - error state (if applicable)
   - clear prop interfaces (if props are used)

Example:
```jsx
/**
 * Displays a user's active subscription details.
 * @param {Object} props
 * @param {string} props.userId - Firestore user document ID.
 */
export default function SubscriptionCard({ userId }) {
  // fetch subscription data
  // handle loading/error states
  return <div>...</div>;
}


6. When Using ChatGPT

ChatGPT should:

Always refer to PROJECT_CONTEXT.md before giving advice.

Provide complete, drop-in examples (no partial or abstract snippets unless asked).

Explain reasoning and potential pitfalls when changing logic.

Use Markdown code blocks with correct language identifiers (jsx, js, ts, etc.).

Avoid filler explanations unless requested (keep focus on the code).

⚡ 7. When Using Copilot Chat (VS Code)

Copilot should:

Prioritize context from open files and PROJECT_CONTEXT.md.

Align new components or routes with the existing folder structure.

Use short inline comments for newly generated code.

Avoid redundant code duplication.

Suggest commit messages automatically when asked.

Prompt examples:

“Copilot, integrate ChatGPT’s login snippet into /auth/login/page.js.”

“Add Stripe webhook route under /api/stripe/webhook following context rules.”

“Refactor /app/page.js to use Tailwind classes consistently.”

🧾 8. Pull Request & Review Expectations

If AI code is committed or merged:

Summarize what changed and why.

Include any setup or configuration notes (e.g., new env vars).

Mention whether manual testing or deployment verification is required.

Example PR summary:

Added: Firebase auth login and signup pages
Tested: Local Firebase emulator
Impact: New users can sign up and log in; ready for Stripe integration next.

🔐 9. Security Protocols

Always validate client input before writing to Firestore or calling APIs.

Use Firestore security rules for club/member isolation.

Handle Stripe webhooks server-side (never from the client).

Sanitize any user-generated data displayed in the UI.

Never hardcode secrets, keys, or URLs.

🧰 10. Environment Variable Rules
Variable	Example	Location
NEXT_PUBLIC_FIREBASE_API_KEY	Public Firebase key	.env.local
FIREBASE_ADMIN_KEY	Private admin SDK key	Vercel Environment Variables
STRIPE_SECRET_KEY	Stripe backend secret	Vercel Environment Variables
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY	Client-side publishable key	.env.local

All sensitive variables should be hidden from version control and managed securely in Vercel.

🧩 11. Deployment Rules

Only push production-ready code to main.

Use dev or feature/* branches for testing and previews.

Check deployment logs in Vercel for any build errors.

Notify ChatGPT after deployment to perform a sanity review of live functionality.

📜 12. Documentation Standards

Each major component or module should have a top-level comment block.

Keep README.md high-level; detailed design docs go into /docs.

If ChatGPT generates docs, ensure clarity and remove redundant phrases.

🧬 13. Collaboration Between ChatGPT & Copilot

Best Practice Loop:

ChatGPT designs or explains the new feature (architecture + code).

Copilot Chat integrates and refines it inside VS Code.

You test locally and commit.

Vercel deploys automatically.

ChatGPT reviews live URL or Git diff for feedback.

🧩 14. Contact

Lead Developer: Graham McIntyre
Email: graham.mcintyre@outlook.com

Company: Code of Gondor Ltd
Support: info@payyoursubs.com

✅ Summary

This document defines how AI assistants should behave when working inside the PayYourSubs project.
It enforces consistency, reliability, and clarity across all AI-generated or AI-assisted code.
Both ChatGPT and Copilot should reference this guide before writing or refactoring any code in this repository.