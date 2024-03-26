import React from "react";
import { Button,Badge,Typography } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import {useSelector} from 'react-redux'

const ShoppingCart = () => {
  const counter = useSelector(state=>state.counter.count)
  const price =useSelector(state=>state.counter.price)
  const formatPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
  const {Text} =Typography
  return (
    <Button
      className="btn-first pad-pr"
      icon={
        <Badge count={counter} size="small" className="r">
          <ShoppingCartOutlined
            style={{ fontSize: "24px", color: "rgba(21, 81, 229, 1)" }}
          />
        </Badge>
      }
    >
      <Text className="pr-tx sm-sz lg-wt tx-cl-bl">{formatPrice}₽</Text>
    </Button>
  );
};

export default ShoppingCart;
