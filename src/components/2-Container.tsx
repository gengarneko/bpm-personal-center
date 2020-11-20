import React from 'react'
import styled from 'styled-components'
import { Context } from '../context'
import mapTableTitle from '../utils/mapTableTitle'
import mapTableData from '../utils/mapTableData'
import { HomePage } from './2.1-HomePage'
import { PersonalCenterTable } from './2.2-Table'

const Container = styled.div`
  padding: 20px;
  background: #eee;
  min-height: calc(100vh - 105px);
`

export const PersonalCenterContainer = () => {
  const [context] = Context.useRxjsStore()
  // const actions = Context.reducers

  const renderComp = () => {
    if (context.tab === '首页') {
      return <HomePage />
    } else if (context.tab) {
      return (
        <PersonalCenterTable
          title={mapTableTitle(context.tab)}
          data={mapTableData(context.tab)}
        />
      )
    }
    return null
  }

  return <Container>{renderComp()}</Container>
}
