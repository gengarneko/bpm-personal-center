import React from 'react'
import styled from 'styled-components'
import { Context } from '../context'
import { Modal } from 'antd'

const ModalContent = styled.div`
  border: 1px solid red;
  display: flex;
  margin-top: 16px;
`

const InfoContainer = styled.div`
  border: 1px solid red;
  background: #eee;
  display: flex;
  padding-right: 16px;
  width: 66%;
`

const TimeLineContainer = styled.div`
  border: 1px solid red;
  background: #eee;
  width: 34%;
`

export const PersonalCenterModal = () => {
  const [context] = Context.useRxjsStore()
  const actions = Context.reducers

  const visible = !!context.modal

  return (
    <Modal
      visible={visible}
      onOk={() => actions.closeModal()}
      onCancel={() => actions.closeModal()}
    >
      <ModalContent>
        <InfoContainer>info</InfoContainer>
        <TimeLineContainer>time line</TimeLineContainer>
      </ModalContent>
    </Modal>
  )
}
