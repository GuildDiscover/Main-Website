import React from "react";
import { Layout, Typography } from "antd";

const { Footer } = Layout;
const { Paragraph, Text } = Typography;

const AppFooter = () => {
  return (
    <Footer
      style={{
        backgroundColor: "#000",
        color: "#d1d1d1",
        textAlign: "center",
        padding: "20px 10px",
      }}
    >
      <Paragraph style={{ fontSize: "14px", marginBottom: "10px", color: "#fff" }}>
        Guildiscover is a server listing platform for everyone to discover amazing communities on Discord.
        Guildiscover is a place to promote and advertise Discord servers for free, while discovering new
        Discord servers too. Guildiscover is not affiliated with, endorsed or sponsored by Discord.
      </Paragraph>
      <Text style={{ fontSize: "12px", color: "#aaa" }}>©️ Guildiscover 2024. All Rights Reserved</Text>
    </Footer>
  );
};

export default AppFooter;
