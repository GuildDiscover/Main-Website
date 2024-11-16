import React from "react";
import { Layout, Typography, Row, Col, Card, Button, Divider } from "antd";
import { TeamOutlined, AppstoreOutlined, GlobalOutlined, CheckCircleOutlined } from "@ant-design/icons";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const Home = () => {
  return (
    <Content style={{ padding: "50px", backgroundColor: "#f0f2f5" }}>
      {/* Hero Section */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <Title level={1} style={{ fontWeight: "bold" }}>
          Welcome to Guildiscover! 
        </Title>
        <Paragraph style={{ fontSize: "22px", color: "#555"}}>
          Uncover awesome communities on your favourite platform for you on Guildiscover today. Discover, join, and connect with amazing servers tailored to your interests or your needs.
        </Paragraph>
        <a href="/server-list">
        <Button type="primary" size="large" style={{ marginTop: "20px" }}>
          Discover Communities
        </Button>
        </a>
        <a href="https://discord.gg/z7DC9tTyEH">
        <Button type="primary" size="large" style={{ marginTop: "20px", marginLeft: "10px" }}>
          Join Our Community
        </Button>
        </a>
      </div>

      {/* Features Section */}
      <div style={{ marginBottom: "50px" }}>
      <Divider style={{ borderColor: "#444", marginBottom: "50px" }}>
        <Title level={2} style={{ fontWeight: "bold" }}>
          Discover Our Features
        </Title>
      </Divider>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8}>
            <Card
              title="Discover Amazing Communities"
              bordered={false}
              cover={<AppstoreOutlined style={{ fontSize: "50px", color: "#1890ff", padding: "20px" }} />}
            >
              <Paragraph>
                There are many types of communities inside Guildiscover, from gaming to anime, and from writing to arts. Discover and browse through a diverse range of communities inside this directory to find the perfect match for you.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card
              title="Safety Ensured"
              bordered={false}
              cover={<TeamOutlined style={{ fontSize: "50px", color: "#1890ff", padding: "20px" }} />}
            >
              <Paragraph>All communities on the directory has been intensively scanned thoroughly by our moderation team. We try our best to ensure all communities here is safe for everyone to join and enjoy. All users could join servers </Paragraph>
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

      <div style={{ marginBottom: "50px" }}>
      <Divider style={{ borderColor: "#444", marginBottom: "50px" }}>
        <Title level={2} style={{ fontWeight: "bold" }}>
          Discover Top Communities
        </Title>
      </Divider>
      </div>

      <div style={{ marginBottom: "50px" }}>
      <Divider style={{ borderColor: "#444", marginBottom: "50px" }}>
        <Title level={2} style={{ fontWeight: "bold" }}>
          Discover New Communities
        </Title>
      </Divider>
      </div>

      <div style={{ marginBottom: "50px" }}>
      <Divider style={{ borderColor: "#444", marginBottom: "50px" }}>
      </Divider>
      </div>

      {/* Call-to-Action Section */}
      <div style={{ marginBottom: "50px", textAlign: "center" }}>
        <Title level={2} style={{ fontWeight: "bold" }}>
        Ready to Find Your Community?
        </Title>
      <Paragraph style={{ fontSize: "18px" }}>Join our community today and start exploring endless possibilities!</Paragraph>
        <Button type="primary" size="large" style={{ marginTop: "20px" }} icon={<CheckCircleOutlined />}>
          Join Now
        </Button>
      </div>
    </Content>
  );
};

export default Home;
