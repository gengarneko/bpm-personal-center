import { ProColumns } from '@ant-design/pro-table'

export type tabType = '首页' | '待处理' | '已处理' | '已发起'

export type TableListItemType = {
  taskId: string
  flowName?: string
  belongApp?: string
  sponsor?: string
  startTime?: string
  category?: string
  actions?: string
}

export type TableDataType = {
  columns: ProColumns<TableListItemType>[]
  rows: TableListItemType[]
}

export type ItemType = {
  name: string
  icon: string
  url: string
}

export type appListType = {
  category: string
  items?: ItemType[]
}[]
