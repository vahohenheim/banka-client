import Home from '../views/pages/Home'
//import Account from '../views/pages/Account'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    exact: true,
    display: true,
    sitemap: true,
  }
]

/*
,
  {
    path: '/accounts',
    name: 'About',
    component: Account,
    sitemap: true,
  },
  {
    name: 'NoMatch',
    component: loadable(() => import('views/pages/NoMatch')),
    sitemap: true,
  },

 */
export default routes
