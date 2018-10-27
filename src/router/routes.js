import Contact from '@views/Contact';
import Home from '@views/Home/Home';
import Methodology from '@views/Methodology/Methodology';
import Portfolio from '@views/Portfolio/Portfolio';
import Project from '@views/Project';
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
    path: '/portfolio',
    component: Portfolio,
    name: 'portfolio',
  },
  {
    path: '/portfolio/:id',
    component: Project,
    props: true,
  },
  {
    path: '/us',
    component: Us,
    name: 'us',
  },
];
