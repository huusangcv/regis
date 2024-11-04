import routes from '~/Configs/Routes';
import HomePage from '~/Pages/Home';
import NotFound from '~/Pages/NotFound';

const publicRoutes = [
  { path: routes.home, component: HomePage },
  { path: routes.notFound, component: NotFound },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
