import React, { useState } from "react";
import { Layout, Menu, Drawer } from "antd";
import { Link, useLocation } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

const { Header } = Layout;

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const menuItems = [
    { label: "Home", key: "/", link: "/" },
    { label: "About", key: "/about", link: "/about" },
    { label: "Contact", key: "contact", link: "https://discord.gg/z7DC9tTyEH", target: "_blank" },
    { label: "Team", key: "/team", link: "/team" },
    { label: "Terms", key: "/terms-and-conditions", link: "/terms-and-conditions" },
    { label: "Privacy", key: "/privacy-policy", link: "/privacy-policy" },
    { label: "Guidelines", key: "/guidelines", link: "/guidelines" },
    { label: "Servers", key: "/server-list", link: "/server-list" },
  ];

  return (
    <Header
      style={{
        background: "black",
        color: "white",
        padding: "0 20px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
        }}
      >
        <div className="logo" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          Guildiscover
        </div>
        <Menu
          mode="horizontal"
          selectedKeys={[location.pathname]}
          style={{
            background: "transparent",
            border: "none",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          {menuItems.map((item) => (
            <Menu.Item key={item.key} style={{ margin: "0 10px" }}>
              <Link
                to={item.link}
                target={item.target}
                style={{
                  color: "white",
                  position: "relative",
                  padding: "0 5px",
                }}
              >
                {item.label}
                {location.pathname === item.key && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-5px",
                      left: 0,
                      width: "100%",
                      height: "5px",
                      background: "#333",
                    }}
                  />
                )}
              </Link>
            </Menu.Item>
          ))}
        </Menu>
        <MenuOutlined
          className="menu-icon"
          onClick={showDrawer}
          style={{
            display: "none",
            fontSize: "1.5rem",
            cursor: "pointer",
            "@media (max-width: 768px)": {
              display: "block",
            },
          }}
        />
      </div>
      <Drawer title="Menu" placement="right" onClose={onClose} open={visible} bodyStyle={{ padding: 0 }}>
        <Menu
          items={menuItems.map((item) => ({
            ...item,
            label: (
              <Link to={item.link} target={item.target}>
                {item.label}
              </Link>
            ),
          }))}
          onClick={onClose}
          selectedKeys={[location.pathname]}
          mode="vertical"
          style={{ border: "none" }}
        />
      </Drawer>
    </Header>
  );
};

export default Navbar;
