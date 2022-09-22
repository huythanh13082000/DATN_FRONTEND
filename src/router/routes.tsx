import { Url } from "../contains"
import Login from "../pages/login"
import MyRouteProp from "./MyRouteProp"

const routes: Array<MyRouteProp> = [
  {
    path: Url.login,
    element: <Login />,
    private: false,
    roles: ['user', 'admin', 'super'],
  },
]
export default routes
