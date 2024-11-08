import React from "react";
import { Layout, Typography, Row, Col, Card, Avatar } from "antd";

const { Content } = Layout;
const { Title } = Typography;

const teamMembers = [
  { name: "Alice Johnson", role: "CEO", image: "https://example.com/alice.jpg" },
  { name: "Bob Smith", role: "CTO", image: "https://example.com/bob.jpg" },
  { name: "Carol Williams", role: "Lead Developer", image: "https://example.com/carol.jpg" },
  { name: "David Brown", role: "Product Manager", image: "https://example.com/david.jpg" },
];

const Team = () => {
  return (
    <Content style={{ padding: "50px", backgroundColor: "#f0f2f5" }}>
      <Title level={2} style={{ textAlign: "center" }}>
        Meet the Team
      </Title>

      <Row gutter={[16, 16]} style={{ marginTop: "40px" }}>
        {teamMembers.map((member, index) => (
          <Col xs={24} sm={12} md={6} key={index}>
            <Card style={{ textAlign: "center" }} bordered={false}>
              <Avatar size={100} src={member.image} />
              <Title level={4}>{member.name}</Title>
              <p>{member.role}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </Content>
  );
};

export default Team;
