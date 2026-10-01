# Objective Resilience Committee (ASCE EMI) - Case Studies & Testbeds

Source of the committee's case-study / benchmark website, built with [Astro Starlight](https://starlight.astro.build) and published with GitHub Pages at
https://objective-resilience-committee-emi-asce.github.io

## For contributors

Contributions are by invitation only (see the site's *How to Contribute* page). Invited contributors copy `TEMPLATE.md` to `src/content/docs/entries/<your-name>.md`, fill it in, and open a pull request.

## For reviewers / admins

- Each pull request runs an automatic build. If the entry is missing a field or uses a wrong category, the check fails and the message names the field.
- Review the Markdown in the pull request (*Files changed*), request edits with review comments, and merge when ready. Merging to `main` publishes the site automatically (about 2 minutes).
- Organization is automatic: an entry appears in the left panel under its `category` > `subcategory`. To move an entry, edit those two fields.
- To remove an entry, delete its file.
- Setting `draft: true` in an entry's front matter hides it from the published site.
- Invitation only: protect `main` (*Settings > Branches*: require a pull request, the build check, and an approving review). To also stop strangers from opening pull requests, use *Settings > Moderation options > Interaction limits* (limit to collaborators) and invite contributors as collaborators.
- Adding admins: *Organization > People* - invite the person and give them write access to this repository.

## Run locally

Requires [Node.js](https://nodejs.org) (LTS).

```bash
npm install
npm run dev      # live preview at http://localhost:4321 (also shows the sample drafts)
npm run build    # same check the pull requests run
```

The `sample-*.md` entries (and their figures in `public/images/`) are placeholders shown on the live site while real entries are collected. Delete them when no longer needed.

To change the category lists, edit `src/categories.mjs` and `TEMPLATE.md` together.
