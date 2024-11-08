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
      <Paragraph style={{ textAlign: "center", color: "#555" }}>
        Our platform is dedicated to helping you find and join communities that resonate with your interests.
      </Paragraph>

      <Row gutter={[16, 16]} style={{ marginTop: "40px" }}>
        <Col xs={24} md={12}>
          <Card title="Our Mission" bordered={false}>
            <Paragraph>
              To create a welcoming space where users can connect, share, and grow with communities worldwide.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title="Our Vision" bordered={false}>
            <Paragraph>
              To empower individuals by providing a platform where they can find like-minded people and thrive
              together.
            </Paragraph>
          </Card>
        </Col>
      </Row>
    </Content>
  );
};

export default About;
