import React, { useState, useEffect, useContext } from "react";
import { Typography, Row, Col, Input, Spin } from "antd";
import { motion } from "framer-motion";
import ServerCard from "../components/serverCard";
import { ServerContext } from "../context/ServerContext";
import "./Servers.css";

const { Title, Paragraph } = Typography;
const { Search } = Input;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Servers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { servers, filterServers } = useContext(ServerContext);

  useEffect(() => {
    if (searchTerm.length > 2) {
      filterServers(searchTerm);
    } else {
      filterServers(null);
    }
  }, [searchTerm, filterServers]);

  if (servers === null) {
    return (
      <div className="servers-loading">
        <Spin size="large" tip="Loading servers..." />
      </div>
    );
  }

  return (
    <motion.div className="servers-container" variants={containerVariants} initial="hidden" animate="visible">
      <motion.div className="servers-hero" variants={itemVariants}>
        <Title level={1} style={{ color: "#fff" }}>
          Explore Servers
        </Title>
        <Paragraph style={{ color: "#f0f0f0", fontSize: "18px" }}>
          Discover many amazing and wide range of amazing communities on the Discord platform. A place to find
          the best suited community to you, on our wide range of communities to join and connect with
          like-minded people.
        </Paragraph>

        <div className="search-container">
          <Search
            placeholder="Search for servers"
            enterButton
            size="large"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </motion.div>

      <Row gutter={[16, 16]} style={{ marginTop: "30px" }}>
        {servers.length > 0 ? (
          servers.map((server) => (
            <Col xs={24} sm={12} md={8} lg={6} key={server.id}>
              <motion.div variants={itemVariants} style={{ height: "100%" }}>
                <ServerCard server={server} />
              </motion.div>
            </Col>
          ))
        ) : (
          <motion.div className="no-servers-found" variants={itemVariants}>
            No Servers Found
          </motion.div>
        )}
      </Row>
    </motion.div>
  );
};

export default Servers;
