import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

export let router = createRouter({
    history: createWebHistory(),
    routes: routes,
})