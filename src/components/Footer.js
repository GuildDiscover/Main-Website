import React from "react";
import { Layout, Typography } from "antd";

const { Footer } = Layout;
const { Paragraph, Text } = Typography;

const AppFooter = () => {
  return (
    <Footer
      style={{
        backgroundColor: "black",
        color: "#d1d1d1",
        textAlign: "center",
        padding: "40px",
      }}
    >
      <Paragraph style={{ fontSize: "16px", marginBottom: "10px", color: "yellow" }}>
        Guildiscover is a server listing platform for everyone to discover amazing communities on Discord.
        Guildiscover is a place to promote and advertise Discord servers for free, while discovering new
        Discord servers too. Guildiscover is not affiliated with, endorsed or sponsored by Discord.
      </Paragraph>
      <Text style={{ fontSize: "16px", color: "cyan" }}>©️ Guildiscover 2024-2025. All Rights Reserved</Text>
    </Footer>
  );
};

export default AppFooter;
