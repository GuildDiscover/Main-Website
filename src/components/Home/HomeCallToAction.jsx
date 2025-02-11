import React from "react";
import { Typography, Button } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

const { Title, Paragraph } = Typography;

const HomeCallToAction = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        textAlign: "center",
        padding: "60px 40px",
        background: "linear-gradient(135deg, rgba(106, 17, 203, 0.9), rgba(37, 117, 252, 0.9))",
        borderRadius: "20px",
        marginBottom: "70px",
        marginTop: "100px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <Title level={2} style={{ color: "#fff", fontSize: "2.5rem", marginBottom: "20px" }}>
          Ready to Find Your Community?
        </Title>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <Paragraph style={{ fontSize: "1.3rem", color: "#fff", marginBottom: "30px" }}>
          Join today and start exploring endless possibilities!
        </Paragraph>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
      >
        <Button
          type="primary"
          size="large"
          icon={<CheckCircleOutlined />}
          style={{
            fontSize: "1.2rem",
            height: "50px",
            paddingLeft: "30px",
            paddingRight: "30px",
            background: "#4CAF50",
            borderColor: "#4CAF50",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#45a049";
            e.currentTarget.style.borderColor = "#45a049";
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 6px 8px rgba(0,0,0,0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#4CAF50";
            e.currentTarget.style.borderColor = "#4CAF50";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
          }}
        >
          Join Now
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default HomeCallToAction;
