// Builds the left-hand navigation from the front matter of every file in
// src/content/docs/entries/. Nothing to maintain by hand: merge an entry and it
// appears under its category > subcategory.
//   Level 1 = category (always open), Level 2 = subcategory (click to open),
//   Level 3 = the case studies / benchmark problems.
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'yaml';
import { CATEGORIES } from './src/categories.mjs';

const ENTRIES_DIR = path.resolve('src/content/docs/entries');
// Draft entries are only listed while running `npm run dev`.
const showDrafts = process.env.npm_lifecycle_event === 'dev';

function readEntries() {
  if (!fs.existsSync(ENTRIES_DIR)) return [];
  return fs
    .readdirSync(ENTRIES_DIR)
    .filter((f) => /\.mdx?$/.test(f) && !f.startsWith('_'))
    .map((f) => {
      const text = fs.readFileSync(path.join(ENTRIES_DIR, f), 'utf8').replace(/^﻿/, '');
      const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
      const data = m ? parse(m[1]) ?? {} : {};
      if (!data.category) {
        throw new Error(`entries/${f}: front matter must include "category" (see TEMPLATE.md).`);
      }
      return { slug: f.replace(/\.mdx?$/, ''), ...data };
    })
    .filter((e) => showDrafts || !e.draft);
}

export function buildSidebar() {
  const entries = readEntries();
  const categoryGroups = Object.entries(CATEGORIES).map(([category, subs]) => ({
    label: category,
    collapsed: false,
    items: subs.map((sub) => {
      const items = entries
        .filter((e) => e.category === category && e.subcategory === sub)
        .sort((a, b) => String(a.title).localeCompare(String(b.title)))
        .map((e) => ({ label: e.title, link: `/entries/${e.slug}/` }));
      return {
        label: sub,
        collapsed: true,
        items: items.length
          ? items
          : [{ label: 'No entries yet', link: '/browse/', attrs: { class: 'sidebar-empty' } }],
      };
    }),
  }));

  return [
    { label: 'Home', link: '/' },
    { label: 'Browse All Entries', link: '/browse/' },
    ...categoryGroups,
    { label: 'How to Contribute', link: '/contribute/' },
  ];
}
