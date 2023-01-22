import { PageConstant } from "~/constant/pageConstant";
import { LAYOUT } from "~/router/constant";
import { PAGE_NOT_FOUND_ROUTE } from "~/router/routes/basic";

const modules = import.meta.glob<{ default: any }>("./modules/**/*.ts", { eager: true });
const routeModuleList: any = [];

// 加入到路由集合中
Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

const layout = {
  path: "/layout",
  name: "Layout",
  component: LAYOUT,
  meta: {
    title: "Layout",
  },
  redirect: PageConstant.BASE_HOME,
  children: [...routeModuleList, PAGE_NOT_FOUND_ROUTE],
};

export default layout;
