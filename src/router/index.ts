import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { 
    path: '/login', 
    component: () => import('@/components/Login.vue') 
  },

  {
    path: '/talent-search',
    component: () => import('@/components/TalentSearch.vue'),
    meta: { requiresAuth: true, role: 'HR' }
  },
  {
    path: '/talent-manage',
    component: () => import('@/components//TalentManage.vue'),
    meta: { requiresAuth: true, role: 'HR' }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
