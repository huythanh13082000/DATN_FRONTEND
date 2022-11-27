import React from 'react'
import {urlApi} from '../../apis/url'
import TableCustom from '../../components/tableCustom'
import {columnsRank} from '../../utils/columnTable'

const Rank = () => {
  return (
    <div>
      <TableCustom url={urlApi.rank} columns={columnsRank} searchName/>
    </div>
  )
}

export default Rank
