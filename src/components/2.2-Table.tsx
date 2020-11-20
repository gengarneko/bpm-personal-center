import React, { FC } from 'react'
import styled from 'styled-components'
import ProTable from '@ant-design/pro-table'
import '@ant-design/pro-table/dist/table.css'
import { TableDataType } from '../types'
import { Context } from '../context'

const TableContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
`

// * ------------------------------------------------------------------------------- interface

interface PersonalCenterTableProps {
  title: string
  data: TableDataType
}

// * ------------------------------------------------------------------------------- comp

export const PersonalCenterTable: FC<PersonalCenterTableProps> = ({
  title,
  data
}) => {
  const [context] = Context.useRxjsStore()
  const actions = Context.reducers

  const handleClickAction = () => {
    actions.openModal(context.tab)
  }

  const newData = data.columns.concat({
    title: '操作',
    dataIndex: 'actions',
    render: () => <a onClick={() => handleClickAction()}>审批</a>
  })

  return (
    <TableContainer>
      <ProTable
        rowKey='taskId'
        headerTitle={title}
        columns={newData}
        dataSource={data.rows}
        search={false}
      />
    </TableContainer>
  )
}
