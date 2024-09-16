import { createRouter, createWebHistory } from 'vue-router';

import HelloWorld from '@/components/HelloWorld.vue';
import CV from '@/views/CV.vue'
import Dot from '@/components/Dot.vue';


const routes = [
    { path: '/', name: 'home', component: HelloWorld },
    { path: '/:name', name: 'showCV', component: CV },
    {path:'/dot', name:'dot', component: Dot},
  ];


const router = createRouter({
history: createWebHistory(),
routes: routes,
});

export default router;