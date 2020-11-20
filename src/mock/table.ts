import { ProColumns } from '@ant-design/pro-table'
import { TableListItemType } from '../types'

export const PendingTableData: {
  columns: ProColumns<TableListItemType>[]
  rows: TableListItemType[]
} = {
  columns: [
    {
      title: '任务编号',
      dataIndex: 'taskId'
    },
    {
      title: '流程名称',
      dataIndex: 'flowName'
    },
    {
      title: '所属应用',
      dataIndex: 'belongApp'
    },
    {
      title: '发起人',
      dataIndex: 'sponsor'
    },
    {
      title: '发起时间',
      dataIndex: 'startTime',
      valueType: 'date'
    },
    {
      title: '类型',
      dataIndex: 'category'
    }
  ],
  rows: [
    {
      taskId: '待处理的ID',
      flowName: 'renderComp',
      belongApp: 'flowTest',
      sponsor: '徐裕程/IT803366',
      startTime: '2020-11-18',
      category: '审批',
      actions: '审批'
    }
  ]
}

export const ProcessedTableData: {
  columns: ProColumns<TableListItemType>[]
  rows: TableListItemType[]
} = {
  columns: [
    {
      title: '任务编号',
      dataIndex: 'taskId'
    }
  ],
  rows: [
    {
      taskId: '已处理的ID',
      flowName: 'renderComp',
      belongApp: 'flowTest',
      sponsor: '徐裕程/IT803366',
      startTime: '2020-11-18',
      actions: '审批'
    }
  ]
}

export const SponsoredTableData: {
  columns: ProColumns<TableListItemType>[]
  rows: TableListItemType[]
} = {
  columns: [
    {
      title: '任务编号',
      dataIndex: 'taskId'
    }
  ],
  rows: [
    {
      taskId: '已发起的ID',
      flowName: 'renderComp',
      belongApp: 'flowTest',
      sponsor: '徐裕程/IT803366',
      startTime: '2020-11-18',
      actions: '审批'
    }
  ]
}
