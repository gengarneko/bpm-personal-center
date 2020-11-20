import React, { FC } from 'react'
import styled from 'styled-components'
import { Context } from '../context'
import { tabType } from '../types'
import mapTableData from '../utils/mapTableData'

// * ------------------------------------------------------------------------------- style

const WrapHeader = styled.div`
  background: #fff;
  height: 50px;
  display: flex;
  justify-content: center;
`

const TabItemContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`

const WrapTabItem = styled.div`
  margin-left: 16px;
  margin-right: 16px;
  color: #999;
  text-align: center;
  line-height: 50px;
  font-weight: 500;
  &:hover {
    color: #40a9ff;
    cursor: pointer;
  }
  &.active {
    color: #1890ff;
    border-bottom: 2px solid #1890ff;
  }
`

// * ------------------------------------------------------------------------------- item

const TabItem: FC<{
  text: tabType
  className: string
  onClick: () => void
}> = ({ text, className, onClick }) => {
  return (
    <WrapTabItem className={className} onClick={onClick}>
      {text}
    </WrapTabItem>
  )
}

// * ------------------------------------------------------------------------------- comp

const tabs: tabType[] = ['首页', '待处理', '已处理', '已发起']

export const PersonalCenterTab: FC = () => {
  const [context] = Context.useRxjsStore()
  const actions = Context.reducers

  const isActive = (tab: tabType) => {
    return context.tab === tab ? 'active' : ''
  }

  const handleTabChange = (tab: tabType) => {
    actions.toggleTab(tab)
    actions.setTableData(mapTableData(tab))
  }

  return (
    <WrapHeader>
      <TabItemContainer>
        {tabs.map((res, key: number) => (
          <TabItem
            key={key}
            text={res}
            className={isActive(res)}
            onClick={() => handleTabChange(res)}
          />
        ))}
      </TabItemContainer>
    </WrapHeader>
  )
}
