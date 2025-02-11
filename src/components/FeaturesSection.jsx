import React from "react";
import { Row, Col, Card, Typography } from "antd";
import { motion } from "framer-motion";

const { Title, Paragraph } = Typography;

const FeaturesSection = ({ features }) => {
  return (
    <div
      style={{
        marginBottom: "70px",
        background: "linear-gradient(135deg, rgba(41, 63, 114, 0.7), rgba(24, 36, 65, 0.7))",
        padding: "40px",
        borderRadius: "20px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Title
          level={2}
          style={{
            fontWeight: "bold",
            color: "#fff",
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          Discover Our Features
        </Title>
      </motion.div>
      <Row gutter={[32, 32]}>
        {features.map((feature, index) => (
          <Col xs={24} sm={24} md={8} key={index}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <Card
                hoverable
                cover={feature.icon}
                style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  borderRadius: "15px",
                  overflow: "hidden",
                  border: "none",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Card.Meta
                  title={<span style={{ color: "#fff", fontSize: "1.5rem" }}>{feature.title}</span>}
                  description={
                    <Paragraph style={{ color: "rgba(255,255,255,0.8)" }}>{feature.description}</Paragraph>
                  }
                />
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FeaturesSection;
