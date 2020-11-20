import { tabType, TableListItemType } from '../types'
import { ProColumns } from '@ant-design/pro-table'
import {
  PendingTableData,
  ProcessedTableData,
  SponsoredTableData
} from '../mock/table'

export const tableDataMap = new Map([
  ['待处理', PendingTableData],
  ['已处理', ProcessedTableData],
  ['已发起', SponsoredTableData]
])

export default (
  tab: tabType
): {
  columns: ProColumns<TableListItemType>[]
  rows: TableListItemType[]
} => {
  return tableDataMap.get(tab) as {
    columns: ProColumns<TableListItemType>[]
    rows: TableListItemType[]
  }
}
