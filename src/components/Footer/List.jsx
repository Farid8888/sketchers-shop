import React from 'react'
import {Flex,Typography} from 'antd'

const ListFooter = ({top,botArr}) => {
    const {Text} = Typography
  return (
      <Flex className='ft-bt' gap={24} vertical>
        <Text className='tx-h pr-tx mm-sz ml-wt tx-col-pr'>{top}</Text>
         <Flex className='ft-col' gap={16} vertical>
        {botArr.map(item=>{
            return <Text key={item} className='pr-tx sm-sz sm-wt tx-col-pr'>{item}</Text>
        })}
        </Flex>
      </Flex>
  )
}

export default ListFooter
