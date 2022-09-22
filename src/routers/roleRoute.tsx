// phân role users
import React from 'react'
// import NotFound from '../components/notfound'
import MyRouteProp from './MyRouteProp'
interface Props {
  item: MyRouteProp
}
function RoleRoute(props: Props) {
  const role = 'user'
  const {item} = props
  const check = item.roles?.includes(role)
  return <>{check ? props.item.element : <>anc</>}</>
}

export default RoleRoute
