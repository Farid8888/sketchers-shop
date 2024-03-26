import React from "react";
import { Col, Typography, Flex,Image,Button,Badge,Divider,Switch } from "antd";
import {HeartFilled,HeartOutlined} from '@ant-design/icons'
import Characteristics from "./Characteristics";
import ListBody from "./ListBody";
import ImageBody from "./ImageBody";
import Description from "./Description";
import Buttons from "./Buttons";
import Footer from "../Footer/Footer";
import imgLarge from './../../assets/Rectangle 1.png'
import img1 from './../../assets/img1.png'
import img2 from './../../assets/img2.png'
import img3 from './../../assets/img3.png'
import img4 from './../../assets/img4.png'

const Body = () => {
  const { Text } = Typography;
  const [show,setShow] = React.useState(false)
  return (
    <Col className="bd">
      <Flex className='ty'>Каталог / Обувь / Кроссовки / Беговые</Flex>
      <Text className="btx">КРОССОВКИ МУЖСКИЕ SKECHERS SUNNY DALE</Text>
      <Flex gap={48} className="mt-2" >
        <Col>
        <Image src={imgLarge} width={400}/>
        <ImageBody imgArr={[img1,img2,img3,img4]}/>
        </Col>
        <Flex className="desc" gap={32} vertical>
          <Flex gap={48}>
            <Flex gap={10} vertical>
               <Text className='rd-tx'>166 534.00 цена без скидки</Text>
               <Flex gap={16}>
               <Text className="lr-tx">122 566 ₽</Text>
               <Badge count={'-15%'} offset={[0,16]} style={{"borderRadius":'4px',fontWeight:'bold'}} color="rgba(255, 61, 113, 1)"/>
               </Flex>
               <Flex gap={12} align="center">
                <Typography className="bg">12 штук в уп.</Typography>
                <Switch defaultChecked/>
                <Typography className="pr-tx sm-sz ml-wt tx-col-pr">Заказ упаковкой</Typography>
               </Flex>
               <Divider className="ln wd-line-med" />
               <ListBody name="Завтра" subName="Доставка"/>
               <ListBody name="7 шт." subName="Тарасовка"/>
               <ListBody name="7 шт." subName="Тарасовка"/>
               <Flex gap={24} justify='space-between'>
                <Buttons/>
                <Button className='btn-heart' onClick={()=>setShow(prevst=>!prevst)}>
                {show ? <HeartFilled className="icn-sz hrt"/> : <HeartOutlined className="icn icn-sz"/>}
                </Button>
               </Flex>
            </Flex>
            <Divider className="ln ln-h" type="vertical"/>
            <Flex gap={32} vertical>
                  <Text className="pr-tx ml-sz ml-wt tex-col-pr">Характеристики</Text>
                 <Flex gap={24} vertical>
                  <Characteristics txLeftFs={"ELC00696"} txRightFs={"Код поставщика"} txLeftscd={"ELC0200000696"} txRightscd={"Артикул"}/>
                  <Characteristics txLeftFs={"ELC00696"} txRightFs={"Код РАЭК"} txLeftscd={"ELC00696"} txRightscd={"Код ЕТМ"}/>
                  <Characteristics txLeftFs={"Electric used"} txRightFs={"Бренд"} txLeftscd={"ELC00696"} txRightscd={"Серия"}/>
                  <Characteristics txLeftFs={"ELC0200000696"} txRightFs={"Код производителя "}/>
                 </Flex>
               </Flex>
          </Flex>
          <Description/>
        </Flex>
      </Flex>
      <Divider className="ln" style={{marginTop:'64px',marginBottom:'44px'}}/>
      <Footer/>
    </Col>
  );
};

export default Body;
