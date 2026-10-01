// Single source of truth for the category / subcategory lists.
// Used by the content schema (validation) and by the sidebar.
export const CATEGORIES = {
  '1 - Independent systems': [
    'Building',
    'Bridge',
    'Industrial facility',
    'Critical facility',
    'Other',
  ],
  '2 - Networked and interdependent systems': [
    'Utility system (power, water, gas, telecom)',
    'Transportation network (single- or multi-modal)',
    'Cross-sector interdependent lifelines',
  ],
  '3 - Socio-technical resilience': [
    'Human-centered resilience of individual facilities',
    'Community-scale resilience',
    'Network and interdependent socio-technical systems',
  ],
};

// Short names + colors used on the home-page cards.
export const CATEGORY_STYLE = {
  '1 - Independent systems': { short: 'Independent systems', color: '#0b7a75' },
  '2 - Networked and interdependent systems': { short: 'Networked systems', color: '#c2570c' },
  '3 - Socio-technical resilience': { short: 'Socio-technical', color: '#7b3fb0' },
};

export const SUBMISSION_TYPES = ['Case Study', 'Benchmark Problem'];

export const PURPOSES = [
  'Assessment',
  'Intervention Strategy Design',
  'Policy / Decision Evaluation',
];
