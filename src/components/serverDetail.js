import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Typography, Rate } from "antd";
import Meta from "antd/es/card/Meta";
import { ServerContext } from "../context/ServerContext";
import { motion } from "framer-motion";
import ServerInfo from "./ServerInfo";

const { Title, Text } = Typography;
const AnimatedCard = motion(Card);

function ServerDetails() {
  const { id } = useParams(); // Get the server ID from the URL
  const { getServer } = useContext(ServerContext);

  const [server, setServer] = useState(null);

  useEffect(() => {
    setServer(getServer(parseInt(id)));
    return () => {};
  }, [getServer, id]);

  if (!server) {
    return <div>Server not found</div>;
  }

  return (
    <div
      style={{
        textAlign: "center",
        background: "black",
      }}
    >
      <div
        style={{
          padding: "2rem",
          background: "linear-gradient(135deg, #0f1a2e, #1a1b26)",
          color: "#e4e4e4",
          fontFamily: "Inter",
        }}
      >
        <div style={{ padding: "20px" }}>
          <AnimatedCard
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            style={{
              textAlign: "center",
              padding: "4rem 2rem",
              background: "linear-gradient(135deg, rgba(41, 63, 114, 0.7), rgba(24, 36, 65, 0.7))",
              borderRadius: "20px",
              marginBottom: "3rem",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
            }}
          >
            <Meta
              title={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <Title level={1} style={{ color: "#fff" }}>
                    {server.name}
                  </Title>
                </motion.div>
              }
              description={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <Text style={{ color: "#fff", fontSize: "18px" }}>{server.description}</Text>
                </motion.div>
              }
            />
            <br />
            <br />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Rate disabled value={server.rating} style={{ color: "yellow" }} />
            </motion.div>
          </AnimatedCard>

          <ServerInfo server={server} />
        </div>
      </div>
    </div>
  );
}

export default ServerDetails;
