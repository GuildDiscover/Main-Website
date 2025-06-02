import React, { useState, useEffect } from "react";
import { Layout, Menu, Drawer } from "antd";
import { Link, useLocation } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

const { Header } = Layout;

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const menuItems = [
    { label: "Home", key: "/", link: "/" },
    { label: "Servers", key: "/server-list", link: "/server-list" },
    { label: "Team", key: "/team", link: "/team" },
    { label: "Contact", key: "contact", link: "https://discord.gg/z7DC9tTyEH", target: "_blank" },
    { label: "About", key: "/about", link: "/about" },
    { label: "Guidelines", key: "/guidelines", link: "/guidelines" },
    { label: "Terms", key: "/terms-and-conditions", link: "/terms-and-conditions" },
    { label: "Privacy", key: "/privacy-policy", link: "/privacy-policy" },
    { label: "Submit", key: "submit", link: "https://forms.gle/7HRxjxSd3Tnuz9zE8", target: "_blank"}
  ];

  return (
    <Header
      style={{
        background: "linear-gradient(135deg, #0f1a2e, #1a1b26)",
        color: "white",
        padding: 0,
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        width: "100%",
        overflow: "hidden",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        height: "64px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
          height: "100%",
          boxSizing: "border-box",
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
          <div 
            className="logo" 
            style={{ 
              fontSize: isMobile ? "1.2rem" : "1.5rem", 
              fontWeight: "bold", 
              whiteSpace: "nowrap",
              transition: "font-size 0.3s ease",
            }}
          >
            <Link to={"/"} style={{ color: "white", textDecoration: "none" }}>
              Guildiscover
            </Link>
          </div>
          {!isMobile && (
            <Menu
              mode="horizontal"
              selectedKeys={[location.pathname]}
              style={{
                background: "transparent",
                border: "none",
                flex: 1,
                justifyContent: "flex-end",
                lineHeight: "64px",
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
                      fontSize: "0.9rem",
                      transition: "all 0.3s ease",
                      textDecoration: "none",
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
                          height: "3px",
                          background: "#fa6400",
                          transition: "all 0.3s ease",
                        }}
                      />
                    )}
                  </Link>
                </Menu.Item>
              ))}
            </Menu>
          )}
          {isMobile && (
            <MenuOutlined
              className="menu-icon"
              onClick={showDrawer}
              style={{
                fontSize: "1.5rem",
                cursor: "pointer",
                color: "white",
                padding: "8px",
                transition: "transform 0.3s ease",
              }}
            />
          )}
        </div>
      </div>
      <Drawer
        title={
          <div style={{ color: "white", fontSize: "1.2rem", fontWeight: "bold" }}>
            Menu
          </div>
        }
        placement="right"
        onClose={onClose}
        open={visible}
        bodyStyle={{ 
          padding: 0,
          background: "linear-gradient(135deg, #0f1a2e, #1a1b26)",
        }}
        headerStyle={{
          background: "linear-gradient(135deg, #0f1a2e, #1a1b26)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
        width={280}
      >
        <Menu
          items={menuItems.map((item) => ({
            key: item.key,
            label: (
              <Link 
                to={item.link} 
                target={item.target} 
                onClick={onClose}
                style={{
                  color: "white",
                  display: "block",
                  padding: "12px 0",
                  fontSize: "1rem",
                  transition: "all 0.3s ease",
                  textDecoration: "none",
                }}
              >
                {item.label}
              </Link>
            ),
          }))}
          selectedKeys={[location.pathname]}
          mode="vertical"
          style={{ 
            border: "none", 
            margin: 0,
            background: "transparent",
          }}
        />
      </Drawer>
    </Header>
  );
};

export default Navbar;
