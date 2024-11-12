import React, { useState, useEffect } from "react";
import { Layout, Typography, Row, Col, Input } from "antd";
import serverData from "../data/serverData.json"; // Assuming you have server data in JSON
import ServerCard from "../components/serverCard";

const { Content } = Layout;
const { Title, Paragraph } = Typography;
const { Search } = Input;

const Servers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [servers, setServers] = useState([]);
  // const [categories, setCategories] = useState([]);

  useEffect(() => {
    setServers(serverData);
    return () => {
      setServers([]);
    };
  }, []);

  useEffect(() => {
    if (searchTerm.length > 2) {
      const filteredServers = serverData.filter((server) => {
        if (server.name.toLowerCase().includes(searchTerm.toLowerCase())) return true;
        for (let category of server.categories) {
          if (category.toLowerCase().includes(searchTerm.toLowerCase())) return true;
        }
        return false;
      });

      setServers(filteredServers);
    } else {
      setServers(serverData);
    }
  }, [searchTerm]);

  return (
    <Content style={{ padding: "50px", backgroundColor: "#f0f2f5" }}>
      <Title level={2} style={{ textAlign: "center" }}>
        Explore Servers
      </Title>
      <Paragraph style={{ textAlign: "center", color: "#555", fontSize: "20px" }}>
        Discover a wide range of communities to join and connect with like-minded people.
      </Paragraph>

      {/* Search bar */}
      <div style={{ maxWidth: "600px", margin: "20px auto" }}>
        <Search
          placeholder="Search for servers"
          enterButton
          size="large"
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: "100%" }}
        />
      </div>

      <Row gutter={[16, 16]} style={{ marginTop: "30px" }}>
        {servers.length > 0 ? (
          <React.Fragment>
            {servers.map((server) => (
              <Col xs={24} sm={12} md={8} lg={6} key={server.id}>
                <ServerCard server={server} />
              </Col>
            ))}
          </React.Fragment>
        ) : (
          <div style={{ textAlign: "center", width: "100vw", fontSize: "16px" }}>No Servers Found</div>
        )}
      </Row>
    </Content>
  );
};

export default Servers;
