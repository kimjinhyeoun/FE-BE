import { createWebHistory, createRouter } from "vue-router";
import EzenHome from './components/EzenHome.vue'
import ListWrap1 from './components/ListWrap1.vue'
import ListWrap2 from './components/ListWrap2.vue'
import ListWrap3 from './components/ListWrap3.vue'
import ListWrap4 from './components/ListWrap4.vue'

  const routes = [
   {
    path:"/", //첫페이지 설정
    component:EzenHome,
   },
   {
    path:"/ListWrap1", //다음 페이지 설정
    component: ListWrap1,
   },
   {
    path:"/ListWrap2", //다음 페이지 설정
    component: ListWrap2,
   },
   {
    path:"/ListWrap3", //다음 페이지 설정
    component: ListWrap3,
   },
   {
    path:"/ListWrap4", //다음 페이지 설정
    component: ListWrap4,
   },
  ];
  const router = createRouter({
   history: createWebHistory(),
   routes,
  });
 export default router; 