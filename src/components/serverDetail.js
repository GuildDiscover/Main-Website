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
    <div
      style={{
        textAlign: "center",
        background: "black",
      }}
    >
      <div style={{ padding: "20px" }}>
        <Card
          style={{
            marginBottom: "20px",
            background: "linear-gradient(135deg, #6a11cb, #2575fc)",
            color: "#fff",
          }}
        >
          <Meta
            avatar={<Avatar src={server.logo} />}
            title={
              <Title level={2} style={{ color: "#fff" }}>
                {server.name}
              </Title>
            }
            description={<Text style={{ color: "#fff" }}>{server.description}</Text>}
          />
        </Card>

        <Row gutter={16}>
          <Col span={12}>
            <Card
              title="Server Description"
              bordered={false}
              style={{ marginBottom: "20px", background: "#2d2e36", color: "#fff" }}
            >
              <Text style={{ color: "#fff" }}>{server.long_description}</Text>
            </Card>
          </Col>

          <Col span={12}>
            <Card
              title="Server Information"
              bordered={false}
              style={{ marginBottom: "20px", background: "#2d2e36", color: "#fff" }}
            >
              <div style={{ textAlign: "left" }}>
                <Text strong style={{ color: "#fff" }}>
                  Owner ID:
                </Text>{" "}
                <Text style={{ color: "#fff" }}>{server.owner_id}</Text>
                <br></br>
                <Text strong style={{ color: "#fff" }}>
                  Member Count:
                </Text>{" "}
                <Text style={{ color: "#fff" }}>{server.member_count}</Text>
                <br></br>
                <Text strong style={{ color: "#fff" }}>
                  Categories:
                </Text>{" "}
                <Text style={{ color: "#fff" }}>{server.categories.join(", ")}</Text>
                <br></br>
                <Text strong style={{ color: "#fff" }}>
                  Created At:
                </Text>{" "}
                <Text style={{ color: "#fff" }}>{new Date(server.created_at).toLocaleDateString()}</Text>
                <br></br>
                <Text strong style={{ color: "#fff" }}>
                  Boost Level:
                </Text>{" "}
                <Text style={{ color: "#fff" }}>{server.boost_level}</Text>
                <br></br>
                <Text strong style={{ color: "#fff" }}>
                  Language:
                </Text>{" "}
                <Text style={{ color: "#fff" }}>{server.language}</Text>
                <br></br>
                <Text strong style={{ color: "#fff" }}>
                  Country:
                </Text>{" "}
                <Text style={{ color: "#fff" }}>{server.country}</Text>
                <br></br>
                <Text strong style={{ color: "#fff" }}>
                  Status:
                </Text>{" "}
                <Text style={{ color: "#fff" }}>{server.status}</Text>
              </div>
              <Divider style={{ borderColor: "yellow" }} />
              <Button type="primary" href={server.invite_link} target="_blank">
                Join Server
              </Button>

              {server.owner_contact_link && (
                <>
                  &nbsp;&nbsp;
                  <Button type="primary" href={server.owner_contact_link} target="_blank">
                    Get in Touch
                  </Button>
                </>
              )}
            </Card>

            <Card
              title="Moderator Review"
              bordered={false}
              style={{ marginTop: "10px", background: "#2d2e36" }}
            >
              <Rate disabled value={server.rating} style={{ color: "yellow" }} />
              <br></br>
              <br></br>
              <Text style={{ color: "#fff" }}>{server.moderator_review}</Text>
              <br></br>
              <br></br>
              <Text strong style={{ color: "#fff" }}>
                Reviewed At:
              </Text>{" "}
              <Text style={{ color: "#fff" }}>{server.moderator_date}</Text>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

// Is it important?
// export default ServerDetails;
//
// }

export default ServerDetails;
