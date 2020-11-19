import * as React from 'react'

import { PersonalCenterHeader } from './components/0-Header'
import { PersonalCenterTab } from './components/1-Tab'
import { PersonalCenterContainer } from './components/2-Container'

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return (
    <>
      <PersonalCenterHeader />
      <PersonalCenterTab />
      <PersonalCenterContainer />
    </>
  )
}
