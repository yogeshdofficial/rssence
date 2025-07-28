// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Roboto",
        cssVariable: "--font-roboto",
      },
      {
        provider: fontProviders.google(),
        name: "Playfair Display",
        cssVariable: "--font-playfair-display",
      },
      {
        provider: fontProviders.google(),
        name: "Source Sans 3",
        cssVariable: "--font-source-sans",
      },
      {
        provider: fontProviders.google(),
        name: "Alice",
        cssVariable: "--font-alice",
      },
      {
        provider: fontProviders.google(),
        name: "Oswald",
        cssVariable: "--font-oswald",
      },
    ],
  },

  integrations: [icon({ include: { lucide: ["*"] } })],
});
