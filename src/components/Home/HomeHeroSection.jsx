import React, { useState } from "react";
import { Typography, Button } from "antd";
import { motion } from "framer-motion";

const { Title, Paragraph } = Typography;

const HomeHeroSection = () => {
  const [primaryHovered, setPrimaryHovered] = useState(false);
  const [secondaryHovered, setSecondaryHovered] = useState(false);

  const buttonBaseStyle = {
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
    padding: "0 30px",
    height: "50px",
    fontSize: "1.1rem",
    marginRight: "15px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "500",
  };

  const primaryButtonStyle = {
    ...buttonBaseStyle,
    background: "#4CAF50",
    borderColor: "#4CAF50",
    color: "#fff",
  };

  const secondaryButtonStyle = {
    ...buttonBaseStyle,
    background: "transparent",
    borderColor: "#fff",
    color: "#fff",
    marginRight: 0,
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        textAlign: "center",
        padding: "80px 40px",
        background: "linear-gradient(135deg, rgba(79, 53, 176, 0.8), rgba(41, 100, 205, 0.8))",
        borderRadius: "20px",
        marginBottom: "70px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <Title
          level={1}
          style={{
            fontWeight: "800",
            color: "#fff",
            fontSize: "3.5rem",
            marginBottom: "20px",
            textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          Welcome to Guildiscover!
        </Title>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <Paragraph
          style={{
            fontSize: "1.2rem",
            color: "#fff",
            maxWidth: "800px",
            margin: "0 auto 30px",
            lineHeight: "1.6",
          }}
        >
          Uncover awesome communities on your favourite platform with Guildiscover today. Discover, join, and
          connect with amazing servers tailored to your interests and needs.
        </Paragraph>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        style={buttonContainerStyle}
      >
        <a href="/server-list" style={{ textDecoration: "none" }}>
          <Button
            type="primary"
            size="large"
            style={{
              ...primaryButtonStyle,
              ...(primaryHovered
                ? {
                    background: "#45a049",
                    borderColor: "#45a049",
                    transform: "translateY(-2px)",
                    boxShadow: "0 6px 8px rgba(0, 0, 0, 0.2)",
                  }
                : {}),
            }}
            onMouseEnter={() => setPrimaryHovered(true)}
            onMouseLeave={() => setPrimaryHovered(false)}
          >
            Discover Communities
          </Button>
        </a>
        <a href="https://discord.gg/z7DC9tTyEH" style={{ textDecoration: "none" }}>
          <Button
            size="large"
            style={{
              ...secondaryButtonStyle,
              ...(secondaryHovered
                ? {
                    background: "rgba(255, 255, 255, 0.1)",
                    transform: "translateY(-2px)",
                    boxShadow: "0 6px 8px rgba(0, 0, 0, 0.2)",
                  }
                : {}),
            }}
            onMouseEnter={() => setSecondaryHovered(true)}
            onMouseLeave={() => setSecondaryHovered(false)}
          >
            Join Our Community
          </Button>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default HomeHeroSection;
