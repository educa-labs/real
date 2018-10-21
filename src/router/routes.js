import Home from '@views/Home/Home';
import Contact from '@views/Contact';
import Methodology from '@views/Methodology/Methodology';
import Portfolio from '@views/Portfolio';
import Us from '@views/Us/Us';

export default [
  {
    path: '/',
    component: Home,
  },

  {
    path: '/contact',
    component: Contact,
  },
  {
    path: '/methodology',
    component: Methodology,
  },
  {
    path: '/portfolio',
    component: Portfolio,
  },
  {
    path: '/us',
    component: Us,
  },
]
