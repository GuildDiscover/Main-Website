import React from "react";
import { Card, Button, Tag, Typography } from "antd";
import { Link } from "react-router-dom";
import { UsergroupAddOutlined } from "@ant-design/icons";

const { Paragraph } = Typography;

const ServerCard = ({ server }) => {
  // Define tag colors to add variety
  const tagColors = ["magenta", "green", "volcano", "blue", "purple", "orange"];

  const customButtonStyle = {
    backgroundColor: "black", // light pink with 30% opacity
    color: "white", // dark pinkish red
    border: "none",
    padding: "10px 16px",
    fontWeight: "bold",
    borderRadius: "5px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // subtle shadow
    transition: "background-color 0.3s ease",
  };

  const hoverButtonStyle = {
    backgroundColor: "rgba(224, 86, 253, 0.9)", // darker shade on hover
  };

  return (
    <Card
      hoverable
      style={{
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        background: "linear-gradient(135deg, #ffffff, #f9f9f9)",
      }}
      title={<div style={{ fontSize: "1.2em", fontWeight: "600" }}>{server.name}</div>}
      cover={
        <img alt={server.name} src={server.banner_image} style={{ height: "180px", objectFit: "cover" }} />
      }
      actions={[
        <Link to={`/server/${server.id}`} key="view-details">
          <Button
            style={customButtonStyle}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverButtonStyle.backgroundColor)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = customButtonStyle.backgroundColor)}
          >
            View Details
          </Button>
        </Link>,
      ]}
    >
      {/* Description */}
      <Paragraph ellipsis={{ rows: 2 }} style={{ color: "#595959", marginBottom: "15px" }}>
        {server.description}
      </Paragraph>

      {/* Category Tags */}
      <div style={{ marginTop: "10px" }}>
        {server.categories.map((category, index) => (
          <Tag
            color={tagColors[index % tagColors.length]}
            key={index}
            style={{ fontSize: "0.85em", padding: "5px 10px" }}
          >
            {category}
          </Tag>
        ))}
      </div>

      {/* Member Count */}
      <div
        style={{
          marginTop: "10px",
          display: "flex",
          alignItems: "center",
          fontSize: "0.95em",
          color: "#595959",
          fontWeight: "500",
        }}
      >
        <UsergroupAddOutlined style={{ marginRight: "5px", color: "#1890ff" }} />
        {server.member_count} Members
      </div>
    </Card>
  );
};

export default ServerCard;
