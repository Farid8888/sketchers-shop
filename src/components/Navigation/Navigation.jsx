import React from "react";
import img1 from "../../assets/Frame 1308.png";
import {
  UnorderedListOutlined,
  BellOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import {
  Button,
  Divider,
  Image,
  Flex
} from "antd";
import ShoppingCart from "./ShoppingCart";
import FormNav from "./FormNav";
import AvatarStatus from "./AvatarStatus";


const Navigation = () => {
  return (
    <header className="header">
      <Flex gap={24} align='center' justify='space-between' className={'main-header'}>
        <Image src={img1} height={28} width={144}/>
        <Button className="btn-nav" icon={<UnorderedListOutlined />}>
          Меню
        </Button>
        <FormNav/>
        <BellOutlined
          style={{ color: "rgba(21, 81, 229, 1)", fontSize: "32px" }}
        />
        <Divider
          type="vertical"
          style={{
            height: "48px",
            "border": "1px solid rgba(226, 228, 240, 1)",
          }}
        />
        <HeartOutlined style={{ fontSize: "32px" }} />
        <ShoppingCart/>
        <AvatarStatus/>
      </Flex>
      
    </header>
  );
};

export default Navigation;
