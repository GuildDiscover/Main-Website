import React from "react";
import { Layout, Typography, Row, Col, Card, Tag, Button } from "antd";
import { UsergroupAddOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import serverData from "../data/serverData.json"; // Assuming you have server data in JSON

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const Servers = () => {
  return (
    <Content style={{ padding: "50px", backgroundColor: "#f0f2f5" }}>
      <Title level={2} style={{ textAlign: "center" }}>
        Explore Servers
      </Title>
      <Paragraph style={{ textAlign: "center", color: "#555" }}>
        Discover a wide range of communities to join and connect with like-minded people.
      </Paragraph>

      <Row gutter={[16, 16]} style={{ marginTop: "30px" }}>
        {serverData.map((server) => (
          <Col xs={24} sm={12} md={8} lg={6} key={server.id}>
            <Card
              hoverable
              title={server.name}
              cover={<img alt={server.name} src={server.banner_image} />}
              actions={[
                <Link to={`/server/${server.id}`} key="view-details">
                  <Button type="primary">View Details</Button>
                </Link>,
              ]}
            >
              <Paragraph ellipsis={{ rows: 2 }}>{server.description}</Paragraph>
              <div style={{ marginTop: "10px" }}>
                {server.categories.map((category, index) => (
                  <Tag color="blue" key={index}>
                    {category}
                  </Tag>
                ))}
              </div>
              <div style={{ marginTop: "10px", display: "flex", alignItems: "center" }}>
                <UsergroupAddOutlined style={{ marginRight: "5px" }} />
                {server.member_count} Members
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Content>
  );
};

export default Servers;
