import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
    site: "https://daemonlayer.com",
    integrations: [tailwind(), mdx(), icon(), sitemap()],
    experimental: {
        csp: {
            directives: {
                "default-src": ["'self'"],
                "script-src": [
                    "'self'",
                    "nonce", // allow Astro to inject nonces
                    "https://sibforms.com",
                    "https://api.mapbox.com"
                ],
                "style-src": [
                    "'self'",
                    "nonce",
                    "https://fonts.googleapis.com",
                    "https://sibforms.com"
                ],
                "font-src": [
                    "'self'",
                    "https://fonts.gstatic.com"
                ],
                "img-src": [
                    "'self'",
                    "data:",
                    "https://api.mapbox.com"
                ],
                "worker-src": [
                    "'self'",
                    "blob:"
                ]
            }
        }
    }
});