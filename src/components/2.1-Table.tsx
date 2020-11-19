import React from 'react'

import styled from 'styled-components'
import ProTable from '@ant-design/pro-table'
import '@ant-design/pro-table/dist/table.css'

const TableContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
`
export const PersonalCenterTable = () => {
  return (
    <TableContainer>
      <ProTable headerTitle={'待处理列表'} search={false} />
    </TableContainer>
  )
}
