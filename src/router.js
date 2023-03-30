import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppIndex from './pages/AppIndex.vue';
import AppShow from './pages/AppShow.vue';
import AppError from './pages/AppError.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/projects',
            name: 'projects',
            component: AppIndex
        },
        {
            path: '/projects/:slug',
            name: 'projects-show',
            component: AppShow
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'error',
            component: AppError
        },
    ]
});

export { router };