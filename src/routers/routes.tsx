import {Url} from './paths'
import Home from '../pages/home'
import Login from '../pages/login'
import {RouteProps} from 'react-router-dom'
import Personnel from '../pages/personnel'
import Department from '../pages/department'
import Rank from '../pages/rank'
import TimeSheet from '../pages/timeSheet'
import BonusPage from '../pages/bonus'
import AllowancePage from '../pages/allowance'
import FinePage from '../pages/fine'
import TimeSheetTablePage from '../pages/timeSheetTable'
import User from '../pages/user'

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
  {path: Url.timeSheet, element: <TimeSheet />},
  {path: Url.bonus, element: <BonusPage />},
  {path: Url.allowance, element: <AllowancePage />},
  {path: Url.fine, element: <FinePage />},
  {path: Url.timeSheetTable, element: <TimeSheetTablePage />},
  {path: Url.user, element: <User />},
  // {path: Url.user, element: <User />},
]
export default routes
