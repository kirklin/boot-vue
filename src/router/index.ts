import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHashHistory } from "vue-router";
import NProgress from "~/config/nprogress";
import { basicRoutes } from "./routes";

// Height of the site bar plus the gap between rows of tiles
const SECTION_OFFSET = 68;

// Distance from the top of the page, without the transform of the reveal animation
function pageTop(element: HTMLElement) {
  let top = 0;
  for (let node: HTMLElement | null = element; node; node = node.offsetParent as HTMLElement | null) {
    top += node.offsetTop;
  }
  return top;
}

export const router = createRouter({
  history: createWebHashHistory(),
  routes: basicRoutes as unknown as RouteRecordRaw[],
  strict: true,
  // Back and forward restore the scroll position, links to a section scroll to it below the site bar, and other pages start at the top
  // 前进后退恢复滚动位置，指向区块的链接滚动到顶栏下方，其他页面从顶部开始
  scrollBehavior: (to, _from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    }
    const section = to.hash ? document.getElementById(to.hash.slice(1)) : null;
    if (section) {
      const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
      return { top: pageTop(section) - SECTION_OFFSET, behavior: reduceMotion ? "instant" : "smooth" };
    }
    return { left: 0, top: 0 };
  },
});

// Injection Progress
router.beforeEach(() => {
  if (!NProgress.isStarted()) {
    NProgress.start();
  }
});

router.afterEach(() => {
  NProgress.done();
});
