import React from "react";
import { Card, Button, Tag, Typography } from "antd";
import { Link } from "react-router-dom";
import { UsergroupAddOutlined } from "@ant-design/icons";

const { Paragraph } = Typography;

const ServerCard = ({ server }) => {
  const tagColors = ["#FF79C6", "#50FA7B", "#FFB86C", "#8BE9FD", "#BD93F9", "#FF5555"];
  const getRandomColor = () => {
    const colors = ["#FF5733", "#33A8FF", "#FF33A8", "#33FF57", "#FFC300", "#8E44AD"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <Card
      hoverable
      style={{
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
        backgroundColor: "#282A36",
        textAlign: "center",
        color: "#F8F8F2",
        border: "0",
        height: "100%",
        transition: "transform 0.1s ease-in-out",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.02)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      <div
        style={{
          width: "110px",
          height: "110px",
          margin: "0 auto",
          borderRadius: "50%",
          overflow: "hidden",
          border: "4px solid #6272A4",
          boxShadow: "0 4px 12px rgba(98, 114, 164, 0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: server.logo ? "transparent" : getRandomColor(),
          opacity: server.logo ? 1 : 0.6,
        }}
      >
        {server.logo ? (
          <img
            alt={server.name}
            src={server.logo}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        ) : (
          <span
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              color: "#fff",
              textTransform: "uppercase",
            }}
          >
            {server.name ? server.name.charAt(0) : "?"}
          </span>
        )}
      </div>

      <div style={{ marginTop: "18px", fontSize: "1.3em", fontWeight: "600", color: "#BD93F9" }}>
        {server.name}
      </div>

      <Paragraph ellipsis={{ rows: 2 }} style={{ color: "#F8F8F2", marginBottom: "18px", marginTop: "12px" }}>
        {server.description}
      </Paragraph>

      <div style={{ marginTop: "12px", marginBottom: "15px" }}>
        {server.categories.map((category, index) => (
          <Tag
            color={tagColors[index % tagColors.length]}
            key={index}
            style={{
              fontSize: "0.75em",
              padding: "2px 8px",
              margin: "0 4px 6px 0",
              borderRadius: "4px",
              fontWeight: "500",
              backgroundColor: `${tagColors[index % tagColors.length]}30`,
              border: `1px solid ${tagColors[index % tagColors.length]}50`,
              color: tagColors[index % tagColors.length],
              transition: "background-color 0.3s ease",
            }}
          >
            {category}
          </Tag>
        ))}
      </div>

      <div
        style={{
          marginTop: "12px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "1em",
          color: "#8BE9FD",
          fontWeight: "500",
        }}
      >
        <UsergroupAddOutlined style={{ marginRight: "6px", color: "#8BE9FD" }} />
        {server.member_count} Members
      </div>

      <Link to={`/server/${server.id}`}>
        <Button
          style={{
            backgroundColor: "#6272A4",
            color: "#F8F8F2",
            border: "none",
            padding: "10px 20px",
            fontWeight: "bold",
            borderRadius: "8px",
            boxShadow: "0px 4px 8px rgba(98, 114, 164, 0.3)",
            transition: "all 0.3s ease",
            marginTop: "25px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#7B88B5";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#6272A4";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          View Details
        </Button>
      </Link>
    </Card>
  );
};

export default ServerCard;
