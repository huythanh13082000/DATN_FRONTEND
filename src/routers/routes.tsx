import {Url} from './paths'
import Home from '../pages/home'
import Login from '../pages/login'
import {RouteProps} from 'react-router-dom'
import Personnel from '../pages/personnel'
import Department from '../pages/department'
import Rank from '../pages/rank'

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
    path: '/',
    element: <Home />,
  },
  {
    path: Url.personnel,
    element: <Personnel />,
  },
  {
    path: Url.department,
    element: <Department />,
  },
  {path: Url.rank, element: <Rank />},
]
export default routes
