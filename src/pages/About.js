import React from "react";
import { Typography, Row, Col } from "antd";
import {
  RocketOutlined,
  TeamOutlined,
  StarOutlined,
  SafetyOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import "./About.css";

const { Title, Paragraph } = Typography;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

const About = () => {
  return (
    <motion.div className="about-container" variants={containerVariants} initial="hidden" animate="visible">
      {/* Hero Section */}
      <motion.div className="about-header" variants={headerVariants}>
        <Title level={1} style={{ color: "#fff", fontWeight: "bold" }}>
          Welcome to Guildiscover
        </Title>
        <Paragraph style={{ fontSize: "18px", maxWidth: "700px", margin: "0 auto", color: "#f0f0f0" }}>
          Discover vibrant communities on Discord. Guildiscover connects users and server owners, helping you
          explore amazing spaces where you truly belong.
        </Paragraph>
      </motion.div>

      {/* About Section */}
      <Row gutter={[24, 24]} justify="center" style={{ marginBottom: "50px" }}>
        <Col xs={24} md={12}>
          <motion.div className="about-card" variants={cardVariants} whileHover="hover">
            <div className="text-center">
              <RocketOutlined style={{ fontSize: "50px", color: "#6a11cb", marginBottom: "20px" }} />
            </div>
            <Title level={3} style={{ color: "#fff" }} className="text-center">
              Our Mission
            </Title>
            <Paragraph style={{ textAlign: "center", color: "#d1d1d1", fontSize: "16px" }}>
              We aim to create a platform where everyone can discover communities tailored to their interests
              effortlessly and confidently. A platform where everyone can discover amazing communities in
              their interests, on the platform. We aim to stop the Dead Internet Theory, by assisting people
              to connect with each other on amazing communities tailored to their interests, on Guildiscover
              today.
            </Paragraph>
          </motion.div>
        </Col>
        <Col xs={24} md={12}>
          <motion.div className="about-card" variants={cardVariants} whileHover="hover">
            <div className="text-center">
              <TeamOutlined style={{ fontSize: "50px", color: "#2575fc", marginBottom: "20px" }} />
            </div>
            <Title level={3} style={{ color: "#fff" }} className="text-center">
              Our Vision
            </Title>
            <Paragraph style={{ textAlign: "center", color: "#d1d1d1", fontSize: "16px" }}>
              We aim to build a future where all communities could thrive, and members could participate in
              communities suited to their interests. We planned to build a connected world where communities
              thrive, and people find spaces that feel like home on the internet. Our vision is to build a
              place where everyone could meet new friends on the Internet, through our platform to discover
              communities.
            </Paragraph>
          </motion.div>
        </Col>
      </Row>

      {/* Specialty Section */}
      <motion.div className="about-divider" variants={cardVariants}>
        <Title level={2} style={{ color: "yellow" }}>
          What Makes Us Special
        </Title>
      </motion.div>
      <Row gutter={[24, 24]} justify="center">
        <Col xs={24} sm={12} lg={8}>
          <motion.div className="about-card" variants={cardVariants} whileHover="hover">
            <div className="text-center">
              <StarOutlined style={{ fontSize: "50px", color: "#f8b400", marginBottom: "20px" }} />
            </div>
            <Title level={4} style={{ color: "#fff" }} className="text-center">
              Free Publicity
            </Title>
            <Paragraph style={{ textAlign: "center", color: "#d1d1d1", fontSize: "16px" }}>
              Guildiscover is a place for you to publicise your Discord servers and communities alike.
              Guildiscover assist you to promote your servers to as many users as possible, to ensure that
              your server get the growth it needed. Promote your server to a global audience and reach
              thousands of users with ease through Guildiscover.
            </Paragraph>
          </motion.div>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <motion.div className="about-card" variants={cardVariants} whileHover="hover">
            <div className="text-center">
              <SafetyOutlined style={{ fontSize: "50px", color: "#3eb489", marginBottom: "20px" }} />
            </div>
            <Title level={4} style={{ color: "#fff" }} className="text-center">
              Good Moderation
            </Title>
            <Paragraph style={{ textAlign: "center", color: "#d1d1d1", fontSize: "16px" }}>
              Guildiscover has a good moderation team and policy. We heavily monitored to ensure high-quality
              listings and a safe experience for all users. Guildiscover team reviewed and filtered through
              each and all communities carefully and strictly, which means our platform only have server that
              is safe that had passed our review.
            </Paragraph>
          </motion.div>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <motion.div className="about-card" variants={cardVariants} whileHover="hover">
            <div className="text-center">
              <SearchOutlined style={{ fontSize: "50px", color: "#ff7a59", marginBottom: "20px" }} />
            </div>
            <Title level={4} style={{ color: "#fff" }} className="text-center">
              Easy Discovery
            </Title>
            <Paragraph style={{ textAlign: "center", color: "#d1d1d1", fontSize: "16px" }}>
              Discover thousands of amazing communities across multiple platforms through Guildiscover today.
              With an unique approach, we made all server to be discover easily. We made our platform for
              everyone to discover amazing communities with ease on the platform today.
            </Paragraph>
          </motion.div>
        </Col>
      </Row>
    </motion.div>
  );
};

export default About;
