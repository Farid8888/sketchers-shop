import React from "react";
import { Flex, Typography, Image } from "antd";
import {
  FileOutlined,
  VideoCameraOutlined,
  InfoCircleOutlined,
  YoutubeFilled,
} from "@ant-design/icons";
import img from "../../assets/Brand.png";

const SubFooter = () => {
  const { Text } = Typography;
  return (
    <Flex gap={48} vertical className="sub-ft" align="center">
      <Text className="sub-tx">
        <FileOutlined className="sub-icn" /> PDF презентация
        <VideoCameraOutlined className="sub-icn" /> Видео инструкция
        <InfoCircleOutlined className="sub-icn" /> FAQ
        <Text className="icn-stl">
          <YoutubeFilled className="sub-icn" /> Мы на YouTube
        </Text>
        <Text className="sub-tx" style={{ marginLeft: "28px" }}>
          Политика конфиденциальности
        </Text>
        <Text className="sub-tx " style={{ marginLeft: "28px" }}>
          Лицензионное соглашение
        </Text>
      </Text>
      <Text
        className="pr-tx xs-sz sm-wt tx-col-ter"
        style={{ textAlign: "center" }}
      >
        Настоящая Политика обработки персональных данных разработана в
        соответствии с Конституцией Российской Федерации, Трудовым кодексом
        Российской Федерации, Гражданским кодексом Российской Федерации,
        Федеральным законом от 27 июля 2006 года 149-ФЗ "Об информации,
        информационных технологиях и о защите информации",
      </Text>
      <Flex gap={24} align="center" justify="space-between">
        <Image src={img} height={24} width={123.43}/>
        <Text className="tx-gr">Разработка платформы</Text>
      </Flex>
    </Flex>
  );
};

export default SubFooter;
