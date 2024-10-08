import { defineConfig } from 'astro/config';
import { remarkModifiedTime } from './remark-modified-time.mjs';

// https://astro.build/config
export default defineConfig({
    site: 'https://sxxb.github.io',
    base: '/nightingale-bowden-portal/',
    markdown: {
        remarkPlugins: [remarkModifiedTime],
    }
});
