import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap'
import mdx from '@astrojs/mdx'

export default defineConfig({
    // projectRoot: '.',     // Where to resolve all URLs relative to. Useful if you have a monorepo project.
    // pages: './src/pages', // Path to Astro components, pages, and data
    // dist: './dist',       // When running `astro build`, path to final static output
    // public: './public',   // A folder of static files Astro will copy to the root. Useful for favicons, images, and other files that don’t need processing.
    site: 'https://richardthe.dev',
    integrations: [sitemap(), react(), mdx({
        extendMarkdownConfig: false,
        smartypants: true,
        gfm: true
    })],
    output: 'static'
});
