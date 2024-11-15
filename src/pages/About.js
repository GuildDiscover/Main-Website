import React from "react";
import { Layout, Typography, Row, Col, Card, Divider } from "antd";
import {
  RocketOutlined,
  TeamOutlined,
  StarOutlined,
  SafetyOutlined,
  SearchOutlined,
} from "@ant-design/icons";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const About = () => {
  return (
    <Content style={{ backgroundColor: "#1e1f26", color: "#fff", padding: "50px 20px" }}>
      {/* Hero Section */}
      <div
        style={{
          textAlign: "center",
          padding: "40px",
          background: "linear-gradient(135deg, #6a11cb, #2575fc)",
          borderRadius: "15px",
          marginBottom: "50px",
        }}
      >
        <Title level={1} style={{ color: "#fff", fontWeight: "bold", fontSize: "3rem" }}>
          Welcome to Guildiscover
        </Title>
        <Paragraph style={{ fontSize: "18px", maxWidth: "700px", margin: "0 auto", color: "#f0f0f0" }}>
          Discover vibrant communities on Discord. Guildiscover connects users and server owners, helping you
          explore amazing spaces where you truly belong.
        </Paragraph>
      </div>

      {/* About Section */}
      <Row gutter={[24, 24]} justify="center" style={{ marginBottom: "50px" }}>
        <Col xs={24} md={12}>
          <Card
            bordered={false}
            style={{
              backgroundColor: "#2d2e36",
              color: "#fff",
              textAlign: "center",
              padding: "30px",
              borderRadius: "15px",
            }}
          >
            <RocketOutlined style={{ fontSize: "50px", color: "#6a11cb", marginBottom: "20px" }} />
            <Title level={3} style={{ color: "#fff" }}>
              Our Mission
            </Title>
            <Paragraph style={{ textAlign: "center", color: "#d1d1d1", fontSize: "16px" }}>
              We aim to create a platform where everyone can discover communities tailored to their interests
              effortlessly and confidently.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card
            bordered={false}
            style={{
              backgroundColor: "#2d2e36",
              color: "#fff",
              textAlign: "center",
              padding: "30px",
              borderRadius: "15px",
            }}
          >
            <TeamOutlined style={{ fontSize: "50px", color: "#2575fc", marginBottom: "20px" }} />
            <Title level={3} style={{ color: "#fff" }}>
              Our Vision
            </Title>
            <Paragraph style={{ textAlign: "center", color: "#d1d1d1", fontSize: "16px" }}>
              Building a connected world where communities thrive, and people find spaces that feel like home
              on the internet.
            </Paragraph>
          </Card>
        </Col>
      </Row>

      {/* Specialty Section */}
      <Divider style={{ borderColor: "#444", marginBottom: "50px" }}>
        <Title level={2} style={{ color: "#fff" }}>
          What Makes Us Special
        </Title>
      </Divider>
      <Row gutter={[24, 24]} justify="center">
        <Col xs={24} sm={12} lg={8}>
          <Card
            bordered={false}
            style={{
              backgroundColor: "#292a33",
              color: "#fff",
              textAlign: "center",
              padding: "30px",
              borderRadius: "15px",
            }}
          >
            <StarOutlined style={{ fontSize: "50px", color: "#f8b400", marginBottom: "20px" }} />
            <Title level={4} style={{ color: "#fff" }}>
              Free Publicity
            </Title>
            <Paragraph style={{ textAlign: "center", color: "#d1d1d1", fontSize: "16px" }}>
              Promote your server to a global audience and reach thousands of users with ease.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Card
            bordered={false}
            style={{
              backgroundColor: "#292a33",
              color: "#fff",
              textAlign: "center",
              padding: "30px",
              borderRadius: "15px",
            }}
          >
            <SafetyOutlined style={{ fontSize: "50px", color: "#3eb489", marginBottom: "20px" }} />
            <Title level={4} style={{ color: "#fff" }}>
              Good Moderation
            </Title>
            <Paragraph style={{ textAlign: "center", color: "#d1d1d1", fontSize: "16px" }}>
              Our platform is monitored to ensure high-quality listings and a safe experience for all users.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Card
            bordered={false}
            style={{
              backgroundColor: "#292a33",
              color: "#fff",
              textAlign: "center",
              padding: "30px",
              borderRadius: "15px",
            }}
          >
            <SearchOutlined style={{ fontSize: "50px", color: "#ff7a59", marginBottom: "20px" }} />
            <Title level={4} style={{ color: "#fff" }}>
              Easy Discovery
            </Title>
            <Paragraph style={{ textAlign: "center", color: "#d1d1d1", fontSize: "16px" }}>
              Explore thousands of communities quickly with our intuitive and seamless interface.
            </Paragraph>
          </Card>
        </Col>
      </Row>
    </Content>
  );
};

export default About;
