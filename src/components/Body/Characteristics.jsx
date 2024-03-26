import React from "react";
import {Flex,Typography} from 'antd'

const Characteristics = ({txLeftFs,txRightFs,txLeftscd,txRightscd}) => {
    const {Text} = Typography
  return (
    <Flex gap={32} align="center" justify="space-between">
      <Flex vertical gap={8} className="char">
        <Text className="pr-tx sm-sz lg-wt tex-pr">{txLeftFs}</Text>
        <Text className="pr-tx xs-sz sm-wt tx-col-ter">{txRightFs}</Text>
      </Flex>
      <Flex vertical gap={8} className="char">
        <Text className="pr-tx sm-sz lg-wt tex-pr">{txLeftscd}</Text>
        <Text className="pr-tx xs-sz sm-wt tx-col-ter">{txRightscd}</Text>
      </Flex>
    </Flex>
  );
};

export default Characteristics;
