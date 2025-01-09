import React from "react";
import { Layout, Typography, Row, Col, Card, Avatar } from "antd";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const teamMembers = [
  {
    name: "Jst Tan",
    role: "Founder & Developer",
    description:
      "Jst Tan is the founder, a lead developer, and the main face of the Guildiscover platform, leading the Guildiscover team with vision and dedication. With a deep commitment to the community, Jst Tan ensures Guildiscover continues to thrive.",
    image: "https://i.ibb.co/bNky98t/logo.jpg",
  },
  {
    name: "Wakjawa",
    role: "Designer & Little Knowledge in Law",
    description:
      "Wakjawa is a talented designer at Guildiscover who also brings legal expertise as a law student. Alongside design work, Wakjawa assists with all law-related matters, supporting both creative and compliance areas.",
    image: "https://i.ibb.co/fQVS7MW/Wakjawa-Logo.png",
  },
  {
    name: "Ash1729",
    role: "Developer",
    description:
      "Ash1729 is a key web developer at Guildiscover and the primary architect behind the platform itself. Ash1729 stands out as one of the team’s top developers and is the most active member.",
    image: "https://i.ibb.co/fnJRhN5/Ash-Logo.png",
  },
  {
    name: "Lopexs",
    role: "Designer",
    description:
      "Lopexs is the creative mastermind behind Guildiscover’s visual identity, including the iconic original logo. As the lead designer, Lopexs brings a unique blend of talent and innovation, making them one of the top designers on the team.",
    image: "https://i.ibb.co/L0DYWd3/Lopexs-Logo.jpg",
  },
  {
    name: "Fallen Star",
    role: "Community Manager",
    description:
      "Fallen Star serves as the lead community manager at Guildiscover, overseeing server approvals and maintaining high standards across the directory. With a keen eye for detail and a passion for community building, Fallen Star is the driving force behind ensuring only the best servers make it onto the platform. ",
    image: "https://i.ibb.co/gMxrgPd/Fallen-Star-Logo.png",
  },
];

const Team = () => {
  return (
    <Content
      style={{
        // padding: "50px",
        // background: "linear-gradient(135deg, #6a11cb, #2575fc)",
        background: "black",
        padding: "50px 20px",
      }}
    >
      <div
        style={{
          textAlign: "center",
          padding: "40px",
          background: "linear-gradient(135deg, #6a11cb, #2575fc)",
          // background: "black",
          borderRadius: "15px",
          marginBottom: "50px",
        }}
      >
        <Title level={1} style={{ textAlign: "center", color: "#fff" }}>
          Meet the Team
        </Title>
        <Paragraph style={{ textAlign: "center", fontSize: "18px", color: "#fff" }}>
          Guildiscover is made by a passionate and motivated team, with the project is made with the
          assistance by all of the team members.
          <br></br>
          This project wouldn't be at its current version without the work by all of the team members.
          <br></br>
          We would like to give credits to all of the members that had contributed to the project.
        </Paragraph>
      </div>

      <Row gutter={[16, 16]} style={{ marginTop: "40px" }}>
        {teamMembers.map((member, index) => (
          <Col xs={24} sm={12} md={6} key={index}>
            <Card
              bordered={false}
              style={{
                backgroundColor: "#2d2e36",
                color: "#fff",
                textAlign: "center",
                borderRadius: "15px",
              }}
            >
              <Avatar size={100} src={member.image} />
              <Title level={3} style={{ color: "#fff", marginTop: "10px" }}>
                {member.name}
              </Title>
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
