import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Col, Row, Typography, Button, Rate, Avatar, Divider } from "antd";
import Meta from "antd/es/card/Meta";
import { ServerContext } from "../context/ServerContext";

const { Title, Text } = Typography;

function ServerDetails() {
  const { id } = useParams(); // Get the server ID from the URL
  const { getServer } = useContext(ServerContext);

  const [server, setServer] = useState(null);

  useEffect(() => {
    setServer(getServer(parseInt(id)));
    return () => {};
  }, [getServer, id]);

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
      <div style={{
        padding: "2rem",
        background: "linear-gradient(135deg, #0f1a2e, #1a1b26)",
        color: "#e4e4e4",
        fontFamily: "Inter"
      }}
      >
      <div style={{ padding: "20px" }}>
        <Card
          style={{
            textAlign: "center",
            padding: "4rem 2rem",
            background: "linear-gradient(135deg, rgba(41, 63, 114, 0.7), rgba(24, 36, 65, 0.7))",
            borderRadius: "20px",
            marginBottom: "3rem",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)"
          }}
        >
          <Meta
            title={
              <Title level={1} style={{ color: "#fff" }}>
                {server.name}
              </Title>
            }
            description={<Text style={{ color: "#fff", fontSize: "18px" }}>{server.description}</Text>}
            rating={<Rate disabled value={server.rating} style={{ color: "yellow" }} />}
          />
        </Card>

        <Row gutter={16}>
          <Col span={12}>
            <Card
              bordered={false}
              style={{ 
                background: "rgba(30, 41, 59, 0.8)",
                borderRadius: "20px",
                padding: "2rem",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.3s ease"
               }}
            >
              <Title level={3} style={{ color: "#fff" }}>
                Server Review
              </Title>
              <Text strong style={{ color: "#d1d1d1", fontSize: "16px" }}>
                Reviewed At:
              </Text>{" "}
              <Text style={{ color: "#d1d1d1", fontSize: "16px" }}>{server.moderator_date}</Text>
              <br></br>
              <br></br>
              <Text style={{ color: "#d1d1d1" }}>{server.reviewelement && server.reviewelement.basic}</Text>
              <div style={{ textAlign: "left", marginTop: "20px" }}>
               <Title level={3} style={{ color: "#d1d1d1", fontWeight: "bold" }}>
               First Impression
               </Title>
               <Text style={{ color: "#d1d1d1", fontSize: "16px" }}>{server.reviewelement && server.reviewelement.firstimpression}</Text>
               <br></br>
               <br></br>
               <Title level={3} style={{ color: "#d1d1d1", fontWeight: "bold", paddingTop: "10px" }}>Community Activity & Engagement</Title>
               <Text style={{ color: "#d1d1d1"}}>{server.reviewelement && server.reviewelement.communityactivity}</Text>
              <br></br>
              <br></br>
              <Title level={3} style={{ color: "#d1d1d1", fontWeight: "bold", paddingTop: "10px"}}>Moderation & Safety</Title>
              <Text style={{ color: "#d1d1d1"}}>{server.reviewelement && server.reviewelement.moderation}</Text>
              <br></br>
              <br></br>
              <Title level={3} style={{ color: "#d1d1d1", fontWeight: "bold", paddingTop: "10px"}}>Staff Responsiveness</Title>
              <Text style={{ color: "#d1d1d1"}}>{server.reviewelement && server.reviewelement.staff}</Text>
              <br></br>
              <br></br>
              <Title level={3} style={{ color: "#d1d1d1", fontWeight: "bold", paddingTop: "10px"}}>Server Organization</Title>
              <Text style={{ color: "#d1d1d1"}}>{server.reviewelement && server.reviewelement.organization}</Text>
              <br></br>
              <br></br>
              <Title level={3} style={{ color: "#d1d1d1", fontWeight: "bold", paddingTop: "10px"}}>Event & Features</Title>
              <Text style={{ color: "#d1d1d1"}}>{server.reviewelement && server.reviewelement.event}</Text>
              <br></br>
              <Title level={3} style={{ color: "#d1d1d1", fontWeight: "bold", paddingTop: "10px"}}>Niche & Uniqueness</Title>
              <Text style={{ color: "#d1d1d1"}}>{server.reviewelement && server.reviewelement.niche}</Text>
               </div>
            </Card>
          </Col>

          <Col span={12}>
            <Card
              bordered={false}
              style={{ 
                background: "rgba(30,41,59,0.8)",
                borderRadius: "20px",
                padding: "2rem",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)", 
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                height: "100%",
                display: "flex", 
                flexDirection: "column",
                transition: "all 0.3s ease"
              }}
            >
              <Title level={3} style={{ color: "#fff" }}>
                Server Information
              </Title>
            <Text style={{ color: "#d1d1d1", fontSize: "16px" }}>{server.description}</Text>
            <br></br>
            <br></br>  
              <div style={{ textAlign: "left", fontSize: "16px" }}>
                <Text strong style={{ color: "#d1d1d1", fontSize: "16px" }}>
                  Member Count:
                </Text>{" "}
                <Text style={{ color: "#d1d1d1", fontSize: "16px" }}>{server.member_count}</Text>  
                <br></br>
                <Text strong style={{ color: "#d1d1d1", fontSize: "16px" }}>
                  Owner ID:
                </Text>{" "}
                <Text style={{ color: "#d1d1d1", fontSize: "16px" }}>{server.owner_id}</Text>
                <br></br>
                <Text strong style={{ color: "#d1d1d1", fontSize: "16px" }}>
                  Categories:
                </Text>{" "}
                <Text style={{ color: "#d1d1d1", fontSize: "16px" }}>{server.categories.join(", ")}</Text>
                <br></br>
                <Text strong style={{ color: "#d1d1d1", fontSize: "16px" }}>
                  Created At:
                </Text>{" "}
                <Text style={{ color: "#d1d1d1", fontSize: "16px" }}>{new Date(server.created_at).toLocaleDateString()}</Text>
                <br></br>
                <Text strong style={{ color: "#d1d1d1", fontSize: "16px" }}>
                  Boost Level:
                </Text>{" "}
                <Text style={{ color: "#d1d1d1", fontSize: "16px" }}>{server.boost_level}</Text>
                <br></br>
                <Text strong style={{ color: "#d1d1d1", fontSize: "16px" }}>
                  Language:
                </Text>{" "}
                <Text style={{ color: "#d1d1d1", fontSize: "16px" }}>{server.language}</Text>
                <br></br>
                <Text strong style={{ color: "#d1d1d1", fontSize: "16px" }}>
                  Country:
                </Text>{" "}
                <Text style={{ color: "#d1d1d1", fontSize: "16px" }}>{server.country}</Text>
                <br></br>
                <Text strong style={{ color: "#d1d1d1", fontSize: "16px" }}>
                  Status:
                </Text>{" "}
                <Text style={{ color: "#d1d1d1", fontSize: "16px" }}>{server.status}</Text>
              </div>
              <Divider style={{ borderColor: "yellow" }} />
              <Button type="primary" href={server.invite_link} target="_blank">
                Join Server
              </Button>

              {server.owner_contact_link && server.owner_contact_link.discord && (
                <>
                  &nbsp;&nbsp;
                  <Button type="primary" href={server.owner_contact_link.discord} target="_blank">
                    Get in Touch
                  </Button>
                </>
              )}
            </Card>
          </Col>
        </Row>
      </div>
      </div>
    </div>
  );
}

// Is it important?
// export default ServerDetails;
//
// }

export default ServerDetails;
