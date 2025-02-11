import React from "react";
import { Typography, Row, Col, Avatar } from "antd";
import { motion } from "framer-motion";
import "./Team.css";

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
    role: "Designer",
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const headerVariants = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const Team = () => {
  return (
    <motion.div className="team-container" variants={containerVariants} initial="hidden" animate="visible">
      {/* Header Section */}
      <motion.div className="team-header" variants={headerVariants}>
        <Title level={2} style={{ color: "#fff", marginBottom: "1rem" }}>
          Meet the Team
        </Title>
        <Paragraph style={{ color: "#d1d5db", fontSize: "1.2rem" }}>
          Guildiscover is made by a passionate and motivated team, with the project is made with the
          assistance by all of the team members.
          <br />
          This project wouldn't be at its current version without the work by all of the team members.
          <br />
          We would like to give credits to all of the members that had contributed to the project.
        </Paragraph>
      </motion.div>

      {/* Team Members Section */}
      <Row gutter={[24, 24]} justify="center">
        {teamMembers.map((member, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <motion.div className="team-card" variants={cardVariants} whileHover="hover">
              <Avatar size={80} src={member.image} alt={member.name} />
              <Title level={4} style={{ color: "#60a5fa", marginTop: "1rem" }}>
                {member.name}
              </Title>
              <Paragraph style={{ color: "#d1d5db" }}>{member.role}</Paragraph>
              <Paragraph style={{ color: "#8b9cc4" }}>{member.description}</Paragraph>
            </motion.div>
          </Col>
        ))}
      </Row>
    </motion.div>
  );
};

export default Team;
