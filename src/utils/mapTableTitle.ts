import { tabType } from '../types'

const tableTitleMap = new Map([
  ['待处理', '待处理任务'],
  ['已处理', '已处理任务'],
  ['已发起', '已发起任务']
])

export default (tab: tabType): string => {
  return (tableTitleMap.get(tab) as tabType) ?? tab
}
