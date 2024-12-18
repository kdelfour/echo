// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Echo",
      logo: {
        src: "./src/assets/logo.svg",
      },
      social: {
        github: "https://github.com/maxds-lyon/echo",
      },
      customCss: ["./src/css/tailwind.css"],
      sidebar: [
        { label: "Introduction", autogenerate: { directory: "introduction" } },
        {
          label: "Guide de démarrage",
          autogenerate: { directory: "quick-start-guide" },
        },
        { label: "Architecture", autogenerate: { directory: "architecture" } },
        { label: "Fonctionnalités", autogenerate: { directory: "features" } },
        {
          label: "Standards de développement",
          autogenerate: { directory: "development standards" },
        },
        { label: "Contribution", autogenerate: { directory: "contribution" } },
        { label: "Déploiement", autogenerate: { directory: "deployment" } },
        { label: "FAQ", autogenerate: { directory: "faq" } },
        {
          label: "Ressources supplémentaires",
          autogenerate: { directory: "additional_resources" },
        },
      ],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
