import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/pages/Index'
import Login from '@/pages/Login'

Vue.use(Router);

const NotFound = { template: '<p>Страница не найдена</p>' };

export default new Router({
    data: {
        currentRoute: window.location.pathname
    },
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ]
});
