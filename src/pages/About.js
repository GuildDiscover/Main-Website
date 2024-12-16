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
    <Content
      style={{ background: "linear-gradient(135deg, #6a11cb, #2575fc)", color: "#fff", padding: "50px 20px" }}
    >
      {/* Hero Section */}
      <div
        style={{
          textAlign: "center",
          padding: "40px",
          // background: "linear-gradient(135deg, #6a11cb, #2575fc)",
          background: "black",
          borderRadius: "15px",
          marginBottom: "50px",
        }}
      >
        <Title level={1} style={{ color: "#fff", fontWeight: "bold" }}>
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
              effortlessly and confidently. A platform where everyone can discover amazing communities in
              their interests, on the platform. We aim to stop the Dead Internet Theory, by assisting people
              to connect with each other on amazing communities tailored to their interests, on Guildiscover
              today.
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
              We aim to build a future where all communities could thrive, and members could participate in
              communities suited to their interests. We planned to build a connected world where communities
              thrive, and people find spaces that feel like home on the internet. Our vision is to build a
              place where everyone could meet new friends on the Internet, through our platform to discover
              communities.
            </Paragraph>
          </Card>
        </Col>
      </Row>

      {/* Specialty Section */}
      <Divider style={{ borderColor: "#444", marginBottom: "50px" }}>
        <Title level={2} style={{ color: "yellow" }}>
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
              Guildiscover is a place for you to publicise your Discord servers and communities alike.
              Guildiscover assist you to promote your servers to as many users as possible, to ensure that
              your server get the growth it needed. Promote your server to a global audience and reach
              thousands of users with ease through Guildiscover.
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
              Guildiscover has a good moderation team and policy. We heavily monitored to ensure high-quality
              listings and a safe experience for all users. Guildiscover team reviewed and filtered through
              each and all communities carefully and strictly, which means our platform only have server that
              is safe that had passed our review.
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
              Discover thousands of amazing communities across multiple platforms through Guildiscover today.
              With an unique approach, we made all server to be discover easily. We made our platform for
              everyone to discover amazing communities with ease on the platform today.
            </Paragraph>
          </Card>
        </Col>
      </Row>
    </Content>
  );
};

export default About;
