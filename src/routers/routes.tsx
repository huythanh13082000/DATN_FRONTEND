import {Url} from './paths'
import Home from '../pages/home'
import Login from '../pages/login'
import Map from '../pages/map'
import {RouteProps} from 'react-router-dom'
import Org from '../pages/org'
import Setting from '../pages/setting'
import Permission from '../pages/permission'
import Role from '../pages/role'
import Fleets from '../pages/fleets'

const routes: Array<RouteProps> = [
  {
    path: Url.login,
    element: <Login />,
  },
  {
    path: Url.home,
    element: <Home />,
  },
  {
    path: Url.map,
    element: <Map />,
  },
  {
    path: Url.setting,
    element: <Setting />,
  },
  {
    path: '/',
    element: <Home />,
  },
  {path: Url.org, element: <Org />},
  {path: Url.role, element: <Role />},
  {path: Url.permission, element: <Permission />},
  {path: Url.fleets, element: <Fleets />},
]
export default routes
