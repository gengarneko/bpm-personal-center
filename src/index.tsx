import * as React from 'react'

import { PersonalCenterHeader } from './components/0-Header'
import { PersonalCenterTab } from './components/1-Tab'
import { PersonalCenterContainer } from './components/2-Container'
import { PersonalCenterModal } from './components/3-Modal'

import 'antd/dist/antd.css'

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return (
    <React.Fragment>
      <PersonalCenterHeader />
      <PersonalCenterTab />
      <PersonalCenterContainer />
      <PersonalCenterModal />
    </React.Fragment>
  )
}
