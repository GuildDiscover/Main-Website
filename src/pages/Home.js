import React from "react";
import { Layout, Typography, Row, Col, Card, Button, Divider } from "antd";
import { TeamOutlined, AppstoreOutlined, GlobalOutlined, CheckCircleOutlined } from "@ant-design/icons";
import ServerCard from "../components/serverCard";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const Home = () => {
  const topServers = [
    {
      id: 1,
      name: "Gaming Hub",
      description: "A community for gamers to connect and play together.",
      owner_id: 101,
      invite_link: "https://discord.gg/gaminghub",
      member_count: 1500,
      categories: ["Gaming", "Social"],
      created_at: "2024-10-19T10:00:00Z",
      boost_level: 2,
      language: "English",
      country: "US",
      banner_image: "https://picsum.photos/200",
      logo: "https://example.com/images/gaming-logo.jpg",
      status: "active",
    },
    {
      id: 2,
      name: "Tech Enthusiasts",
      description: "Join us to discuss the latest in tech and gadgets.",
      owner_id: 102,
      invite_link: "https://discord.gg/techenthusiasts",
      member_count: 1200,
      categories: ["Tech", "Networking"],
      created_at: "2024-09-20T15:30:00Z",
      boost_level: 1,
      language: "English",
      country: "US",
      banner_image: "https://picsum.photos/300",
      logo: "https://example.com/images/tech-logo.jpg",
      status: "active",
    },
    {
      id: 3,
      name: "Anime Lovers",
      description: "Discuss your favorite anime, manga, and characters here!",
      owner_id: 103,
      invite_link: "https://discord.gg/animelovers",
      member_count: 900,
      categories: ["Anime", "Manga", "Entertainment"],
      created_at: "2024-08-15T12:00:00Z",
      boost_level: 3,
      language: "Japanese",
      country: "JP",
      banner_image: "https://picsum.photos/250",
      logo: "https://example.com/images/anime-logo.jpg",
      status: "active",
    },
  ];

  return (
    <Content style={{ padding: "50px", backgroundColor: "#f0f2f5" }}>
      {/* Hero Section */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <Title level={1} style={{ fontWeight: "bold" }}>
          Welcome to Guildiscover!
        </Title>
        <Paragraph style={{ fontSize: "22px", color: "#555" }}>
          Uncover awesome communities on your favourite platform for you on Guildiscover today. Discover,
          join, and connect with amazing servers tailored to your interests or your needs.
        </Paragraph>
        <a href="/server-list">
          <Button type="primary" size="large" style={{ marginTop: "20px" }}>
            Discover Communities
          </Button>
        </a>
        <a href="https://discord.gg/z7DC9tTyEH">
          <Button type="primary" size="large" style={{ marginTop: "20px", marginLeft: "10px" }}>
            Join Our Community
          </Button>
        </a>
      </div>

      {/* Features Section */}
      <div style={{ marginBottom: "50px" }}>
        <Divider style={{ borderColor: "#444", marginBottom: "50px" }}>
          <Title level={2} style={{ fontWeight: "bold" }}>
            Discover Our Features
          </Title>
        </Divider>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8}>
            <Card
              title="Discover Amazing Communities"
              bordered={false}
              cover={<AppstoreOutlined style={{ fontSize: "50px", color: "#1890ff", padding: "20px" }} />}
            >
              <Paragraph>
                There are many types of communities inside Guildiscover, from gaming to anime, and from
                writing to arts. Discover and browse through a diverse range of communities inside this
                directory to find the perfect match for you.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card
              title="Safety Ensured"
              bordered={false}
              cover={<TeamOutlined style={{ fontSize: "50px", color: "#1890ff", padding: "20px" }} />}
            >
              <Paragraph>
                All communities on the directory has been intensively scanned thoroughly by our moderation
                team. We try our best to ensure all communities here is safe for everyone to join and enjoy.
                All users could join servers{" "}
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card
              title="Safe & Secure"
              bordered={false}
              cover={<GlobalOutlined style={{ fontSize: "50px", color: "#1890ff", padding: "20px" }} />}
            >
              <Paragraph>We prioritize your security and provide a trusted platform for all users.</Paragraph>
            </Card>
          </Col>
        </Row>
      </div>

      <div style={{ marginBottom: "50px" }}>
        <Divider style={{ borderColor: "#444", marginBottom: "50px" }}>
          <Title level={2} style={{ fontWeight: "bold" }}>
            Discover Top Communities
          </Title>
        </Divider>
        <Row gutter={[16, 16]} style={{ marginTop: "30px", justifyContent: "space-around" }}>
          {topServers.length > 0 ? (
            <React.Fragment>
              {topServers.map((server) => (
                <Col xs={24} sm={12} md={8} lg={6} key={server.id}>
                  <ServerCard server={server} />
                </Col>
              ))}
            </React.Fragment>
          ) : (
            <div style={{ textAlign: "center", width: "100vw", fontSize: "16px" }}>No Servers Found</div>
          )}
        </Row>
      </div>

      <div style={{ marginBottom: "50px" }}>
        <Divider style={{ borderColor: "#444", marginBottom: "50px" }}>
          <Title level={2} style={{ fontWeight: "bold" }}>
            Discover New Communities
          </Title>
        </Divider>
      </div>

      <div style={{ marginBottom: "50px" }}>
        <Divider style={{ borderColor: "#444", marginBottom: "50px" }}></Divider>
      </div>

      {/* Call-to-Action Section */}
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <Title level={2}>Ready to Find Your Community?</Title>
        <Paragraph>Join today and start exploring endless possibilities!</Paragraph>
        <Button type="primary" size="large" style={{ marginTop: "20px" }} icon={<CheckCircleOutlined />}>
          Join Now
        </Button>
      </div>
    </Content>
  );
};

export default Home;
