import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home/Home";
import Contact from "@/views/Contact/Contact";
import Guides from "@/views/Guides/Guides";
import News from "@/views/News/News";
import Publications from "@/views/Publications/Publications";
// import NotFound from '@/views/NotFound/NotFound';

const history = createWebHistory();
const router = createRouter({
  history,
  routes: [
    {
      name: "home",
      path: "/",
      component: Home,
    },
    {
      name: "contact",
      path: "/contact",
      component: Contact,
    },
    {
      name: "guides",
      path: "/guides",
      component: Guides,
    },
    {
      name: "news",
      path: "/news",
      component: News,
    },
    {
      name: "publications",
      path: "/publications",
      component: Publications,
    },
    // {
    //   path: '*',
    //   redirect: '/NotFound',
    // },
    // {
    //   path: '*',
    //   component: NotFound,
    // },
  ],
});

export default router;
