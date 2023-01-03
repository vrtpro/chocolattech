import { createRouter, createWebHistory, Router } from 'vue-router';
import { Routes } from './routes';
// @ts-ignore
import NProgress from 'nprogress';
import { main } from '../content';

import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Model from '../pages/Model.vue';
import Social from '../pages/Social.vue';
import Credit from '../pages/Credit.vue';
import Commision from '../pages/Commision.vue';
import Donation from '../pages/Donation.vue';
import Merchant from '../pages/Merchant.vue';

const routes: Routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { title: `Home | ${main.name}` },
    },
    {
        path: '/#about',
        name: 'About',
        component: About,
        meta: { title: `About | ${main.name}` },
    },
    {
        path: '/#model',
        name: 'Model',
        component: Model,
        meta: { title: `Model | ${main.name}` },
    },
    {
        path: '/#social',
        name: 'Social',
        component: Social,
        meta: { title: `SNS | ${main.name}` },
    },
    {
        path: '/#credit',
        name: 'Credit',
        component: Credit,
        meta: { title: `Credit | ${main.name}` },
    },
    {
        path: '/#commision',
        name: 'Commision',
        component: Commision,
        meta: { title: `Commision | ${main.name}` },
    },
    {
        path: '/#donation',
        name: 'Donation',
        component: Donation,
        meta: { title: `Donation | ${main.name}` },
    },
    {
        path: '/#merchandise',
        name: 'Merchandise',
        component: Merchant,
        meta: { title: `Merchandise` },
    },
];

const router: Router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeResolve((to, from, next) => {
    if (to.name) NProgress.start();
    const nearestWithTitle: any = to.matched
        .slice()
        .reverse()
        .find(r => r.meta && r.meta.title);
    const nearestWithMeta: any = to.matched
        .slice()
        .reverse()
        .find(r => r.meta && r.meta.metaTags);
    const previousNearestWithMeta: any = from.matched
        .slice()
        .reverse()
        .find(r => r.meta && r.meta.metaTags);
    if (nearestWithTitle) {
        document.title = nearestWithTitle.meta.title;
    } else if (previousNearestWithMeta) {
        document.title = previousNearestWithMeta.meta.title;
    }
    Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map((el: any) =>
        el.parentNode.removeChild(el)
    );
    if (!nearestWithMeta) return next();
    nearestWithMeta.meta.metaTags
        .map((tagDef: any) => {
            const tag: HTMLMetaElement = document.createElement('meta');
            Object.keys(tagDef).forEach(key => {
                tag.setAttribute(key, tagDef[key]);
            });
            tag.setAttribute('data-vue-router-controlled', '');
            return tag;
        })
        .forEach((tag: any) => document.head.appendChild(tag));
    next();
});
router.afterEach((to, from) => {
    NProgress.done();
});

export default router;
