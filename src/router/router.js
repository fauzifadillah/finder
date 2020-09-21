import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home/Home";
import Contact from "@/views/Contact/Contact";
import Researches from "@/views/Researches/Researches";
import ResearchesDetail from "@/views/ResearchesDetail/ResearchesDetail";
import News from "@/views/News/News";
import NewsDetail from "@/views/NewsDetail/NewsDetail";
import Publications from "@/views/Publications/Publications";
import Services from "@/views/Services/Services";
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
      name: "researches",
      path: "/researches",
      component: Researches,
    },
    {
      name: "researchesDetail",
      path: "/researches/detail",
      component: ResearchesDetail,
    },
    {
      name: "news",
      path: "/news",
      component: News,
    },
    {
      name: "newsDetail",
      path: "/news/detail",
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
