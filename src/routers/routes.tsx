import {Url} from './paths'
import Home from '../pages/home'
import Login from '../pages/login'
import Map from '../pages/map'
import {RouteProps} from 'react-router-dom'
import Org from '../pages/org'

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
    path: '/',
    element: <Home />,
  },
  {path: Url.org, element: <Org />},
]
export default routes
