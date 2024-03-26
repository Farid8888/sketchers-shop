import React from "react";
import {Flex,Typography} from 'antd'


const ListBody = ({name,subName}) => {
    const {Text} = Typography
  return (
    <Flex gap={46}>
      <Flex gap={14} vertical>
        <Text className="pr-tx sm-sz lg-wt tx-col-pr">{name}</Text>
        <Text className="pr-tx xs-sz sm-wt tx-col-ter">{subName}</Text>
      </Flex>
    </Flex>
  );
};

export default ListBody;
