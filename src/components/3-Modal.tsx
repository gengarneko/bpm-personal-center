import React, { FC } from 'react'
import styled from 'styled-components'
import { Context } from '../context'
import { Button, Modal, Space, Typography, Descriptions, Input } from 'antd'

const { Text } = Typography

const ModalContent = styled.div`
  display: flex;
`

const InfoContainer = styled.div`
  max-height: 600px;
  width: 66%;
  display: flex;
  padding: 12px;
  padding-top: 0;
  flex-direction: column;
  overflow: auto;
`

const TimeLineContainer = styled.div`
  width: 34%;
`

type InfoDataType = {
  title: string
  dataType: string
  data: any
}[]

const InfoData: InfoDataType = [
  {
    title: '基本信息',
    dataType: 'BasicData',
    data: [
      { name: '流程类型', value: '工作表事件触发' },
      { name: '所属应用', value: 'flowTest' },
      { name: '流程名称', value: 'renderComp' },
      { name: '所属工作表', value: '111111111111111' }
    ]
  },
  {
    title: '内容信息',
    dataType: 'FormData',
    data: [
      { field: '标题', fieldType: 'Input', value: '1' },
      { field: '描述', fieldType: 'Input' },
      { field: '部门', fieldType: 'Input' },
      { field: '人员', fieldType: 'Input' },
      { field: '日期', fieldType: 'DataPicker' }
    ]
  }
]

interface InfoItemProps {
  title: string
  data?: any
  type: string
}
const WrapText = styled(Text)`
  line-heigth: 1;
  padding: 12px 0;
`
const ItemContent = styled.div`
  width: 100%;
  background: #eee;
  padding: 14px;
  padding-bottom: 0px;
`

const WrapDescriptions = styled(Descriptions)`
  line-height: 1;
  .ant-descriptions-item-label {
    width: 90px;
  }
`

const InfoItem: FC<InfoItemProps> = ({ title, data, type }) => {
  const renderInfoContent = () => {
    return type === 'BasicData' ? (
      <div style={{ marginBottom: '6px' }}>
        <WrapDescriptions size='small' column={2}>
          {data.map((item: any, key: number) => (
            <Descriptions.Item
              key={key}
              label={<Text strong>{item.name}</Text>}
            >
              {item.value}
            </Descriptions.Item>
          ))}
        </WrapDescriptions>
      </div>
    ) : (
      <div style={{ marginBottom: '18px' }}>
        <Space direction='vertical'>
          {data.map((item: any, key: number) => (
            <Space direction='vertical' key={key}>
              <Text>{item.field}</Text>
              <Input disabled defaultValue={item?.value} />
            </Space>
          ))}
        </Space>
      </div>
    )
  }

  return (
    <>
      <WrapText strong>{title}</WrapText>
      <ItemContent>{renderInfoContent()}</ItemContent>
    </>
  )
}

const ModalFooter = () => {
  return (
    <>
      <Button type='primary' danger>
        驳回
      </Button>
      <Button type='primary'>通过</Button>
    </>
  )
}

export const PersonalCenterModal = () => {
  const [context] = Context.useRxjsStore()
  const actions = Context.reducers

  const visible = !!context.modal

  return (
    <Modal
      visible={visible}
      title={`${context.tab}审批`}
      bodyStyle={{ padding: 0 }}
      width={1120}
      style={{ width: '1120px' }}
      footer={<ModalFooter />}
      onOk={() => actions.closeModal()}
      onCancel={() => actions.closeModal()}
    >
      <ModalContent>
        <InfoContainer>
          {InfoData.map((item, key: number) => (
            <InfoItem
              key={key}
              title={item.title}
              data={item.data}
              type={item.dataType}
            />
          ))}
        </InfoContainer>
        <TimeLineContainer>time line</TimeLineContainer>
      </ModalContent>
    </Modal>
  )
}
