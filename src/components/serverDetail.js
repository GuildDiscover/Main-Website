import React from "react";
import { useParams } from "react-router-dom";
import { Card, Col, Row, Typography, Button, Rate, Avatar, Divider } from "antd";
import Meta from "antd/es/card/Meta";

const { Title, Text } = Typography;

function ServerDetails({ servers }) {
  const { id } = useParams(); // Get the server ID from the URL
  const server = servers.find((server) => server.id === parseInt(id)); // Find the server by ID

  if (!server) {
    return <div>Server not found</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <Card>
        <Meta
          avatar={<Avatar src={server.logo} />}
          title={<Title level={2}>{server.name}</Title>}
          description={<Text>{server.description}</Text>}
        />
      </Card>

      <Row gutter={16}>
        <Col span={12}>
          <Card title="Server Description" bordered={false}>
            <Text>{server.long_description}</Text>
          </Card>
        </Col>

        <Col span={12}>
        <Card title="Server Information" bordered={false}>
            <Text strong>Owner ID:</Text> <Text>{server.owner_id}</Text>
            <br></br>
            <Text strong>Member Count:</Text> <Text>{server.member_count}</Text>
            <br></br>
            <Text strong>Categories:</Text> <Text>{server.categories.join(", ")}</Text>
            <br></br>
            <Text strong>Created At:</Text> <Text>{new Date(server.created_at).toLocaleDateString()}</Text>
            <br></br>
            <Text strong>Boost Level:</Text> <Text>{server.boost_level}</Text>
            <br></br>
            <Text strong>Language:</Text> <Text>{server.language}</Text>
            <br></br>
            <Text strong>Country:</Text> <Text>{server.country}</Text>
            <br></br>
            <Text strong>Status:</Text> <Text>{server.status}</Text>
            <Divider />
            <Button type="primary" href={server.invite_link} target="_blank">
              Join Server
            </Button>
          </Card>
          
          <Card title="Moderator Review" bordered={false} style={{ marginTop: "10px" }}>
                  <Rate disabled value={server.rating} />
                  <br></br>
                  <br></br>
                  <Text>{server.moderator_review}</Text>
                  <br></br>
                  <br></br>
                  <Text strong>Reviewed At:</Text> <Text>{server.moderator_date}</Text>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ServerDetails;

