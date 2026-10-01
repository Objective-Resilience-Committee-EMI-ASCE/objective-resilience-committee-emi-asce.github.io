import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { buildSidebar } from './sidebar.mjs';

const ORG = 'Objective-Resilience-Committee-EMI-ASCE';
const REPO = `${ORG.toLowerCase()}.github.io`;

export default defineConfig({
  site: `https://${REPO}`,
  integrations: [
    starlight({
      title: 'Objective Resilience Committee',
      description:
        'Case studies and benchmark problems for objective resilience, from the ASCE Engineering Mechanics Institute.',
      favicon: '/orc-icon.svg',
      head: [
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' } },
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;700;800&display=swap',
          },
        },
      ],
      customCss: ['./src/styles/custom.css'],
      components: {
        PageTitle: './src/components/PageTitle.astro',
        Footer: './src/components/Footer.astro',
      },
      routeMiddleware: './src/routeData.ts',
      sidebar: buildSidebar(),
    }),
  ],
});
