import {Url} from './paths'
import Home from '../pages/home'
import Login from '../pages/login'
import MyRouteProp from './MyRouteProp'

const routes: Array<MyRouteProp> = [
  {
    path: Url.login,
    element: <Login />,
    private: false,
    roles: ['user', 'admin', 'super'],
  },
  {
    path: Url.home,
    element: <Home />,
    private: false,
    roles: ['user', 'admin', 'super'],
  },
  {
    path: '/',
    element: <Home />,
    private: false,
    roles: ['user', 'admin', 'super'],
  },
]
export default routes
