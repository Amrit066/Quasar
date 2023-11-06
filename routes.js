import App from '../App.vue'
import EducationView from '../components/EducationView.vue'
import HomeView from '../components/HomeView.vue'
import HobbyView from '../components/HobbyView.vue'
import SkillsView from '../components/SkillsView.vue'
import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/abhay',
    component: () => import('../abhay79/MainLayout.vue'),
    children: [
      { path: '/abhay/home', component: () => import('../abhay79/HomeView.vue') },
      { path: '/abhay/education', component: () => import('../abhay79/EducationView.vue') },
      { path: '/abhay/skills', component: () => import('../abhay79/SkillsView.vue') },
      { path: '/abhay/hobby', component: () => import('../abhay79/HobbyView.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

// const route = [
//   {
//       path:'/',
//       name:'Home',
//       component:HomeView, 
//       // props:true
//   },
//   {
//       path:'/education',
//       name:'Education',
//       component:EducationView, 
//       // props:true
//   },
//   {
//       path:'/hobby',
//       name:'Hobby',
//       component:HobbyView, 
//       // props:true
//   },
//   {
//       path:'/skills',
//       name:'Skills',
//       component:SkillsView, 
//       // props:true
//   }
// ]

// // Creating Routes
// const router = createRouter({
//   history: createWebHistory(),
//   routes
// })


// createApp(App).use(router)

export default routes
