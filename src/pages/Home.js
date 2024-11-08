import React from "react";
import { Layout, Row, Col, Typography, Button, Card } from "antd";
import { TeamOutlined, AppstoreOutlined, GlobalOutlined, CheckCircleOutlined } from "@ant-design/icons";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const Home = () => {
  return (
    <Content style={{ padding: "50px", backgroundColor: "#f0f2f5" }}>
      {/* Hero Section */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <Title level={1} style={{ fontWeight: "bold" }}>
          Welcome to MyApp
        </Title>
        <Paragraph style={{ fontSize: "18px", color: "#555" }}>
          Discover, join, and connect with amazing servers tailored to your interests.
        </Paragraph>
        <Button type="primary" size="large" style={{ marginTop: "20px" }}>
          Get Started
        </Button>
      </div>

      {/* Features Section */}
      <div style={{ marginBottom: "50px" }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8}>
            <Card
              title="Discover Communities"
              bordered={false}
              cover={<AppstoreOutlined style={{ fontSize: "50px", color: "#1890ff", padding: "20px" }} />}
            >
              <Paragraph>
                Browse through a diverse range of communities to find the perfect match for you.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card
              title="Connect with Friends"
              bordered={false}
              cover={<TeamOutlined style={{ fontSize: "50px", color: "#1890ff", padding: "20px" }} />}
            >
              <Paragraph>Join servers with your friends and meet new people from around the world.</Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card
              title="Safe & Secure"
              bordered={false}
              cover={<GlobalOutlined style={{ fontSize: "50px", color: "#1890ff", padding: "20px" }} />}
            >
              <Paragraph>We prioritize your security and provide a trusted platform for all users.</Paragraph>
            </Card>
          </Col>
        </Row>
      </div>

      {/* Call-to-Action Section */}
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <Title level={2}>Ready to Find Your Community?</Title>
        <Paragraph>Join today and start exploring endless possibilities!</Paragraph>
        <Button type="primary" size="large" style={{ marginTop: "20px" }} icon={<CheckCircleOutlined />}>
          Join Now
        </Button>
      </div>
    </Content>
  );
};

export default Home;
