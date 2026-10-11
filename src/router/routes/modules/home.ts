const home = [{
  path: "/home",
  name: "Home",
  component: () => import("~/pages/home/index.vue"),
  meta: {
    title: "Home",
  },
}, {
  path: "/StoreTest",
  name: "StoreTest",
  component: () => import("~/pages/home/components/StoreTest.vue"),
}];

export default home;
