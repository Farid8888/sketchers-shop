import React from "react";
import {Button,Flex,Typography} from 'antd'
import {ShoppingCartOutlined,MinusOutlined,PlusOutlined} from '@ant-design/icons'
import {useSelector,useDispatch} from 'react-redux'
import {addToCart} from './../../store/CountSlicer'

const Buttons = () => {
    const [show,setShow] = React.useState(false)
    const counter = useSelector(state=>state.counter.count)
    const dispatch = useDispatch()
    const {Text} = Typography
  return (
    <>
      {!show ? (
        <Button className="btn-lg" icon={<ShoppingCartOutlined />} onClick={()=>setShow(prevst=>!prevst)}>
          В корзину
        </Button>
      ) : (
        <Button className="btn-buy">
          <Flex gap={12} align="center" justify="space-between">
           <MinusOutlined style={{fontSize:'24px',color:'rgba(7, 20, 53, 1)'}}/>
           <Text className="tx-buy">{counter} штуки</Text>
           <PlusOutlined style={{fontSize:'24px',color:'rgba(7, 20, 53, 1)'}} onClick={()=>dispatch(addToCart(122566))}/>
          </Flex>
        </Button>
      )}
    </>
  );
};

export default Buttons;
