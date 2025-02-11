import React from "react";
import { Row, Col, Divider, Typography } from "antd";
import ServerCard from "../serverCard";

const { Title } = Typography;

const HomeServerList = ({ servers, title }) => {
  return (
    <div style={{ marginBottom: "50px" }}>
      <Divider style={{ borderColor: "#444", marginBottom: "30px" }}>
        <Title level={2} style={{ fontWeight: "bold", color: "white" }}>
          {title}
        </Title>
      </Divider>
      <Row gutter={[16, 16]} justify="center" style={{ marginTop: "20px" }}>
        {servers.length > 0 ? (
          servers.map((server) => (
            <Col xs={24} sm={12} md={8} lg={6} key={server.id} style={{ marginBottom: "16px" }}>
              <div style={{ height: "100%" }}>
                <ServerCard server={server} />
              </div>
            </Col>
          ))
        ) : (
          <Col span={24}>
            <div style={{ textAlign: "center", fontSize: "16px", color: "white" }}>No Servers Found</div>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default HomeServerList;
