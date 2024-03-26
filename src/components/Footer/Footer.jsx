import React from 'react'
import {Divider, Flex,Image,} from 'antd'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import List from './List'
import SubFooter from './SubFooter'
import img from './../../assets/Frame 1308.png'

const Footer = () => {
  return (
    <Flex gap={20} vertical>
    <Flex align='center' justify='space-between'>
      <Flex className='ft-lf' gap={56} justify='space-between' align='center'>
           <Image src={img} className='ft-img'/>
           <LeftSide top="8 800 841-95-95" bottom="Служба поддержки"/>
           <LeftSide top="support@sport.ru" bottom="Служба поддержки"/>
      </Flex>
      <RightSide/>
    </Flex>
    <Divider className='ln'/>
    <Flex gap={24} align='center' justify='space-between'>
     <List top="Женщинам" botArr={["Одежда","Обувь","Аксессуары","Белье","Bra fitting"]}/>
     <List top="Мужчинам" botArr={["Одежда","Обувь","Аксессуары","Белье"]}/>
     <List top="Детям" botArr={["Одежда","Обувь","Аксессуары","Белье","Игрушки","Малыши"]}/>
    <List top="Виды спорта" botArr={["Велоспорт","Туризм","Тренажеры и фитнес","Командные виды спорта","Самокаты"]}/>
     </Flex>
     <Divider className='ln my-5'/>
     <SubFooter/>
    </Flex>
  )
}

export default Footer
