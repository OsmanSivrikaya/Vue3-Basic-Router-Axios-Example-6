import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    name: "HomePage",
    path: "/",
    component: () => import("@/views/HomePage.vue"),
  },
  {
    name: "NewBookMark",
    path: "/newbookmark",
    component: () => import("@/views/NewBookMark.vue"),
  },
]

const router = createRouter({
  routes: routes,
  history: createWebHashHistory()
});

export default router;