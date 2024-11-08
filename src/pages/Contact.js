import React from "react";
import { Layout, Typography, Form, Input, Button, Row, Col, message } from "antd";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const Contact = () => {
  const onFinish = (values) => {
    message.success("Your message has been sent!");
    console.log("Received values:", values);
  };

  return (
    <Content style={{ padding: "50px", backgroundColor: "#f0f2f5" }}>
      <Title level={2} style={{ textAlign: "center" }}>
        Contact Us
      </Title>
      <Paragraph style={{ textAlign: "center", color: "#555" }}>
        We'd love to hear from you! Fill out the form below, and we'll get back to you shortly.
      </Paragraph>

      <Row justify="center">
        <Col xs={24} sm={16} md={12}>
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input placeholder="Your Name" />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please enter your email" }]}
            >
              <Input type="email" placeholder="Your Email" />
            </Form.Item>
            <Form.Item
              label="Message"
              name="message"
              rules={[{ required: true, message: "Please enter your message" }]}
            >
              <Input.TextArea rows={4} placeholder="Your Message" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Send Message
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Content>
  );
};

export default Contact;
