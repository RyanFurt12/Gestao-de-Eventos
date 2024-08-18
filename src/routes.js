import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Search from './pages/Search';
import MyEvents from './pages/MyEvents';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import MyEventsCreate from './pages/MyEvents-Create';
import MyEventsCreateSucess from "./pages/MyEventsCreateSuccess";

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: Login,
    notShowHeader: true,
    notShowFooter: true
  },
  {
    path: '/register',
    component: Register,
    notShowHeader: true,
    notShowFooter: true
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/my-events',
    component: MyEvents
  },
  {
    path: '/my-events/Create',
    component: MyEventsCreate
  },
  {
    path: '/my-events/Create/Success',
    component: MyEventsCreateSucess
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '*',
    component: NotFound
  }
];

export default routes;
