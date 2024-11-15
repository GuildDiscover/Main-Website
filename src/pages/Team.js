import React from "react";
import { Layout, Typography, Row, Col, Card, Avatar } from "antd";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const teamMembers = [
  { name: "Jst Tan", role: "Founder & Developer", description: "Jst Tan is the founder, a lead developer, and the main face of the Guildiscover platform, leading the Guildiscover team with vision and dedication. With a deep commitment to the community, Jst Tan ensures Guildiscover continues to thrive.", image: "https://example.com/alice.jpg" },
  { name: "Wakjawa", role: "Designer & Law Assistant", description: "Wakjawa is a talented designer at Guildiscover who also brings legal expertise as a law student. Alongside design work, Wakjawa assists with all law-related matters, supporting both creative and compliance areas.", image: "https://example.com/bob.jpg" },
  { name: "Ash1729", role: "Developer", description: "Ash1729 is a key web developer at Guildiscover and the primary architect behind the platform itself. Ash1729 stands out as one of the team’s top developers and is the most active member.", image: "https://example.com/carol.jpg" },
  { name: "Lopexs", role: "Designer", description: "Lopexs is the creative mastermind behind Guildiscover’s visual identity, including the iconic original logo. As the lead designer, Lopexs brings a unique blend of talent and innovation, making them one of the top designers on the team.", image: "https://example.com/david.jpg" },
  { name: "Fallen Star", role: "Community Manager", description:"Fallen Star serves as the lead community manager at Guildiscover, overseeing server approvals and maintaining high standards across the directory. With a keen eye for detail and a passion for community building, Fallen Star is the driving force behind ensuring only the best servers make it onto the platform. ", image: "https://example.com/david.jpg" },
];

const Team = () => {
  return (
    <Content style={{ padding: "50px", backgroundColor: "#f0f2f5" }}>
      <Title level={2} style={{ textAlign: "center" }}>
        Meet the Team
      </Title>
      <Paragraph style={{ textAlign: "center", color: "#555", fontSize: "16px" }}>
      Guildiscover is made by a passionate and motivated team, with the project is made with the assistance by all of the team members. This project wouldn't be at its current version without the work by all of the team members. We would like to give credits to all of the members that had contributed to the project. 
      </Paragraph>

      <Row gutter={[16, 16]} style={{ marginTop: "40px" }}>
        {teamMembers.map((member, index) => (
          <Col xs={24} sm={12} md={6} key={index}>
            <Card style={{ textAlign: "center" }} bordered={false}>
              <Avatar size={100} src={member.image} />
              <Title level={4}>{member.name}</Title>
              <h3>{member.role}</h3>
              <p>{member.description}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </Content>
  );
};

export default Team;
