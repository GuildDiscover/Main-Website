import React from "react";
import { Layout, Typography, Row, Col, Card } from "antd";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const About = () => {
  return (
    <Content style={{ padding: "50px", backgroundColor: "#f0f2f5" }}>
      <Title level={2} style={{ textAlign: "center" }}>
        About Us
      </Title>
      <Paragraph style={{ textAlign: "center", color: "#555", fontSize: "16px" }}>
      Guildiscover is a server listing directory website. Guildiscover is a place for you to discover amazing communities of your interest alike. Guildiscover is a place for all Discord users, for server owner and users alike.
      </Paragraph>
      <Row gutter={[16, 16]} style={{ marginTop: "40px" }}>
        <Col xs={24} md={12}>
          <Card title="Our Mission" bordered={false}>
            <Paragraph>
              Guildiscover mission is to build 
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title="Our Vision" bordered={false}>
            <Paragraph>
              Guildiscover vision is to create a place where all members could discover amazing communities suited for their interests in the Internet. 
            </Paragraph>
          </Card>
        </Col>
      </Row>
      <br></br>
      <hr></hr>
      <br></br>
      <Title level={2} style={{ textAlign: "center" }}>
        Our Speciality 
      </Title>
      <Paragraph style={{ textAlign: "center", color: "#555", fontSize: "16px" }}>
      Guildiscover is a server listing directory website. Guildiscover is a place for you to discover amazing communities of your interest alike. Guildiscover is a place for all Discord users, for server owner and users alike.
      </Paragraph>
      <Row gutter={[16, 16]} style={{ marginTop: "40px" }}>
        <Col xs={24} md={12}>
          <Card title="Free Publicity" bordered={false}>
            <Paragraph>
              Guildiscover is a place for you to publicise your communities to all of our users. 
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title="Good Moderation" bordered={false}>
            <Paragraph>
              Guildiscover 
            </Paragraph>
          </Card>
        </Col>
      </Row>
    </Content>
  );
};

export default About;
