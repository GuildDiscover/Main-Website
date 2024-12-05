import React from "react";
import { Layout, Typography, Row, Col, Card } from "antd";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const Terms = () => {
  return (
    <Content style={{ padding: "50px", background: "linear-gradient(#80ED99, #45DF81, #0AD1C8, #14919B, #0B6477, #213A57", color: "#fff", padding: "50px 20px" }}>
    <div style={{
          textAlign: "center",
          padding: "40px",
          background: "linear-gradient(135deg, #6a11cb, #2575fc)",
          borderRadius: "15px",
          marginBottom: "50px",
          color: "#fff"
        }}>
      <Title level={1} style={{ color: "#fff", fontWeight: "bold" }}>
        Terms of Services
      </Title>
      <Paragraph style={{ textAlign: "center", color: "#fff", fontSize: "18px" }}>
        <strong>Effective Date: 10 October 2024</strong>
        <br></br>
        Welcome to <strong>Guildiscover</strong>! These Terms of Service (“Terms”) govern your access to and use of our website, services, and content provided by <strong>Guildiscover</strong> (“we,” “us,” or “our”). By accessing or using <strong>https://guildiscover.jst-tan.page</strong> (the “Website”), you agree to comply with these Terms.
        <br></br>
        <br></br>
        Please read them carefully. If you do not agree with these Terms, you may not use the Website or its services.
      </Paragraph>
      </div>
      <br></br>
      <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8}>
          <Card
              title="Eligibility" 
              bordered={false}
              style={{
                backgroundColor: "#2d2e36",
                color: "#fff",
                textAlign: "center",
                borderRadius: "15px",
              }}
            >
              <Paragraph style={{ textAlign: "left", color: "#fff", fontSize: "16px" }}>
      <ul class="unordered-list">
				    <li><strong>Age Requirement:</strong> You must be at least 13 years of age to use the Website.</li>
				    <li><strong>Regional Restrictions:</strong> Users in certain regions, such as the Europesn Union must be at least 16 years old or higher to use the Website in compliance with local regulations.</li>
				    <li><strong>Parental Consent:</strong> If you are under the required age for your region, you must have parental or legal guardian consent to use the Website. By allowing a minor to use this Website, parents or guardians agree to these Terms on behalf of the minor. </li>
			</ul>
      </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card
              title="Service Description"
              bordered={false}
              style={{
                backgroundColor: "#2d2e36",
                color: "#fff",
                textAlign: "center",
                borderRadius: "15px",
              }}
            >
              <Paragraph style={{ textAlign: "left", color: "#fff", fontSize: "16px" }}>
        Guildiscover is the go-to platform for discovering and listing Discord servers and bots. With a commitment to user safety, all content uploaded undergoes strict review by our dedicated moderation team, ensuring that every server and bot listed is safe, reliable, and suitable for all users. Whether you're exploring new communities or seeking powerful bots to enhance your experience, Guildiscover offers a trusted, secure space to connect with the best Discord offers.
      </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
          <Card
              title="Intellectual Property" 
              bordered={false}
              style={{
                backgroundColor: "#2d2e36",
                color: "#fff",
                textAlign: "center",
                borderRadius: "15px",
              }}
            >
          <Paragraph style={{ textAlign: "left", color: "#fff", fontSize: "16px" }}>
      <ul class="unordered-list">
				    <li>All content on the Website, including text, images, software, and trademarks, is owned by Guildiscover or its licensors and is protected by intellectual property laws.</li>
				    <li>You may not copy, reproduce, or distribute any content from the Website without express written permission.</li>
				    <li>By uploading content, you grant us a <strong>non-exclusive, worldwide, royalty-free license</strong> to use, modify, and distribute the content on the Website.</li>
			</ul>
      </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card
              title="Termination of Access"
              bordered={false}
              style={{
                backgroundColor: "#2d2e36",
                color: "#fff",
                textAlign: "center",
                borderRadius: "15px",
              }}
            >
              <Paragraph style={{ textAlign: "left", color: "#fff", fontSize: "16px" }}>
        We reserve the right to suspend or terminate your access to the Website at our sole discretion, with or without reason, and without prior notice. Upon termination, you must cease all use of the Website immediately.
      </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
          <Card
              title="Changes to Terms" 
              bordered={false}
              style={{
                backgroundColor: "#2d2e36",
                color: "#fff",
                textAlign: "center",
                borderRadius: "15px",
              }}
            >
              <Paragraph style={{ textAlign: "left", color: "#fff", fontSize: "16px" }}>
        We reserve the right to modify these Terms at any time. Any changes will be effective immediately upon posting to the Website. You are responsible for reviewing these Terms periodically. Continued use of the Website after changes have been made constitutes your acceptance of the updated Terms.
      </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card
              title="Privacy Policy"
              bordered={false}
              style={{
                backgroundColor: "#2d2e36",
                color: "#fff",
                textAlign: "center",
                borderRadius: "15px",
              }}
            >
              <Paragraph style={{ textAlign: "left", color: "#fff", fontSize: "16px" }}>
        Your use of Guildiscover is governed by our Privacy Policy, available at https://guildiscover.jst-tan.page/privacy . By using the Website, you agree to the collection and use of your information as described in the Privacy Policy.
      </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card
              title="Third-Party Websites"
              bordered={false}
              style={{
                backgroundColor: "#2d2e36",
                color: "#fff",
                textAlign: "center",
                borderRadius: "15px",
              }}
            >
              <Paragraph style={{ textAlign: "left", color: "#fff", fontSize: "16px" }}>
        Guildiscover may contain links to third-party websites or services. We do not control or endorse these third-party sites and are not responsible for their content or privacy practices. Accessing third-party websites is at your own risk.
      </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
          <Card
              title="Service AS IS" 
              bordered={false}
              style={{
                backgroundColor: "#2d2e36",
                color: "#fff",
                textAlign: "center",
                borderRadius: "15px",
              }}
            >
              <Paragraph style={{ textAlign: "left", color: "#fff", fontSize: "16px" }}>
        Guildiscover is provided on an “AS IS” and “AS AVAILABLE” basis, without warranties of any kind, express or implied. We do not guarantee that the Website will function uninterrupted or error-free, nor do we make any guarantees regarding the accuracy, reliability, or availability of the Website.
      </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
          <Card
              title="Limitation of Liability" 
              bordered={false}
              style={{
                backgroundColor: "#2d2e36",
                color: "#fff",
                textAlign: "center",
                borderRadius: "15px",
              }}
            >
              <Paragraph style={{ textAlign: "left", color: "#fff", fontSize: "16px" }}>
        To the fullest extent permitted by law, Guildiscover and its affiliates will not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of the Website.
      </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
          <Card
              title="Indemnification" 
              bordered={false}
              style={{
                backgroundColor: "#2d2e36",
                color: "#fff",
                textAlign: "center",
                borderRadius: "15px",
              }}
            >
              <Paragraph style={{ textAlign: "left", color: "#fff", fontSize: "16px" }}>
        You agree to indemnify and hold Guildiscover and its affiliates harmless from any claims, damages, losses, or legal fees arising out of your use of the Website, your violation of these Terms, or your violation of any rights of another.
      </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
          <Card
              title="Governing Laws" 
              bordered={false}
              style={{
                backgroundColor: "#2d2e36",
                color: "#fff",
                textAlign: "center",
                borderRadius: "15px",
              }}
            >
              <Paragraph style={{ textAlign: "left", color: "#fff", fontSize: "16px" }}>
        These Terms and any disputes related to them or the use of the Website will be governed by the laws of Malaysia. You agree to submit to the exclusive jurisdiction of the courts in Malaysia for the resolution of any disputes.
      </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
          <Card
              title="Severability" 
              bordered={false}
              style={{
                backgroundColor: "#2d2e36",
                color: "#fff",
                textAlign: "center",
                borderRadius: "15px",
              }}
            >
              <Paragraph style={{ textAlign: "left", color: "#fff", fontSize: "16px" }}>
        If any provision of these Terms is found to be invalid or unenforceable by a court of competent jurisdiction, the remaining provisions will continue to be valid and enforceable. 
      </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
          <Card
              title="Waiver" 
              bordered={false}
              style={{
                backgroundColor: "#2d2e36",
                color: "#fff",
                textAlign: "center",
                borderRadius: "15px",
              }}
            >
              <Paragraph style={{ textAlign: "left", color: "#fff", fontSize: "16px" }}>
        Failure to enforce any provision of these Terms by Guildiscover will not constitute a waiver of that provision or any other provision in these Terms. 
      </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
          <Card
              title="Termination of Services" 
              bordered={false}
              style={{
                backgroundColor: "#2d2e36",
                color: "#fff",
                textAlign: "center",
                borderRadius: "15px",
              }}
            >
          <Paragraph style={{ textAlign: "left", color: "#fff", fontSize: "16px" }}>
        We reserve the right to modufy, suspend, or terminate the Website or any part of it at any time, for any reason, with or without notice. Upon termination, the licenses granted o you by these Terms will automatically terminate.
      </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
          <Card
              title="Entire Agreement" 
              bordered={false}
              style={{
                backgroundColor: "#2d2e36",
                color: "#fff",
                textAlign: "center",
                borderRadius: "15px",
              }}
            >
              <Paragraph style={{ textAlign: "left", color: "#fff", fontSize: "16px" }}>
        These Terms, along with any additional terms, policies, and agreements referenced within, constitute the entire agreement between you and Guildiscover regarding the use of the Website. 
      </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
          <Card
              title="Prohibited Conduct" 
              bordered={false}
              style={{
                backgroundColor: "#2d2e36",
                color: "#fff",
                textAlign: "center",
                borderRadius: "15px",
              }}
            >
              <Paragraph style={{ textAlign: "left", color: "#fff", fontSize: "16px" }}>
        Users are not permitted to use the platform to engage in behavior that harms others. This includes but is not limited to:
          <ul class="unordered-list">
            <li>Harassment, bullying, or sending harmful or malicious content.</li>
            <li>Using the platform for illegal purposes.</li>
            <li>Uploading malicious software or viruses designed to disrupt services or harm others.</li>
          </ul>
      </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
          <Card
              title="Arbitration Agreement" 
              bordered={false}
              style={{
                backgroundColor: "#2d2e36",
                color: "#fff",
                textAlign: "center",
                borderRadius: "15px",
              }}
            >
              <Paragraph style={{ textAlign: "left", color: "#fff", fontSize: "16px" }}>
      <ul class="unordered-list">
            <li><strong>Direct Arbitration:</strong> In the event of any dispute, claim, or controversy arising from or related to these Terms or your use of Guildiscover, you agree to first attempt to resolve the dispute with us directly through negotiation. If we are unable to reach a resolution, you and Guildiscover agree to resolve the dispute through binding arbitration, conducted on an individual basis.</li>
            <li><strong>How Arbitration Works:</strong> Arbitration will be conducted in accordance with the rules of [Insert Arbitration Institution] and will take place in Malaysia. The arbitrator’s decision will be final and binding.</li>
            <li><strong>No Class Actions:</strong> By agreeing to these Terms, you waive any right to participate in a class action or class-wide arbitration. Any dispute resolution will be conducted on an individual basis, and you agree not to bring any claim in a representative or collective capacity.</li>
          </ul>
      </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
          <Card
              title="Content Uploads and Usage" 
              bordered={false}
              style={{
                backgroundColor: "#2d2e36",
                color: "#fff",
                textAlign: "center",
                borderRadius: "15px",
              }}
            >
              <Paragraph style={{ textAlign: "left", color: "#fff", fontSize: "16px" }}>
      <ul class="unordered-list">
				    <li><strong>Permitted Content:</strong> You may upload information related to your Discord servers and bots for discovery by other users. </li>
				    <li><strong>Prohibited Content:</strong> You may not upload content that contains:
				      <ul class="unordered-list">
                <li>NSFW (Not Safe For Work) material, including but not limited to explicit, pornographic, violent or abusive content.</li>
                <li>Content that harms or targets othersa, including harassment, hate speech or illegal activity. </li>
              </ul>
            </li>
				    <li><strong>Non-Exclusive License:</strong> By uploading any content to Guildiscover, you grant us a <strong>non-exclusive, worldwide, royalty-free license</strong> to use, modify, reproduce, distribute, and display your content for the purpose of operating, improving and promoting the Website. </li>
				    <li><strong>Prohibited Usage:</strong> You may not use Guildiscover to harm others, such as attempting to hack, harm or otherwise interfere with the experience of other users or third parties. </li>
				  </ul>
      </Paragraph>
            </Card>
          </Col>
        </Row>
    </Content>
  );
};

export default Terms;

