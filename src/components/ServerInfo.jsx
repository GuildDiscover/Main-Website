import React from "react";
import { Row, Col, Card, Typography, Divider } from "antd";
import { motion } from "framer-motion";
import JoinButton from "./Buttons/JoinButton";

const { Title, Text } = Typography;

const cardStyle = {
  background: "rgba(30, 41, 59, 0.8)",
  borderRadius: "20px",
  padding: "2rem",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(10px)",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  height: "100%",
  display: "flex",
  flexDirection: "column",
};

const textStyle = { 
  color: "#d1d1d1", 
  fontSize: "clamp(14px, 2vw, 16px)",
  lineHeight: 1.6,
};

const AnimatedCard = motion(Card);

const BasicInfo = ({ label, value }) => (
  <div style={BasicInfocontainerStyle}>
    <Text strong style={BasicInfolabelStyle}>
      {label}:
    </Text>{" "}
    <Text style={BasicInfoValueStyle}>{value}</Text>
  </div>
);

const BasicInfocontainerStyle = {
  marginBottom: "10px",
  padding: "12px",
  borderRadius: "6px",
  backgroundColor: "#1f1f1f",
  display: "flex",
  alignItems: "center",
  border: "1px solid #333",
  flexWrap: "wrap",
  gap: "8px",
};

const BasicInfolabelStyle = {
  minWidth: "120px",
  color: "#e0e0e0",
  fontSize: "clamp(12px, 1.5vw, 14px)",
};

const BasicInfoValueStyle = {
  color: "#4dabf5",
  fontSize: "clamp(12px, 1.5vw, 14px)",
  marginLeft: "8px",
  wordBreak: "break-word",
};

const ReviewSection = ({ title, content }) => (
  <>
    <Title level={3} style={{ 
      color: "#d1d1d1", 
      fontWeight: "bold", 
      paddingTop: "10px",
      fontSize: "clamp(16px, 2vw, 20px)",
    }}>
      {title}
    </Title>
    <Text style={textStyle}>{content}</Text>
    <br />
    <br />
  </>
);

const ServerInfo = ({ server }) => (
  <Row gutter={[24, 24]}>
    <Col xs={24} md={12}>
      <AnimatedCard
        bordered={false}
        style={cardStyle}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Title level={3} style={{ 
          color: "#fff",
          fontSize: "clamp(20px, 2.5vw, 24px)",
          marginBottom: "20px",
        }}>
          Server Review
        </Title>
        <BasicInfo label="Reviewed At" value={server.moderator_date} />
        <Text style={textStyle}>{server.reviewelement?.basic}</Text>
        <div style={{ textAlign: "left", marginTop: "20px" }}>
          {[
            { title: "First Impression", attribute: "firstimpression" },
            { title: "Community Activity & Engagement", attribute: "communityactivity" },
            { title: "Moderation & Safety", attribute: "moderation" },
            { title: "Staff Responsiveness", attribute: "staff" },
            { title: "Server Organization", attribute: "organization" },
            { title: "Event & Features", attribute: "event" },
            { title: "Niche & Uniqueness", attribute: "niche" },
          ].map((reviewObj, index) => (
            <ReviewSection
              key={index}
              title={reviewObj.title}
              content={server.reviewelement?.[reviewObj.attribute]}
            />
          ))}
        </div>
      </AnimatedCard>
    </Col>

    <Col xs={24} md={12}>
      <AnimatedCard
        bordered={false}
        style={cardStyle}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Title level={3} style={{ 
          color: "#fff",
          fontSize: "clamp(20px, 2.5vw, 24px)",
          marginBottom: "20px",
        }}>
          Server Information
        </Title>
        <Text style={textStyle}>{server.description}</Text>
        <br />
        <br />
        <div style={{ textAlign: "left" }}>
          {[
            { label: "Member Count", value: server.member_count },
            { label: "Owner ID", value: server.owner_id },
            { label: "Categories", value: server.categories.join(", ") },
            { label: "Created At", value: new Date(server.created_at).toLocaleDateString() },
            { label: "Boost Level", value: server.boost_level },
            { label: "Language", value: server.language },
            { label: "Country", value: server.country },
            { label: "Status", value: server.status },
          ].map((item, index) => (
            <BasicInfo key={index} label={item.label} value={item.value} />
          ))}
        </div>
        <Divider style={{ borderColor: "rgba(255, 255, 255, 0.1)" }} />
        <div style={{ 
          display: "flex", 
          flexWrap: "wrap", 
          gap: "10px",
          justifyContent: "center",
        }}>
          <JoinButton href={server.invite_link}>Join Server</JoinButton>
          {server.owner_contact_link?.discord && (
            <JoinButton href={server.owner_contact_link.discord}>Get in Touch</JoinButton>
          )}
        </div>
      </AnimatedCard>
    </Col>
  </Row>
);

export default ServerInfo;
