const home = [{
  path: "/home",
  name: "Home",
  component: () => import("~/views/home/index.vue"),
  meta: {
    title: "Home",
  },
},
{
  path: "/hero",
  name: "Hero",
  component: () => import("~/views/home/components/Hero.vue"),
},
{
  path: "/StoreTest",
  name: "StoreTest",
  component: () => import("~/views/home/components/StoreTest.vue"),
},
];

export default home;
