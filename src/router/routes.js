import Home from '@views/Home/Home';
import Contact from '@views/Contact';
import Methodology from '@views/Methodology/Methodology';
import Portfolio from '@views/Portfolio/Portfolio';
import Us from '@views/Us/Us';

export default [
  {
    path: '/',
    component: Home,
    name: 'home',
  },
  {
    path: '/contact',
    component: Contact,
    name: 'contact',
  },
  {
    path: '/methodology',
    component: Methodology,
    name: 'methodology',
  },
  {
    path: '/portfolio/:id',
    component: Portfolio,
    name: 'portfolio',
    props: route => ({ id: Number(route.params.id), }),
  },
  {
    path: '/us',
    component: Us,
    name: 'us',
  },
];
