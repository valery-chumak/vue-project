import FooPage from "./pages/FooPage.vue";
import BarPage from "./pages/BarPage.vue";
import HomePage from "./pages/HomePage.vue";
import ApartmentPage from "./pages/ApartmentPage.vue";
import ErrorPage from "./pages/ErrorPage.vue";
import VueRouter from "vue-router";

const routes = [
  {
    path: "/",
    component: HomePage,
    name: "homepage",
  },
  {
    path: "/apartment/:id",
    component: ApartmentPage,
    name: "apartment",
  },

  {
    path: "/foo",
    component: FooPage,
  },
  {
    path: "/bar",
    component: BarPage,
  },
  {
    path: "*",
    component: ErrorPage,
    name: "error-page",
  },
];

const router = new VueRouter({ routes, mode: "history" });

export default router;
