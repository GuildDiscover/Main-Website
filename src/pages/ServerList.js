import React, { useState, useEffect, useContext } from "react";
import { Layout, Typography, Row, Col, Input, Spin } from "antd";
import ServerCard from "../components/serverCard";
import { ServerContext } from "../context/ServerContext";

const { Content } = Layout;
const { Title, Paragraph } = Typography;
const { Search } = Input;

const Servers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  // const [servers, setServers] = useState([]);
  // const [categories, setCategories] = useState([]);

  const { servers, filterServers } = useContext(ServerContext);

  useEffect(() => {
    if (searchTerm.length > 2) {
      filterServers(searchTerm);
    } else {
      filterServers(null);
    }
  }, [searchTerm, filterServers]);

  // Show the loading spinner if servers data is null
  if (servers === null) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <Spin size="large" tip="Loading servers..." />
      </div>
    );
  }

  return (
    <Content>
      <div
        style={{
          textAlign: "center",
          padding: "40px",
          background: "linear-gradient(135deg, #6a11cb, #2575fc)",
          // background: "black",
          borderRadius: "15px",
          marginBottom: "50px",
          color: "#fff",
        }}
      >
        <Title level={1} style={{ textAlign: "center", color: "#fff" }}>
          Explore Servers
        </Title>
        <Paragraph style={{ textAlign: "center", color: "#fff", fontSize: "20px" }}>
          Discover many amazing and wide range of amazing communities on the Discord platform. A place to find
          the best suited community to you, on our wide range of communities to join and connect with
          like-minded people.
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
