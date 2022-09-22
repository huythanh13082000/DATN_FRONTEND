import {RouteProps} from 'react-router-dom'

export default interface MyRouteProp extends RouteProps {
  private?: boolean
  roles?: string[]
}
