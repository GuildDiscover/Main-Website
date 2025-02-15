import React, { useState } from "react";

const JoinButton = ({ href, children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const buttonStyle = {
    display: "inline-block",
    padding: "14px 28px",
    fontSize: "18px",
    fontWeight: "700",
    textAlign: "center",
    textDecoration: "none",
    color: "#ffffff",
    background: isActive
      ? "linear-gradient(45deg, #2980b9, #2c3e50)"
      : isHovered
      ? "linear-gradient(45deg, #3498db, #2980b9)"
      : "linear-gradient(45deg, #3498db, #2c3e50)",
    border: "none",
    borderRadius: "50px",
    boxShadow: isActive
      ? "0 2px 4px rgba(0, 0, 0, 0.2), inset 0 1px 3px rgba(0, 0, 0, 0.1)"
      : isHovered
      ? "0 6px 12px rgba(52, 152, 219, 0.4), 0 0 20px rgba(52, 152, 219, 0.2)"
      : "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
    transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
    cursor: "pointer",
    overflow: "hidden",
    position: "relative",
    outline: "none",
    transform: isActive ? "scale(0.98) translateY(2px)" : "scale(1) translateY(0)",
  };

  const glowStyle = {
    content: '""',
    position: "absolute",
    top: "-50%",
    left: "-50%",
    width: "200%",
    height: "200%",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    transform: isHovered ? "rotate(30deg)" : "rotate(45deg)",
    transition: "transform 0.5s ease-out",
    pointerEvents: "none",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      onMouseOut={() => {
        setIsHovered(false);
        setIsActive(false);
      }}
    >
      <span style={glowStyle} />
      {children}
    </a>
  );
};

export default JoinButton;
