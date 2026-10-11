import { SiteConstant } from "~/constant/siteConstant";

export interface SiteLink {
  // Key of the label under `links` in the locale files.
  key: string;
  // A path inside the app, or the address of another site.
  href: string;
}

// Sections of the home page.
export const EXPLORE: SiteLink[] = [
  { key: "components", href: "/home#components" },
  { key: "devServer", href: "/home#dev-server" },
  { key: "theming", href: "/home#theming" },
  { key: "state", href: "/home#state" },
  { key: "i18n", href: "/home#i18n" },
  { key: "autoImports", href: "/home#auto-imports" },
];

export const GET_STARTED: SiteLink[] = [
  { key: "template", href: SiteConstant.TEMPLATE_URL },
  { key: "readme", href: `${SiteConstant.REPOSITORY_URL}#readme` },
  { key: "netlify", href: SiteConstant.NETLIFY_DEPLOY_URL },
  { key: "vercel", href: SiteConstant.VERCEL_DEPLOY_URL },
  { key: "docker", href: SiteConstant.DOCKER_GUIDE_URL },
];

export const RESOURCES: SiteLink[] = [
  { key: "store", href: "/StoreTest" },
  { key: "issues", href: SiteConstant.ISSUES_URL },
  { key: "eslintConfig", href: SiteConstant.ESLINT_CONFIG_URL },
  { key: "templates", href: SiteConstant.TEMPLATES_URL },
];
