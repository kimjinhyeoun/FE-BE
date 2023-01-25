import { createWebHistory, createRouter } from "vue-router";
import VueLink1 from './components/VueLink1.vue'
import VueLink2 from './components/VueLink2.vue'
import VueLink3 from './components/VueLink3.vue'

  const routes = [
   {
    path: "/link1",
    component: VueLink1,
   },
   {
    path: "/link2",
    component: VueLink2,
   },
   {
    path: "/link3",
    component: VueLink3,
   },
  
  ];
  const router = createRouter({
   history: createWebHistory(),
   routes,
  });
 export default router; 