import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'is-active',
  routes: [
    {path: '/', name: 'welcome', props: true, component: () => import('@/views/WelCome.vue'),
      children: []},
      {path: '/customers', name: 'customers', props: true, component: () => import('@/views/customers/CustomerTemplate.vue'), redirect: {name: 'customers.list'},
          children: [
              {path: 'list', name: 'customers.list', props: true, component: () => import('@/views/customers/ListView.vue')},
          ]},
  ]
})



export default router
