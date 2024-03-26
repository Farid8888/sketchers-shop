import React from 'react'
import avt from './../../assets/Avatar.png'
import {Avatar,Flex,Typography} from 'antd'
import {DownOutlined} from '@ant-design/icons'

const AvatarStatus = () => {
  const {Text} = Typography
  return (
    <Flex className='avr' align='center' justify='space-between' gap={16}>
      <Avatar shape="square" size={32} src={avt}/>
      <Text className='text-main'>Ермаков Е.</Text>
      <DownOutlined className='icn sz'/>
    </Flex>
  )
}

export default AvatarStatus
