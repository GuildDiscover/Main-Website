import React from "react";
import { Layout, Typography, Row, Col, Card  } from "antd";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const Privacy = () => {
  return (
    <Content style={{ padding: "50px", background: "black", color: "#fff", padding: "50px 20px" }}>
      <div
        style={{
          textAlign: "center",
          padding: "40px",
          background: "linear-gradient(135deg, #6a11cb, #2575fc)",
          borderRadius: "15px",
          marginBottom: "50px",
        }}
      >
        <Title level={1} style={{ textAlign: "center", color: "#fff" }}>
        Privacy Policy
      </Title>
      <Paragraph style={{ textAlign: "center", color: "#fff", fontSize: "16px" }}>
      <strong>Effective Date: 10 October 2024</strong>
	    <br></br>
        At <strong>Guildiscover</strong> (accessible via https://guildiscover.jst-tan.page), we are deeply committed to protecting your privacy and ensuring your experience on our website is safe, enjoyable, and anonymous. This Privacy Policy explains how we collect, use, and protect any information gathered while using our services. If you do not agree with this Privacy Policy, please do not use our service. By accessing or using Guildiscover, you consent to the terms of this policy.
      </Paragraph>  
      </div>
      <br></br>
      <Row gutter={[16, 16]}>
      <Col xs={24} sm={12} md={8}>
          <Card
              title={<span style={{ color: "#fff"}}>Information We Collect</span>}
              bordered={false}
              style={{
                backgroundColor: "#2d2e36",
                color: "#fff",
                textAlign: "center",
                borderRadius: "15px",
              }}
            >
              <Paragraph style={{ textAlign: "left", color: "#fff", fontSize: "16px" }}>
      We only collect <strong>anonymous information</strong> that helps us enhance your user experience without compromising your privacy. No personal data such as IP addresses are collected. We gather:
        <br></br>
          <ul class="unordered-list">
            <li><strong>Session Information:</strong> Pages viewed, time spent on the site, and interactions.</li>
            <li><strong>Traffic Source Information:</strong> How you reached our website (e.g., search engines, links).</li>
            <li><strong>Performance Information:</strong> Data to monitor and improve the website's performance.</li>
          </ul>
        <br></br>
        Additionally, if you choose to <strong>contact us</strong> through support, we may collect your <strong>email address, name, and any information you disclose</strong> in your communications. We use <strong>Discord</strong> as our customer support platform for processing these inquiries.
      </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card
              title={<span style={{ color: "#fff"}}>User Rights & Limitations</span>}
              bordered={false}
              style={{
                backgroundColor: "#2d2e36",
                color: "#fff",
                textAlign: "center",
                borderRadius: "15px",
              }}
            >
              <Paragraph style={{ textAlign: "left", color: "#fff", fontSize: "16px" }}>
      By using Guildiscover, users agree to the following:
          <br></br>
          <ul class="unordered-list">
            <li><strong>Access Restrictions:</strong> Guildiscover reserves the right to disable access to our website at our sole discretion.</li>
            <li><strong>Use of Data and Content:</strong> Users are <strong>prohibited from using any information or data</strong> from the website for personal, commercial, or non-commercial purposes. Unauthorized use of our data is strictly prohibited.</li>
            <li><strong>Agreement with Terms:</strong> If you do not agree with this Privacy Policy, please refrain from using our website. Your continued use constitutes acceptance of our privacy practices.</li>
          </ul>
      </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
          <Card
              title={<span style={{ color: "#fff"}}>Our Service Providers</span>} 
              bordered={false}
              style={{
                backgroundColor: "#2d2e36",
                color: "#fff",
                textAlign: "center",
                borderRadius: "15px",
              }}
            >
          <Paragraph style={{ textAlign: "left", color: "#fff", fontSize: "16px" }}>
      To maintain the quality and performance of our services, we use the following providers:
      <br></br>
        <ul class="unordered-list">
                <li><strong>Piwik.PRO (Analytics):</strong> Provides anonymous data to improve user experience. No personal data is collected.</li>
                <li><strong>CloudFlare (Security & Performance):</strong> Ensures the security and speed of the website. It collects anonymized data on devices and browser types.</li>
                <li><strong>Netlify (Hosting):</strong> Collects technical server data to host our website.</li>
                <li><strong>FontAwesome & Google Fonts (Web Fonts):</strong> Load fonts and icons, collecting minimal anonymous data for font rendering.</li>
            </ul>
      </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card
              title={<span style={{ color: "#fff"}}>Purpose of Data Collection</span>}
              bordered={false}
              style={{
                backgroundColor: "#2d2e36",
                color: "#fff",
                textAlign: "center",
                borderRadius: "15px",
              }}
            >
             <Paragraph style={{ textAlign: "left", color: "#fff", fontSize: "16px" }}>
      We collect data to:
          <br></br>
          <ul class="unordered-list">
            <li><strong>Provide a safe and enjoyable user experience.</strong></li>
            <li><strong>Improve website performance and services.</strong></li>
            <li><strong>Analyze statistical data</strong> on how our users interact with our website.</li>
          </ul>
          <br></br>
          This data is collected through secure facilities to ensure that your experience on Guildiscover remains private and reliable.
      </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
          <Card
              title={<span style={{ color: "#fff"}}>Security Management Practices</span>} 
              bordered={false}
              style={{
                backgroundColor: "#2d2e36",
                color: "#fff",
                textAlign: "center",
                borderRadius: "15px",
              }}
            >
              <Paragraph style={{ textAlign: "left", color: "#fff", fontSize: "16px" }}>
      At Guildiscover, we prioritize the security of the information we collect. Our security measures include:
          <br></br>
          <br></br>
          <ul class="unordered-list">
            <li><strong>Data Encryption:</strong> All data transmitted to and from the website is encrypted.</li>
            <li><strong>Access Control:</strong> Only authorized personnel have access to the data.</li>
            <li><strong>Regular Audits:</strong> We conduct security audits to ensure vulnerabilities are identified and addressed.</li>
          </ul>
      </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card
              title={<span style={{ color: "#fff"}}>Total Anonymity with Piwik.PRO</span>}
              bordered={false}
              style={{
                backgroundColor: "#2d2e36",
                color: "#fff",
                textAlign: "center",
                borderRadius: "15px",
              }}
            >
              <Paragraph style={{ textAlign: "left", color: "#fff", fontSize: "16px" }}>
      We use <strong>Piwik.PRO</strong> as our analytics tool to provide <strong>total anonymity</strong>. Unlike other analytics platforms like Google Analytics, Piwik.PRO allows us to set up a <strong>custom solution</strong> that ensures <strong>no personal data is collected</strong>. This means:
      <br></br>
          <br></br>
          <ul class="unordered-list">
            <li><strong>No IP tracking</strong> or personal information collection.</li>
            <li>Data is aggregrated and anonymous, ensuring <strong>complete privacy</strong> for our users.</li>
          </ul>
      </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card
              title={<span style={{ color: "#fff"}}>Where Data is Stored & Processed</span>}
              bordered={false}
              style={{
                backgroundColor: "#2d2e36",
                color: "#fff",
                textAlign: "center",
                borderRadius: "15px",
              }}
            >
              <Paragraph style={{ textAlign: "left", color: "#fff", fontSize: "16px" }}>
        All collected data, such as session and performance information, is stored at our <strong>third-party providers</strong>, primarily <strong>Piwik.PRO</strong>. While this data is processed by our third-party services, it is <strong>accessed and managed in Malaysia</strong> under strict privacy and security protocols. No personal information is collected or stored.
      </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
          <Card
              title={<span style={{ color: "#fff"}}>Our Commitment To User Privacy</span>} 
              bordered={false}
              style={{
                backgroundColor: "#2d2e36",
                color: "#fff",
                textAlign: "center",
                borderRadius: "15px",
              }}
            >
              <Paragraph style={{ textAlign: "left", color: "#fff", fontSize: "16px" }}>
        We deeply care about our users' privacy. We <strong>do not sell or share personal information</strong> with third parties. The data we collect through anonymous analytics is used solely to improve the quality and performance of our website and services.
      </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
          <Card
              title={<span style={{ color: "#fff"}}>Responding to Government Requests</span>} 
              bordered={false}
              style={{
                backgroundColor: "#2d2e36",
                color: "#fff",
                textAlign: "center",
                borderRadius: "15px",
              }}
            >
              <Paragraph style={{ textAlign: "left", color: "#fff", fontSize: "16px" }}>
      As we do not collect any personal information, we cannot provide such data in response to government or legal requests. Should we be required by law to respond, we will comply while maintaining the privacy and anonymity of our users.
      </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
          <Card
              title={<span style={{ color: "#fff"}}>No Cookies</span>} 
              bordered={false}
              style={{
                backgroundColor: "#2d2e36",
                color: "#fff",
                textAlign: "center",
                borderRadius: "15px",
              }}
            >
              <Paragraph style={{ textAlign: "left", color: "#fff", fontSize: "16px" }}>
        Guildiscover does not use cookies. Our website operates without tracking mechanisms, ensuring that you can browse freely without concern for cookie-based data collection.
      </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
          <Card
              title={<span style={{ color: "#fff"}}>Children's Privacy</span>} 
              bordered={false}
              style={{
                backgroundColor: "#2d2e36",
                color: "#fff",
                textAlign: "center",
                borderRadius: "15px",
              }}
            >
              <Paragraph style={{ textAlign: "left", color: "#fff", fontSize: "16px" }}>
      Guildiscover does not knowingly collect any personal information from children under the age of 13. If we learn that a child under 13 has provided personal information, we will take steps to delete it immediately.
      </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
          <Card
              title={<span style={{ color: "#fff"}}>Links to Other Websites</span>} 
              bordered={false}
              style={{
                backgroundColor: "#2d2e36",
                color: "#fff",
                textAlign: "center",
                borderRadius: "15px",
              }}
            >
         <Paragraph style={{ textAlign: "left", color: "#fff", fontSize: "16px" }}>
        Guildiscover may include links to third-party websites. Please be aware that we are not responsible for the privacy practices of these external sites. We encourage users to review the privacy policies of any third-party websites they visit.
      </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
          <Card
              title={<span style={{ color: "#fff"}}>Disclaimer</span>} 
              bordered={false}
              style={{
                backgroundColor: "#2d2e36",
                color: "#fff",
                textAlign: "center",
                borderRadius: "15px",
              }}
            >
              <Paragraph style={{ textAlign: "left", color: "#fff", fontSize: "16px" }}>
        The content and services provided by Guildiscover are for general information purposes only. We make no guarantees regarding the accuracy or availability of information on our website. Guildiscover is not liable for any damages resulting from the use of our services or data.
      </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
          <Card
              title={<span style={{ color: "#fff"}}>Validity of Terms</span>} 
              bordered={false}
              style={{
                backgroundColor: "#2d2e36",
                color: "#fff",
                textAlign: "center",
                borderRadius: "15px",
              }}
            >
              <Paragraph style={{ textAlign: "left", color: "#fff", fontSize: "16px" }}>
        This Privacy Policy may be updated or modified at any time. We encourage users to review the policy periodically. Your continued use of Guildiscover after changes have been made to this policy constitutes your acceptance of the updated terms.
      </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
          <Card
              title={<span style={{ color: "#fff"}}>Compliance with Privacy Laws</span>} 
              bordered={false}
              style={{
                backgroundColor: "#2d2e36",
                color: "#fff",
                textAlign: "center",
                borderRadius: "15px",
              }}
            >
              <Paragraph style={{ textAlign: "left", color: "#fff", fontSize: "16px" }}>
      Guildiscover complies with all major global privacy regulations, including:
          <br></br>
          <ul class="unordered-list">
            <li><strong>GDPR (General Data Protection Regulation):</strong> Ensuring no personal data is collected or shared.</li>
            <li><strong>PDPA (Personal Data Protection Act):</strong> We comply with Malaysia’s PDPA standards by avoiding personal data collection.</li>
            <li><strong>CCPA (California Consumer Privacy Act):</strong> In full compliance with CCPA, we do not collect or process personal information from our users.</li>
          </ul>
      </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
          <Card
              title={<span style={{ color: "#fff"}}>Contact Us</span>}
              bordered={false}
              style={{
                backgroundColor: "#2d2e36",
                color: "#fff",
                textAlign: "center",
                borderRadius: "15px",
              }}
            >
              <Paragraph style={{ textAlign: "left", color: "#fff", fontSize: "16px" }}>
        If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
            <br></br>
            <br></br>
            <strong>Guildiscover Team</strong>
            <ul class="unordered-list">
                <li><strong>Email:</strong> guildiscover@jst-tan.page</li>
                <li><strong>Website:</strong> https://guildiscover.jst-tan.page</li>
            </ul>
            <br></br>
            By using Guildiscover, you agree to the terms of this Privacy Policy. If you do not agree, please refrain from using our website. 
      </Paragraph>
            </Card>
          </Col>
        </Row>
    </Content>
  );
};

export default Privacy;
