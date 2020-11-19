import React from 'react'

import styled from 'styled-components'
import { PersonalCenterTable } from './2.1-Table'

const Container = styled.div`
  padding: 20px;
  background: #eee;
  height: calc(100vh - 105px);
`

export const PersonalCenterContainer = () => {
  return (
    <Container>
      <PersonalCenterTable />
    </Container>
  )
}
