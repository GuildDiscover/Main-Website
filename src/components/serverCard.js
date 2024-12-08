import React from "react";
import { Card, Button, Tag, Typography } from "antd";
import { Link } from "react-router-dom";
import { UsergroupAddOutlined } from "@ant-design/icons";

const { Paragraph } = Typography;

const ServerCard = ({ server }) => {
  // Define tag colors to add variety
  const tagColors = ["magenta", "green", "volcano", "blue", "purple", "orange"];

  const customButtonStyle = {
    backgroundColor: "#44475a", // Slightly lighter dark shade
    color: "#f8f8f2", // Light text color
    border: "none",
    padding: "10px 16px",
    fontWeight: "bold",
    borderRadius: "5px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)", // Subtle shadow
    transition: "background-color 0.3s ease",
  };

  const hoverButtonStyle = {
    backgroundColor: "#6272a4", // Lighter blue shade for hover effect
  };

  return (
    <Card
      hoverable
      style={{
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
        backgroundColor: "#2d2e36", // Dark background color for the card
        textAlign: "center",
        color: "#f8f8f2", // Light text color for contrast
      }}
    >
      {/* Round Server Image */}
      <div
        style={{
          width: "100px",
          height: "100px",
          margin: "0 auto",
          borderRadius: "50%",
          overflow: "hidden",
          border: "3px solid #6272a4", // Border color matching the dark theme
        }}
      >
        <img
          alt={server.name}
          src={server.logo}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      {/* Server Name */}
      <div style={{ marginTop: "15px", fontSize: "1.2em", fontWeight: "600", color: "#f8f8f2" }}>
        {server.name}
      </div>

      {/* Description */}
      <Paragraph ellipsis={{ rows: 2 }} style={{ color: "#bbbbbb", marginBottom: "15px", marginTop: "10px" }}>
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
          justifyContent: "center",
          alignItems: "center",
          fontSize: "0.95em",
          color: "#bbbbbb", // Light gray text for member count
          fontWeight: "500",
        }}
      >
        <UsergroupAddOutlined style={{ marginRight: "5px", color: "#6272a4" }} />
        {server.member_count} Members
      </div>

      <Link to={`/server/${server.id}`}>
      <Button
        style={{
          backgroundColor: "#44475a",
          color: "#f8f8f2",
          border: "none",
          padding: "10px 16px",
          fontWeight: "bold",
          borderRadius: "5px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
          transition: "background-color 0.3s ease",
          marginTop: "25px",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#6272a4")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#44475a")}
      >
        View Details
      </Button>
      </Link>

    </Card>
  );
};

export default ServerCard;
