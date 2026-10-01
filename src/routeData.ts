import { defineRouteMiddleware } from '@astrojs/starlight/route-data';

// Adds a "Citation" item to the right-hand "On this page" list of entries that have citations.
export const onRequest = defineRouteMiddleware((context) => {
  const { starlightRoute } = context.locals;
  const { entry, toc } = starlightRoute;
  const hasCitation = (entry.data.citation ?? []).some((c: string) => c.trim());
  if (entry.data.category && hasCitation && toc) {
    toc.items.push({ depth: 2, slug: 'citation', text: 'Citation', children: [] });
  }
});
