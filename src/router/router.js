import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home/Home";
import Contact from "@/views/Contact/Contact";
import Researchers from "@/views/Researchers/Researchers";
import RndDetail from "@/views/RndDetail/RndDetail";
import ProjectDetail from "@/views/ProjectDetail/ProjectDetail";
import News from "@/views/News/News";
import NewsDetail from "@/views/NewsDetail/NewsDetail";
import Publications from "@/views/Publications/Publications";
import Services from "@/views/Services/Services";
import ServiceDetail from "@/views/ServiceDetail/ServiceDetail";
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
      name: "researchers",
      path: "/researchers",
      component: Researchers,
    },
    {
      name: "rndDetail",
      path: "/rnd/detail/:slug",
      component: RndDetail,
    },
    {
      name: "projectDetail",
      path: "/project/detail/:slug",
      component: ProjectDetail,
    },
    {
      name: "news",
      path: "/news",
      component: News,
    },
    {
      name: "newsDetail",
      path: "/news/detail/:slug",
      component: NewsDetail,
    },
    {
      name: "publications",
      path: "/publications",
      component: Publications,
    },
    {
      name: "services",
      path: "/services",
      component: Services,
    },
    {
      name: "serviceDetail",
      path: "/service/detail/:slug",
      component: ServiceDetail,
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
