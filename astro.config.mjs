// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages project sites are served from /<repo>/ — derive that from the
// env var Actions sets, so no repo name needs to be hardcoded here.
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1];
const base = repo && !repo.endsWith('.github.io') ? `/${repo}/` : '/';

// https://astro.build/config
export default defineConfig({ base });
