import React from 'react'
import {Flex,Typography,Button,Col,Divider} from 'antd'
import {PercentageOutlined,MessageOutlined} from '@ant-design/icons'

const SubNav = () => {
    const {Text} = Typography
   
  return (
    <Col>
    <Divider className='ln my-3 pos'/>
    <Flex justify='space-between'>
       <Flex gap='large' align='center'>
          <Text className='subTx'>Мои заказы</Text>
          <Text className='subTx'>Сотрудники</Text>
          <Text className='subTx'>Шаблоны заказов</Text>
          <Text className='subTx'>Обращения</Text>
       </Flex>
       <Flex gap='large' align='center'>
          <Button className='btn-first'icon={<MessageOutlined />}>Сотрудники</Button>
          <PercentageOutlined className='icn'/>
          <Text className='subPr'>Акции</Text>
          <Text className='subPr'>Блог</Text>
       </Flex>
    </Flex>
    <Divider className='ln my-3 pos'/>
    </Col>
  )
}

export default SubNav
