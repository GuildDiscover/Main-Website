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
      <Card
        style={{ marginBottom: "20px" }}
        cover={
          <img
            alt={`${server.name} banner`}
            src={server.banner_image}
            style={{ maxHeight: "300px", objectFit: "cover" }}
          />
        }
      >
        <Meta
          avatar={<Avatar src={server.logo} />}
          title={<Title level={2}>{server.name}</Title>}
          description={<Text>{server.description}</Text>}
        />
      </Card>

      <Row gutter={16}>
        <Col span={12}>
          <Card title="Server Information" bordered={false}>
            <Text strong>Owner ID:</Text> <Text>{server.owner_id}</Text>
            <Divider />
            <Text strong>Member Count:</Text> <Text>{server.member_count}</Text>
            <Divider />
            <Text strong>Categories:</Text> <Text>{server.categories.join(", ")}</Text>
            <Divider />
            <Text strong>Created At:</Text> <Text>{new Date(server.created_at).toLocaleDateString()}</Text>
            <Divider />
            <Text strong>Boost Level:</Text> <Text>{server.boost_level}</Text>
            <Divider />
            <Text strong>Language:</Text> <Text>{server.language}</Text>
            <Divider />
            <Text strong>Country:</Text> <Text>{server.country}</Text>
            <Divider />
            <Text strong>Status:</Text> <Text>{server.status}</Text>
            <Divider />
            <Button type="primary" href={server.invite_link} target="_blank">
              Join Server
            </Button>
          </Card>
        </Col>

        <Col span={12}>
          <Card title="Moderator Reviews" bordered={false}>
            {server.moderator_reviews && server.moderator_reviews.length > 0 ? (
              server.moderator_reviews.map((review, index) => (
                <div key={index} style={{ marginBottom: "10px" }}>
                  <Text strong>Moderator ID:</Text> <Text>{review.moderator_id}</Text>
                  <Divider />
                  <Text strong>Review:</Text> <Text>{review.review}</Text>
                  <Divider />
                  <Text strong>Rating:</Text> <Rate disabled value={review.rating} />
                  <Divider />
                  <Text strong>Reviewed At:</Text>{" "}
                  <Text>{new Date(review.reviewed_at).toLocaleDateString()}</Text>
                  <Divider />
                </div>
              ))
            ) : (
              <Text>No reviews available.</Text>
            )}
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ServerDetails;
