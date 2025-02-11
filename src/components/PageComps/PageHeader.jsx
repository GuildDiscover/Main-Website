import React from "react";
import { motion } from "framer-motion";

const PageHeader = ({ children }) => {
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

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default PageHeader;
