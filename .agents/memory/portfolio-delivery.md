---
name: Portfolio delivery
description: Preserve deployment and contact-form behavior when changing the portfolio.
---

Keep the public portfolio as static HTML, CSS, and JavaScript unless the user explicitly asks to migrate it.

**Why:** the site is hosted on GitHub Pages, so adding a framework or backend would add deployment risk without being needed for the requested redesign.

**How to apply:** redesign the existing static files, preserve the current contact-form flow, and make changes on a reviewable branch rather than editing the live default branch.
