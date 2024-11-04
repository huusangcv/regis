import routes from '~/Configs/Routes';
import HomePage from '~/Pages/Home';
import NotFound from '~/Pages/NotFound';
import TimeTable from '~/Pages/TimeTable';

const publicRoutes = [
  { path: routes.home, component: HomePage },
  { path: routes.timeTable, component: TimeTable },
  { path: routes.notFound, component: NotFound },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
