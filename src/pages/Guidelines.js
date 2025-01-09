import React from "react";
import { Layout, Typography, Row, Col, Card } from "antd";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const Guidelines = () => {
  return (
    <Content
      style={{
        // padding: "50px",
        // background: "linear-gradient(135deg, #6a11cb, #2575fc)",
        background: "black",
        color: "#fff",
        padding: "50px 20px",
      }}
    >
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
          Community Guidelines
        </Title>
        <Paragraph style={{ textAlign: "center", color: "#fff", fontSize: "16px" }}>
          <strong>Website: https://guildiscover.jst-tan.page</strong>
          <br></br>
          <strong>Effective Date: October 4, 2024</strong>
          <br></br>
          Welcome to <strong>Guildiscover</strong>! We’re excited to have you here and want to make sure our
          platform is a fun, safe, and welcoming space for everyone. Please read these guidelines carefully.
          Violating them may result in action against your account, and all decisions will be made at our{" "}
          <strong>sole discretion</strong>.
        </Paragraph>
      </div>
      <br></br>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8}>
          <Card
            title={<span style={{ color: "#fff" }}>Be Respectful</span>}
            bordered={false}
            style={{
              backgroundColor: "#2d2e36",
              color: "#fff",
              textAlign: "center",
              borderRadius: "15px",
            }}
          >
            <Paragraph style={{ textAlign: "left", color: "#fff", fontSize: "16px" }}>
              <ul className={"unordered-list"}>
                <li>
                  <strong>Treat Others Kindly:</strong> We expect all members to show respect to each other.
                  Bullying, harassing, or threatening others is not allowed.
                </li>
                <li>
                  <strong>No Hate Speech or Discrimination:</strong> Discrimination based on race, gender,
                  religion, nationality, or any other personal characteristics will not be tolerated.
                </li>
                <li>
                  <strong>Keep Things Civil:</strong> Keep the conversation positive and constructive.
                  Personal attacks, name-calling, and insults are unacceptable.
                </li>
              </ul>
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card
            title={<span style={{ color: "#fff" }}>No Dangerous or Illegal Sales</span>}
            bordered={false}
            style={{
              backgroundColor: "#2d2e36",
              color: "#fff",
              textAlign: "center",
              borderRadius: "15px",
            }}
          >
            <Paragraph style={{ textAlign: "left", color: "#fff", fontSize: "16px" }}>
              <ul className={"unordered-lis"}>
                <li>
                  <strong>Illegal Goods:</strong> Servers selling regulated goods (weapons, drugs, etc.)
                  without proper licenses are <strong>not allowed</strong>.
                </li>
                <li>
                  <strong>No Dangerous Goods:</strong> The sale of potentially harmful or dangerous items
                  (explosives, firearms, etc.) is strictly prohibited.
                </li>
                <li>
                  <strong>Illegal Gambling</strong> Servers that coordinate, facilitate, or participate in
                  illegal gambling activities are not permitted.
                </li>
              </ul>
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card
            title={<span style={{ color: "#fff" }}>No Extremism, Child Abuse or Misinformation</span>}
            bordered={false}
            style={{
              backgroundColor: "#2d2e36",
              color: "#fff",
              textAlign: "center",
              borderRadius: "15px",
            }}
          >
            <Paragraph style={{ textAlign: "left", color: "#fff", fontSize: "16px" }}>
              <ul className={"unordered-lis"}>
                <li>
                  <strong>No Extremist Content:</strong> Servers promoting extremism or violent ideologies are
                  not allowed.
                </li>
                <li>
                  <strong>Child Abuse / Child Sexual Abuse:</strong> Any server containing or promoting
                  content related to child abuse or child sexual exploitation is strictly forbidden.
                </li>
                <li>
                  <strong>No Misinformation:</strong> Servers spreading deliberate misinformation (such as
                  conspiracy theories, fake news, etc.) will be removed.
                </li>
              </ul>
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card
            title={<span style={{ color: "#fff" }}>Don't Spam</span>}
            bordered={false}
            style={{
              backgroundColor: "#2d2e36",
              color: "#fff",
              textAlign: "center",
              borderRadius: "15px",
            }}
          >
            <Paragraph style={{ textAlign: "left", color: "#fff", fontSize: "16px" }}>
              <ul className={"unordered-lis"}>
                <li>
                  <strong>Self-Promotion is Welcome:</strong> Guildiscover is built for self-promotion! Feel
                  free to share your servers, but don’t flood the platform with repetitive or irrelevant
                  content.
                </li>
                <li>
                  <strong>No Spamming:</strong> Excessive self-promotion, posting irrelevant links, or
                  creating meaningless content that adds no value will be considered spam and removed.
                </li>
                <li>
                  <strong>No Empty Servers or Redirects:</strong> Servers that exist only to redirect users
                  elsewhere or have no meaningful content are not allowed.
                </li>
              </ul>
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card
            title={<span style={{ color: "#fff" }}>Respect Privacy & Security</span>}
            bordered={false}
            style={{
              backgroundColor: "#2d2e36",
              color: "#fff",
              textAlign: "center",
              borderRadius: "15px",
            }}
          >
            <Paragraph style={{ textAlign: "left", color: "#fff", fontSize: "16px" }}>
              <ul className={"unordered-lis"}>
                <li>
                  <strong>No Doxxing:</strong> Sharing someone’s private information without their consent is{" "}
                  <strong>strictly prohibited</strong>.
                </li>
                <li>
                  <strong>No Harassment / Threats:</strong> Harassing or threatening users by exposing their
                  personal data or making them feel unsafe is not allowed.
                </li>
                <li>
                  <strong>No Malware / Viruses:</strong> Sharing any form of malware (viruses, trojans, worms,
                  etc.) to attack or steal data from others is not tolerated.
                </li>
              </ul>
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card
            title={<span style={{ color: "#fff" }}>No Fraud / Scam</span>}
            bordered={false}
            style={{
              backgroundColor: "#2d2e36",
              color: "#fff",
              textAlign: "center",
              borderRadius: "15px",
            }}
          >
            <Paragraph style={{ textAlign: "left", color: "#fff", fontSize: "16px" }}>
              <ul className={"unordered-lis"}>
                <li>
                  <strong>Illegal Goods:</strong> Servers selling regulated goods (weapons, drugs, etc.)
                  without proper licenses are <strong>not allowed</strong>.
                </li>
                <li>
                  <strong>No Dangerous Goods:</strong> The sale of potentially harmful or dangerous items
                  (explosives, firearms, etc.) is strictly prohibited.
                </li>
                <li>
                  <strong>Illegal Gambling</strong> Servers that coordinate, facilitate, or participate in
                  illegal gambling activities are not permitted.
                </li>
              </ul>
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card
            title={<span style={{ color: "#fff" }}>No NSFW or Offensive Content</span>}
            bordered={false}
            style={{
              backgroundColor: "#2d2e36",
              color: "#fff",
              textAlign: "center",
              borderRadius: "15px",
            }}
          >
            <Paragraph style={{ textAlign: "left", color: "#fff", fontSize: "16px" }}>
              <ul className={"unordered-lis"}>
                <li>
                  <strong>No Adult Content:</strong> NSFW content such as pornography or any explicit material
                  is <strong>not allowed</strong> anywhere on the platform.
                </li>
                <li>
                  <strong>Offensive Server Names:</strong> Dirty language or offensive names in server titles
                  are not permitted. Keep it respectful.
                </li>
                <li>
                  <strong>Prohibited Imagery:</strong> Real-life violence, gore, or animal cruelty is
                  forbidden. However, fictional portrayals in movies, games, or books are acceptable as long
                  as they comply with our guidelines.
                </li>
                <li>
                  <strong>Illegal Content:</strong> Content that involves illegal activities (like child
                  pornography, drug sales, or extortion) will be immediately removed and reported.
                </li>
              </ul>
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card
            title={<span style={{ color: "#fff" }}>Follow the Law</span>}
            bordered={false}
            style={{
              backgroundColor: "#2d2e36",
              color: "#fff",
              textAlign: "center",
              borderRadius: "15px",
            }}
          >
            <Paragraph style={{ textAlign: "left", color: "#fff", fontSize: "16px" }}>
              <ul className={"unordered-lis"}>
                <li>
                  <strong>Obey the Laws of Your Country and Malaysia:</strong> You must follow the laws of
                  your country of residence as well as Malaysian laws when using our platform or listing
                  servers. Illegal activities of any kind are strictly prohibited.
                </li>
                <li>
                  <strong>Malicious Behaviour:</strong> Using Guildiscover for malicious purposes, such as
                  hacking, cracking, or distributing pirated software, cheats, and exploits, is not allowed.
                </li>
                <li>
                  <strong>No Miuse of Platform Resources:</strong> Don’t use Guildiscover for abnormal
                  purposes, such as outsourcing computing or storage resources (like cloud mining or hosting),
                  or performing DDoS attacks on our infrastructure.
                </li>
              </ul>
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card
            title={<span style={{ color: "#fff" }}>No Forced Reviews</span>}
            bordered={false}
            style={{
              backgroundColor: "#2d2e36",
              color: "#fff",
              textAlign: "center",
              borderRadius: "15px",
            }}
          >
            <Paragraph style={{ textAlign: "left", color: "#fff", fontSize: "16px" }}>
              <ul className={"unordered-lis"}>
                <li>
                  <strong>Reviews Must Be Genuine:</strong> Users cannot be forced to leave reviews for your
                  server or content. Reviews should come voluntarily from genuine experiences.
                </li>
                <li>
                  <strong>No Fake Reviews:</strong> Fake reviews or attempts to manipulate the review system
                  will not be tolerated.
                </li>
              </ul>
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card
            title={<span style={{ color: "#fff" }}>No Dangerous Organizations</span>}
            bordered={false}
            style={{
              backgroundColor: "#2d2e36",
              color: "#fff",
              textAlign: "center",
              borderRadius: "15px",
            }}
          >
            <Paragraph style={{ textAlign: "left", color: "#fff", fontSize: "16px" }}>
              <ul className={"unordered-lis"}>
                <li>
                  <strong>No Terrorism / Gangs:</strong> Servers that promote or glorify terrorism, gangs, or
                  trafficking are banned.
                </li>
                <li>
                  <strong>No Support for Dangerous Movements:</strong> Servers supporting movements or
                  organizations advocating for mass murder or serious harm to others will not be tolerated.
                </li>
              </ul>
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card
            title={<span style={{ color: "#fff" }}>Report Violations</span>}
            bordered={false}
            style={{
              backgroundColor: "#2d2e36",
              color: "#fff",
              textAlign: "center",
              borderRadius: "15px",
            }}
          >
            <Paragraph style={{ textAlign: "left", color: "#fff", fontSize: "16px" }}>
              <ul className={"unordered-lis"}>
                <li>
                  <strong>How to Report:</strong> If you come across content that violates these guidelines,
                  report it to us through our Discord server or email us at{" "}
                  <strong>report@guildiscover.com</strong>. We will take appropriate action based on our sole
                  discretion.
                </li>
              </ul>
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card
            title={<span style={{ color: "#fff" }}>No Servers for Illegal / Fraudulent Purposes</span>}
            bordered={false}
            style={{
              backgroundColor: "#2d2e36",
              color: "#fff",
              textAlign: "center",
              borderRadius: "15px",
            }}
          >
            <Paragraph style={{ textAlign: "left", color: "#fff", fontSize: "16px" }}>
              <ul className={"unordered-lis"}>
                <li>
                  <strong>Illegal Intentions</strong> Servers created to facilitate fraud, scams, or any other
                  illegal activities will be removed.
                </li>
                <li>
                  <strong>No Coordinated Attacks:</strong> Servers engaging in distributed denial-of-service
                  (DDoS) attacks or other malicious activities are not allowed.
                </li>
              </ul>
            </Paragraph>
          </Card>
        </Col>
      </Row>
    </Content>
  );
};

export default Guidelines;
