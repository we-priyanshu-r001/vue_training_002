import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: '/', 
        name: 'home', 
        component: () => import('../views/HomeView.vue')  
    },
    {   
        path: '/contact', 
        name: 'contact', 
        component: () => import('../views/ContactView.vue')  
    },
    {
        path: '/user',
        component: () => import('../views/User.vue'),
        children: [
            {
                path: 'profile',
                component: () => import('../views/Profile.vue')
            }
        ]
    },
    {
        path: '/user/:id',
        component: () => import('../views/Profile.vue')
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/views/NotFound.vue') },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router