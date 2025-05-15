import { createRouter, createWebHistory } from 'vue-router';
import HomeProductos from '@/views/HomeProductos.vue';
import Dashboard from '@/views/ProductoresDashboard.vue';
import RegistroProducto from '@/views/RegistroProducto.vue';

const routes = [
    { 
        path: '/', 
        name: 'Home', 
        component: HomeProductos 
    },
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/RegistroProducto',
        name: 'RegistroProducto',
        component: RegistroProducto
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
