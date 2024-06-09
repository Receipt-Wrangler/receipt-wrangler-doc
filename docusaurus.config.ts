import {themes as prismThemes} from "prism-react-renderer";

import type {Config} from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const githubUrl = "https://github.com/Receipt-Wrangler";

const demoUrl = "https://demo.receiptwrangler.io";

const config: Config = {
    title: "Receipt Wrangler",
    tagline: "Tame your receipts. Open source, self hosted.",
    favicon: "favicon.svg",

    // Set the production url of your site here
    url: "https://receiptwrangler.io",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            {
                docs: {
                    sidebarPath: "./sidebars.ts",
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: githubUrl,
                },
                theme: {
                    customCss: "./src/css/custom.css",
                },
            } satisfies Preset.Options,
        ],
        [
            'redocusaurus',
            {
                specs: [
                    {
                        spec: "https://raw.githubusercontent.com/Receipt-Wrangler/receipt-wrangler-api/main/swagger.yml",
                        route: '/api'
                    }
                ],
                theme: {
                    primaryColor: "#0079c0"

                }
            }
        ]
    ],

    themeConfig: {
        // Replace with your project's social card
        image: "img/docusaurus-social-card.jpg",
        navbar: {
            title: "Receipt Wrangler",
            logo: {
                alt: "My Site Logo",
                src: "favicon.svg",
            },
            items: [
                {
                    type: "docSidebar",
                    sidebarId: "tutorialSidebar",
                    position: "left",
                    label: "Documentation",
                },
                {
                    href: githubUrl,
                    label: "GitHub",
                    position: "right",
                },
                {
                    href: demoUrl,
                    label: "Demo",
                    position: "right",
                },
                {
                    href: "/mobile-app-registration",
                    label: "Mobile App Early Access",
                    position: "right",
                },
                {
                    href: "/api/",
                    label: "API",
                    position: "left"
                },
                {
                    type: 'docsVersionDropdown',
                    position: 'left',
                    dropdownActiveClassDisabled: true,
                },
            ],
        },
        footer: {
            style: "dark",
            links: [
                {
                    title: "Docs",
                    items: [
                        {
                            label: "Documentation",
                            to: "/docs/getting-started/",
                        },
                    ],
                },
                {
                    title: "Community",
                    items: [
                        {
                            label: "Reddit",
                            href: "https://www.reddit.com/r/receiptwrangler/",
                        },
                        {
                            label: "Privacy Policy",
                            href: "/privacy-policy"
                        }
                    ],
                },
                {
                    title: "More",
                    items: [
                        {
                            label: "GitHub",
                            href: githubUrl,
                        },
                        {
                            label: "Demo",
                            href: demoUrl,
                        },
                    ],
                },
            ],
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
        algolia: {
            // Safe to commit directly, per https://www.algolia.com/doc/guides/security/api-keys/#predefined-api-keys
            appId: "4G85SDCY9J",
            apiKey: "db3428f7b61a75c01e3c94a1e8f2aec1",
            indexName: "squid-app-n8wok",
            contextualSearch: false,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
