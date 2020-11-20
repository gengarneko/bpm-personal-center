import React, { FC } from 'react'
import styled from 'styled-components'
import { Row, Col, Input, Typography, Space, Card, Collapse } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { Icon } from '@ant-design/compatible'
import { ItemType } from '../types'
import { appList } from '../mock/appList'

const { Text } = Typography

// * ------------------------------------------------------------------------------- inter

interface CategoryContainerProps {
  title: string
  list?: ItemType[]
  count?: number
}

// * ------------------------------------------------------------------------------- style

const WrapCollapse = styled(Collapse)`
  border-bottom: 1px solid #eee;
  &.ant-collapse > .ant-collapse-item > .ant-collapse-header {
    padding: 12px 0;
  }  
  &.ant-collapse > .ant-collapse-item > .ant-collapse-content {
    padding: 0;
    .ant-collapse-content-box {
      padding 0;
      padding-bottom: 4px
    }
  }
`

const HomePageContainer = styled.div`
  padding: 20px 16px;
  width: 100%;
  background: #fff;
`

const WrapCard = styled(Card)`
  margin-right: 16px;
  margin-bottom: 16px;
  &:hover {
    cursor: pointer;
  }
  border-radius: 10px;
  .ant-card-body {
    padding: 12px;
  }
`

const IconContainer = styled.div`
  width: 30px;
  height: 30px;
  background: #3396fa;
  border-radius: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
`

// * ------------------------------------------------------------------------------- comp

const FormListItem: FC<ItemType> = ({ name, url, icon }) => {
  const handleClick = () => {
    console.log(url, 666)
  }

  return (
    <WrapCard onClick={() => handleClick()}>
      <Space size='middle'>
        <IconContainer>
          <Icon type={icon} />
        </IconContainer>
        <div>{name}</div>
      </Space>
    </WrapCard>
  )
}

const FormListCategory: FC<CategoryContainerProps> = ({
  title,
  list,
  count
}) => {
  const newCount = count || 0
  return (
    <WrapCollapse ghost expandIconPosition='right' defaultActiveKey={title}>
      <Collapse.Panel
        key={title}
        header={
          <Row>
            <Space>
              <Text strong>{title}</Text>
              <Text type='secondary'>{`(${newCount})`}</Text>
            </Space>
          </Row>
        }
      >
        <Row>
          {list?.map((item, key: number) => (
            <Col key={key} span={3}>
              <FormListItem name={item.name} url={item.url} icon={item.icon} />
            </Col>
          ))}
        </Row>
      </Collapse.Panel>
    </WrapCollapse>
  )
}

export const HomePage = () => {
  return (
    <HomePageContainer>
      <Row>
        <Col span={8}>
          <Input placeholder='请搜索要提交的表单' prefix={<SearchOutlined />} />
        </Col>
      </Row>
      {appList.map((cate, key: number) => (
        <FormListCategory
          key={key}
          title={cate.category}
          list={cate.items}
          count={cate.items?.length}
        />
      ))}
    </HomePageContainer>
  )
}
