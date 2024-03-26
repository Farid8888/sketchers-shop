import React from "react";
import {Flex,Typography,Button} from 'antd'


const RightSide = () => {
    const {Text} = Typography
  return (
    <Flex className="ft-rg" gap={32} justify="space-between" align="center">
      <Text className="pr-tx mm-sz lg-wt text-col-pr">Вакансии</Text>
      <Text className="pr-tx mm-sz lg-wt text-col-pr">Блог</Text>
      <Text className="pr-tx mm-sz lg-wt text-col-pr">Акции</Text>
      <Button className="ft-btn">
        <Text className="pr-tx sm-sz ml-wt tx-cl-bl">Предложить идею</Text>
      </Button>
    </Flex>
  );
};

export default RightSide;
