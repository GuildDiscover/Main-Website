import React, { useState } from "react";
import { Layout, Menu, Drawer, Button } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const menuItems = [
    { label: <Link to="/">Home</Link>, key: "home" },
    { label: <Link to="/about">About</Link>, key: "about" },
    {
      label: (
        <Link to="https://discord.gg/z7DC9tTyEH" target={"_blank"}>
          Contact
        </Link>
      ),
      key: "contact",
    },
    { label: <Link to="/team">Team</Link>, key: "team" },
    { label: <Link to="/terms-and-conditions">Terms</Link>, key: "terms" },
    { label: <Link to="/privacy-policy">Privacy</Link>, key: "privacy" },
    { label: <Link to="/guidelines">Guidelines</Link>, key: "guidelines" },
    { label: <Link to="/server-list">Servers</Link>, key: "servers" },
  ];

  return (
    <Header style={{ background: "#fff" }}>
      <div className="logo" />
      <Menu mode="horizontal" items={menuItems} />
      <Button type="primary" onClick={showDrawer} style={{ marginLeft: "auto" }}>
        Menu
      </Button>
      <Drawer title="Menu" placement="right" onClose={onClose} open={visible}>
        <Menu items={menuItems} onClick={onClose} />
      </Drawer>
    </Header>
  );
};

export default Navbar;
