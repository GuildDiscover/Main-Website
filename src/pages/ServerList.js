import React from "react";
import { Layout, Typography, Row, Col } from "antd";
import serverData from "../data/serverData.json"; // Assuming you have server data in JSON
import ServerCard from "../components/serverCard";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const Servers = () => {
  return (
    <Content style={{ padding: "50px", backgroundColor: "#f0f2f5" }}>
      <Title level={2} style={{ textAlign: "center" }}>
        Explore Servers
      </Title>
      <Paragraph style={{ textAlign: "center", color: "#555", fontSize: "20px" }}>
        Discover a wide range of communities to join and connect with like-minded people.
      </Paragraph>

      <Row gutter={[16, 16]} style={{ marginTop: "30px" }}>
        {serverData.map((server) => (
          <Col xs={24} sm={12} md={8} lg={6} key={server.id}>
            <ServerCard server={server} />
          </Col>
        ))}
      </Row>
    </Content>
  );
};

export default Servers;
