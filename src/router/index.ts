import { createRouter, createWebHistory } from 'vue-router';

import { AuthLayout, DefaultLayout } from '@/layouts';
import { NotFoundPage } from '@/pages/404';
import { SignInPage, SignUpPage } from '@/pages/auth';
import { HomePage } from '@/pages/home';

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [{ path: '', component: HomePage }],
  },
  {
    path: '/auth',
    component: AuthLayout,
    redirect: '/auth/sign-in',
    children: [
      { path: 'sign-in', component: SignInPage },
      { path: 'sign-up', component: SignUpPage },
    ],
  },
  { path: '/404', component: NotFoundPage },
  { path: '/:path(.*)*', redirect: '/404' },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
