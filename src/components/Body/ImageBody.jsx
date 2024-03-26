import React from "react";
import {Flex,Button,Image} from 'antd'
import {LeftOutlined,RightOutlined} from '@ant-design/icons'

const ImageBody = ({imgArr}) => {
  return (
    <Flex className="mt-2" gap="middle">
      <Button className="btn-scnd" icon={<LeftOutlined />} />
      {imgArr.map(img=>{
        return <Image key={img} src={img} width={64}/>
      })}
      <Button className="btn-scnd" icon={<RightOutlined />} />
    </Flex>
  );
};

export default ImageBody;
