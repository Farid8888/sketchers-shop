import React from "react";
import { Flex, Typography } from "antd";

const LeftSide = ({ top, bottom }) => {
  const { Text } = Typography;
  return (
    <Flex className="ft-vt" gap={16} vertical>
      <Text className="hang  text-pr">{top}</Text>
      <Text className="pr-tx xs-sz sm-wt">{bottom}</Text>
    </Flex>
  );
};

export default LeftSide;
