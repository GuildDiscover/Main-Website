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
        padding: "40px 20px",
        borderRadius: "20px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
        width: "100%",
        boxSizing: "border-box",
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
            fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
          }}
        >
          Discover Our Features
        </Title>
      </motion.div>
      <Row gutter={[24, 24]} justify="center">
        {features.map((feature, index) => (
          <Col xs={24} sm={24} md={12} lg={8} key={index}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
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
                  transition: "all 0.3s ease",
                }}
                bodyStyle={{
                  padding: "20px",
                }}
              >
                <Card.Meta
                  title={
                    <span 
                      style={{ 
                        color: "#fff", 
                        fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
                        marginBottom: "10px",
                        display: "block",
                      }}
                    >
                      {feature.title}
                    </span>
                  }
                  description={
                    <Paragraph 
                      style={{ 
                        color: "rgba(255,255,255,0.8)",
                        fontSize: "clamp(0.9rem, 2vw, 1rem)",
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                    >
                      {feature.description}
                    </Paragraph>
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

