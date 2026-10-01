import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { CATEGORIES, SUBMISSION_TYPES, PURPOSES } from './categories.mjs';

const categories = Object.keys(CATEGORIES) as [string, ...string[]];

// Extra fields used by case-study / testbed entries (files in src/content/docs/entries/).
// All optional here so ordinary pages (home, contribute, ...) are not affected;
// if an entry sets `category`, every entry rule below is enforced.
const entryFields = z.object({
  authors: z
    .array(z.object({ name: z.string().min(1), affiliation: z.string().min(1), emi_member: z.boolean().optional() }))
    .optional(),
  eyebrow: z.string().optional(), // small label above the title on ordinary pages
  figure: z.string().optional(),
  date_added: z.coerce.date().optional(),
  category: z.enum(categories).optional(),
  subcategory: z.string().optional(),
  asset_scale: z.string().optional(),
  submission_type: z.array(z.enum(SUBMISSION_TYPES as [string, ...string[]])).optional(),
  application_purpose: z.array(z.enum(PURPOSES as [string, ...string[]])).optional(),
  hazards: z.array(z.string()).optional(),
  time_horizon: z.string().optional(),
  keywords: z.array(z.string()).optional(),
  dataset_links: z.array(z.string()).optional(),
  citation: z.array(z.string()).optional(),
});

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: entryFields.superRefine((d, ctx) => {
        if (!d.category) return;
        const need = (cond: unknown, path: string, msg: string) => {
          if (!cond) ctx.addIssue({ code: 'custom', path: [path], message: msg });
        };
        need(d.authors?.length, 'authors', 'List at least one author.');
        need(
          d.authors?.some((a) => a.emi_member === true),
          'authors',
          'At least one author must be an EMI / ORC member (set emi_member: true).',
        );
        need(d.figure?.trim(), 'figure', 'A figure of the system or of the results is required (path such as /images/your-file-name/figure.png).');
        need(d.date_added, 'date_added', 'Required: submission date as YYYY-MM-DD.');
        need(
          d.subcategory && CATEGORIES[d.category as keyof typeof CATEGORIES].includes(d.subcategory),
          'subcategory',
          `Must be one of: ${CATEGORIES[d.category as keyof typeof CATEGORIES].join(' | ')}`,
        );
        if (d.category.startsWith('1')) {
          need(
            d.asset_scale === 'Single asset' || d.asset_scale === 'Portfolio',
            'asset_scale',
            'Category 1 requires "Single asset" or "Portfolio".',
          );
        }
        need(d.submission_type?.length, 'submission_type', 'Choose "Case Study" and/or "Benchmark Problem".');
        need(d.application_purpose?.length, 'application_purpose', 'Choose at least one purpose.');
        need(d.hazards?.length, 'hazards', 'List at least one hazard.');
        need(d.time_horizon, 'time_horizon', 'Required (write "N/A" if it does not apply).');
        need(d.keywords?.length, 'keywords', 'Provide 3-6 keywords.');
        need(d.dataset_links?.some((l) => l.trim()), 'dataset_links', 'Give a link, or describe what can be shared.');
      }),
    }),
  }),
};
