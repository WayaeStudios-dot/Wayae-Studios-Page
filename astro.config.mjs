import { defineConfig } from 'astro/config';

// GitHub Pages serves from /Wayae-Studios-Page; Cloudflare serves from the root.
const onGitHubPages = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: onGitHubPages ? 'https://wayaestudios-dot.github.io' : undefined,
  base: onGitHubPages ? '/Wayae-Studios-Page' : '/',
});
