import routes from '~/Configs/Routes';
import HomePage from '~/Pages/Home';
import Introduce from '~/Pages/Introduce';
import Login from '~/Pages/Login';
import NotFound from '~/Pages/NotFound';
import Regis from '~/Pages/Regis';
import TimeTable from '~/Pages/TimeTable';

const publicRoutes = [
  { path: routes.home, component: HomePage },
  { path: routes.timeTable, component: TimeTable },
  { path: routes.regis, component: Regis },
  { path: routes.login, component: Login },
  { path: routes.introduce, component: Introduce },
  { path: routes.notFound, component: NotFound },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
