# Calendar TRAX

## Project context
**What this repo is:** Zero-dependency time-tracking dashboard powered by Google Calendar. Add `#hashtag` to event titles to categorize time.
**Stack:** Vanilla HTML + JS, no build step. Reads Google Calendar API directly from the browser.
**Deploys to:** Cloudflare Pages (root directory, no build command).
**Run locally:** `python3 -m http.server` from the project root, then open `http://localhost:8000`.

> Note: This app uses URL params (`?key=…&cal=…`) for the API key and Calendar ID, not env vars — that's why there's no `.env.example`.

## Working Style
- Short instructions are the norm — ask clarifying questions before diving in
- Responses: short and direct

## Memory
This repo has a MEMORY.md at the root. Read it at session start.

**Proactively propose memory updates.** When something memory-worthy comes up, suggest the entry and wait for approval before writing. Examples of memory-worthy moments:
- A correction or preference Timm states ("don't do X", "always Y")
- A non-obvious decision with a reason worth preserving
- A workaround for a quirk that future-you would otherwise hit again
- A surprising fact about the project, stack, or external system
- Confirmation that a non-obvious approach worked

**Don't propose for:**
- Routine implementation details (visible in the code/git history)
- Ephemeral task state (belongs in the quick log, not MEMORY)
- Anything already captured

**Format of a proposal:**
> Memory candidate: "<one-line entry>". Save it?

Only write to MEMORY.md after Timm says yes. If the proposed entry conflicts with an existing memory, flag the conflict and ask how to reconcile.

## Git sync (local + cloud)

This repo is worked on in two places: locally on Timm's Mac and in Claude Code on the web. GitHub is the source of truth (`timpreneur/calendar-trax`).

- **At session start:** run `git pull` on the current branch before making any changes.
- **At session end:** commit any work-in-progress and run `git push` so the other environment sees it.
- **Never edit the same branch in both places at once.** If unsure which side has the latest, run `git fetch && git status` and reconcile before editing.

## CLAUDE.md & MEMORY.md hygiene
If you notice an instruction or memory entry that's stale (references a file/tool/decision that no longer matches reality), flag it: "Possible stale entry: <line>. Reason: <observation>. Update or remove?" Don't edit unilaterally.
