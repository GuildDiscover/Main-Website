import React from "react";
import { Layout, Typography, Row, Col, Card, Button, Divider } from "antd";
import { TeamOutlined, AppstoreOutlined, GlobalOutlined, CheckCircleOutlined } from "@ant-design/icons";
import ServerCard from "../components/serverCard";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const Home = () => {
  const topServers = [
    {
      id: 1,
      name: "Guildiscover Discord Server",
      description:
        "The official Discord server of Guildiscover platform. A server to discuss about Guildiscover, whether for asking support, giving feedback, hangout and much more. A server for the Guildiscover platform.",
      long_description:
        "Guildiscover Discord is the official community hub for the Guildiscover directory platform, designed as a central space for support, feedback, and connection. Whether you need assistance with the platform, want to report bugs, or are a server owner looking to submit your server to the directory, this is the place to be. Beyond platform support, Guildiscover Discord is home to a vibrant community where users can chat, share insights, and connect with fellow Discord and Guildiscover enthusiasts. It’s a welcoming space to relax, discuss the latest world news, and engage in conversations about a wide range of topics. Join Guildiscover Discord today and become part of a dynamic community that brings platform users and server owners together!",
      owner_id: "Jst Tan (1203273411627847763)",
      invite_link: "https://discord.gg/z7DC9tTyEH",
      member_count: 21,
      categories: ["Support", "Community", "Discord", "Guildiscover"],
      created_at: "2024-09-21T20:35:07Z",
      boost_level: 0,
      language: "English",
      country: "Malaysia",
      logo: "/public/guildiscover.png",
      status: "New",
      rating: 4,
      moderator_review:
        "An amazing server and an useful moderation examples for all communities to take inspiration from. It is also maintained by the team of Guildiscover platform, which is maintained into one of the highest standards possible. It also has many amazing channels for everyone to chat in, while some are still remaining for resources related to Guildiscover. ",
      moderator_date: "22 November 2024",
    },
    {
      id: 2,
      name: "OSS Contributors Guild",
      description:
        "OSS Contributors Guild, under Unity Sphere led by Jst Tan, is a welcoming community for open-source enthusiasts, offering hands-on guidance, mentorship, and collaboration on diverse projects. From newcomer-friendly support to expert-led workshops, it is the go-to hub for learning, contributing, and growing in the open-source world.",
      long_description:
        "OSS Contributors Guild is a vibrant and collaborative community under Unity Sphere, led by Jst Tan, designed for open-source enthusiasts, developers, and newcomers eager to make meaningful contributions to open-source projects. Whether you're an experienced coder or taking your first steps in open source, the Guild offers a welcoming space with hands-on guidance, mentorship, and step-by-step support for newcomers. Members can collaborate on exciting projects spanning code, documentation, design, and ideas while engaging in deep discussions on best practices, open-source ethics, and software development trends. The Guild also provides workshops, tutorials, and expert-led sessions to help members learn and grow. As part of Unity Sphere’s mission to create safe, inclusive, and family-friendly communities, OSS Contributors Guild stands as the go-to hub for open-source collaboration and innovation. Join today and be part of a supportive network of enthusiasts building, learning, and contributing together!",
      owner_id: "Jst Tan (1203273411627847763)",
      invite_link: "https://discord.gg/c6kf2ZEyr4",
      member_count: 21,
      categories: [
        "Open-Source",
        "opensource",
        "Technology",
        "Tech",
        "Hackathon",
        "Programming",
        "Community",
      ],
      created_at: "2024-09-13T21:53:23Z",
      boost_level: 0,
      language: "English",
      country: "Malaysia",
      logo: "https://i.ibb.co/PxnXvP5/OSS-Contributors-Guild.png",
      status: "New",
      rating: 4,
      moderator_review:
        "It is an awesome server, with many channels aligning the interests of open source contributors. It also contains many useful channels for documentation, and many forums for threaded discussions related to open source. Being a part of Unity Sphere, it also give the team a trustworthy reputation, for maintaining a quality and safe community for everyone. Overall, it is worth to join. ",
      moderator_date: "18 November 2024",
    },
    {
      id: 8,
      name: "Sleepy Corner",
      description: "Sleepy Corner, your go-to place for chilling out and having a small casual chat. ",
      long_description:
        "Sleepy Corner is a casual and vibrant community on the Discord platform. It is a cozy and active place, for everyone looking for a new friend to chat together, or just chill out after a busy day. With an excellent team of moderators and administrators, it is a perfect place for everyone to hangout and have some fun together online, with a welcoming atmosphere for everyone. Join the community today, and start meeting new friends today!",
      owner_id: "Ray (444562419348406272)",
      invite_link: "https://discord.gg/A5gYc9MuQE",
      member_count: 127,
      categories: ["Hangout", "Community", "Fun"],
      created_at: "2023-12-29T02:02:16Z",
      boost_level: 0,
      language: "English",
      country: "United States",
      logo: "https://example.com/images/gaming-logo.jpg",
      status: "Semi-Active",
      rating: 5,
      moderator_review:
        "It is an amazing server, with kind and helpful staff. It is a vibrant community, with an active team of moderators and administrators too. It is highly encouraged for everyone that wanted to chill out to come and join this exciting community. ",
      moderator_date: "22 November 2024",
    },
  ];

  const newServers = [
    {
      id: 3,
      name: "The Writer's Haven",
      description:
        "The Writer’s Haven, under Unity Sphere led by Jst Tan, is a vibrant community where writers of all levels connect, share, and grow through feedback, creative prompts, workshops, and resources. It’s the perfect space to refine your craft, find inspiration, and collaborate with fellow storytellers.",
      long_description:
        "The Writer’s Haven is a cozy and vibrant community designed for writers of all levels and genres to connect, create, and collaborate. Whether you’re a seasoned author, a passionate storyteller, or just starting your writing journey, The Writer’s Haven offers the perfect space to share your work, gain feedback, and grow as a writer. Engage in lively discussions about storytelling techniques, character development, world-building, and more, while exploring creative prompts and challenges that spark your imagination. Share your writing in a supportive environment and receive constructive feedback from fellow writers, whether you’re refining a short story, workshopping a novel, or collaborating on new projects. Learn from experienced writers and industry professionals through workshops, AMA sessions, and events, gaining invaluable insights into writing, publishing, and navigating the literary world. Additionally, access a curated resource library filled with guides, tips, and tools to enhance your skills and inspire your creativity. Operated by Unity Sphere, an organization led by Jst Tan, The Writer’s Haven is part of a broader mission to create inclusive, family-friendly, and welcoming communities. Unity Sphere’s dedication to fostering positive and creative spaces ensures that The Writer’s Haven is the ultimate community for writers seeking connection, growth, and inspiration. Join today to become part of a supportive network where your creativity can flourish, and your stories come to life!",
      owner_id: "Jst Tan (1203273411627847763)",
      invite_link: "https://discord.gg/yQ5zCzjhVy",
      member_count: 18,
      categories: ["Writing", "Community", "Writers", "SciFi", "Story", "NonFiction"],
      created_at: "2024-09-14T13:47:41Z",
      boost_level: 0,
      language: "English",
      country: "Malaysia",
      logo: "https://i.ibb.co/mRDh5Nw/The-Writer-Haven.png",
      status: "New",
      rating: 4,
      moderator_review:
        "This is a nice server, with many channels suitable for any writers alike. It is very recommended for established as well as aspiring server alike. This community being apart of Unity Sphere also give it a good reputation for maintaining a welcoming server alike. ",
      moderator_date: "20 November 2024",
    },
    {
      id: 4,
      name: "TechVerse",
      description:
        "TechVerse, under Unity Sphere led by Jst Tan, is a vibrant community for tech enthusiasts to connect, learn, and innovate in areas like Web3, programming, and the Metaverse. With cutting-edge discussions, collaborative projects, expert-led workshops, and a resource hub, it’s the ultimate space to explore and shape the future of technology.",
      long_description:
        "TechVerse is the ultimate community for tech enthusiasts, developers, and innovators passionate about exploring the latest in technology, from Web3 and programming to the Metaverse and future tech trends. Offering a dynamic space to connect, learn, and collaborate, TechVerse features cutting-edge discussions on advancements like blockchain, AI, and software development, as well as collaborative projects, hackathons, and opportunities to kick-start initiatives. Members gain insights from tech professionals through expert-led AMA sessions and workshops designed to sharpen skills and expand knowledge. Additionally, the community provides a rich resource hub with tutorials, tech guides, and collective expertise to help members master emerging technologies. Operated by Unity Sphere, an organization led by Jst Tan, TechVerse reflects a broader mission to build inclusive, family-friendly, and safe communities, standing out as the leading hub for tech enthusiasts eager to learn, share, and innovate. Join TechVerse today and be part of a forward-thinking community where technology and creativity shape the future!",
      owner_id: "Jst Tan (1203273411627847763)",
      invite_link: "https://discord.gg/UdsYFmbnxn",
      member_count: 17,
      categories: ["Technology", "Community", "Programming", "Web3", "Cybersecurity"],
      created_at: "2024-09-13T21:53:58Z",
      boost_level: 0,
      language: "English",
      country: "Malaysia",
      logo: "https://i.ibb.co/bdgsC5Q/Tech-Verse.png",
      status: "New",
      rating: 4,
      moderator_review:
        "An amazing server for all discussions related to technology. A place recommended to talk about technology, tech trends, Web3 and much more. Being apart of Unity Sphere, with a trustworthy reputation for good moderation, it is a community recommended for everyone interested in technology alike. ",
      moderator_date: "20 November 2024",
    },
    {
      id: 5,
      name: "GameVerse Hub",
      description:
        "GameVerse Hub, led by Jst Tan under Unity Sphere, is a vibrant community where gamers, developers, and enthusiasts connect to discuss gaming trends, participate in tournaments, and explore game development. Whether you're a casual player, esports competitor, or aspiring creator, it’s the ultimate space to share, compete, and grow in the world of gaming.",
      long_description:
        "GameVerse Hub is the ultimate community for gamers, developers, and enthusiasts to connect, share, and explore the world of gaming, whether you're a casual player, esports competitor, or aspiring game developer. Stay updated with the latest gaming news and trends, discuss AAA titles and indie gems, and participate in tournaments, challenges, and events catering to all skill levels. For those interested in game development and modding, GameVerse Hub provides a collaborative space to share projects, exchange ideas, and receive feedback, while streamers and content creators can grow their audience and refine their craft with community support. Operated by Unity Sphere, led by Jst Tan, GameVerse Hub reflects a commitment to fostering inclusive, creative, and family-friendly spaces. It stands out as a premier destination for gamers and developers alike, offering a unique blend of gaming, creativity, and competition. Join today to become part of a thriving community where your passion for gaming can flourish!",
      owner_id: "Jst Tan (1203273411627847763)",
      invite_link: "https://discord.gg/D8UVMUjYFc",
      member_count: 18,
      categories: ["Games", "Community", "Gaming", "Among-Us", "Fortnite"],
      created_at: "2024-09-13T21:53:40Z",
      boost_level: 0,
      language: "English",
      country: "Malaysia",
      logo: "https://i.ibb.co/p1R08qK/Game-Verse-Hub.png",
      status: "New",
      rating: 4,
      moderator_review:
        "An interesting server for all gamers alike. A server with many channels for all types of gaming discussions. A community for all gamers and recommended for all gamers alike. It also has good moderation principles too, through Unity Sphere. Everyone is encouraged to check it out.",
      moderator_date: "21 November 2024",
    },
  ];

  return (
    <Content
      style={{
        // padding: "50px",
        // background: "linear-gradient(#80ED99, #45DF81, #0AD1C8, #14919B, #0B6477, #213A57",
        // background: "linear-gradient(135deg, #6a11cb, #2575fc)",
        background: "black",
        color: "#fff",
        padding: "50px 20px",
      }}
    >
      {/* Hero Section */}
      <div
        style={{
          textAlign: "center",
          padding: "60px 40px",
          // background: "linear-gradient(135deg, #6a11cb, #2575fc)",
          // background: "black",
          background: "linear-gradient(135deg, #6a11cb, #2575fc)",
          borderRadius: "20px",
          marginBottom: "70px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        }}
      >
        <Title
          level={1}
          style={{ fontWeight: "800", color: "#fff", fontSize: "3.5rem", marginBottom: "20px" }}
        >
          Welcome to Guildiscover!
        </Title>
        <Paragraph style={{ fontSize: "1.2rem", color: "#fff", maxWidth: "800px", margin: "0 auto 30px" }}>
          Uncover awesome communities on your favourite platform for you on Guildiscover today. Discover,
          join, and connect with amazing servers tailored to your interests or your needs.
        </Paragraph>
        <div>
          <Button
            type="primary"
            size="large"
            href="/server-list"
            style={{
              marginRight: "15px",
              background: "#4CAF50",
              borderColor: "#4CAF50",
              padding: "0 30px",
              height: "50px",
              fontSize: "1.1rem",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#45a049";
              e.currentTarget.style.borderColor = "#45a049";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 6px 8px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#4CAF50";
              e.currentTarget.style.borderColor = "#4CAF50";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
            }}
          >
            Discover Communities
          </Button>
          <Button
            size="large"
            href="https://discord.gg/z7DC9tTyEH"
            style={{
              background: "transparent",
              borderColor: "#fff",
              color: "#fff",
              padding: "0 30px",
              height: "50px",
              fontSize: "1.1rem",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.1)";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 6px 8px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
            }}
          >
            Join Our Community
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <div
        style={{
          marginBottom: "70px",
          background: "rgba(255,255,255,0.1)",
          padding: "40px",
          borderRadius: "20px",
        }}
      >
        {" "}
        <Title
          level={2}
          style={{ fontWeight: "bold", color: "#fff", textAlign: "center", marginBottom: "40px" }}
        >
          {" "}
          Discover Our Features{" "}
        </Title>{" "}
        <Row gutter={[32, 32]}>
          {" "}
          <Col xs={24} sm={24} md={8}>
            {" "}
            <Card
              hoverable
              cover={<AppstoreOutlined style={{ fontSize: "60px", color: "#4CAF50", padding: "30px" }} />}
              style={{
                backgroundColor: "rgba(255,255,255,0.1)",
                borderRadius: "15px",
                overflow: "hidden",
                border: "none",
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              }}
            >
              {" "}
              <Card.Meta
                title={
                  <span style={{ color: "#fff", fontSize: "1.5rem" }}>Discover Amazing Communities</span>
                }
                description={
                  <Paragraph style={{ color: "rgba(255,255,255,0.8)" }}>
                    {" "}
                    Explore a diverse range of communities on Guildiscover, from gaming to anime, writing to
                    arts. Find the perfect match for your interests and connect with like-minded individuals.{" "}
                  </Paragraph>
                }
              />{" "}
            </Card>{" "}
          </Col>{" "}
          <Col xs={24} sm={24} md={8}>
            {" "}
            <Card
              hoverable
              cover={<TeamOutlined style={{ fontSize: "60px", color: "#2196F3", padding: "30px" }} />}
              style={{
                backgroundColor: "rgba(255,255,255,0.1)",
                borderRadius: "15px",
                overflow: "hidden",
                border: "none",
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              }}
            >
              {" "}
              <Card.Meta
                title={<span style={{ color: "#fff", fontSize: "1.5rem" }}>Safety Ensured</span>}
                description={
                  <Paragraph style={{ color: "rgba(255,255,255,0.8)" }}>
                    {" "}
                    Our moderation team thoroughly scans all communities to ensure a safe environment for
                    everyone. Join servers with confidence, knowing your safety is our top priority.{" "}
                  </Paragraph>
                }
              />{" "}
            </Card>{" "}
          </Col>{" "}
          <Col xs={24} sm={24} md={8}>
            {" "}
            <Card
              hoverable
              cover={<GlobalOutlined style={{ fontSize: "60px", color: "#FFC107", padding: "30px" }} />}
              style={{
                backgroundColor: "rgba(255,255,255,0.1)",
                borderRadius: "15px",
                overflow: "hidden",
                border: "none",
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              }}
            >
              {" "}
              <Card.Meta
                title={<span style={{ color: "#fff", fontSize: "1.5rem" }}>Secure Platform</span>}
                description={
                  <Paragraph style={{ color: "rgba(255,255,255,0.8)" }}>
                    {" "}
                    We prioritize your security with a trusted platform built on strict security policies and
                    advanced web security methods, ensuring a safe and enjoyable experience.{" "}
                  </Paragraph>
                }
              />{" "}
            </Card>{" "}
          </Col>{" "}
        </Row>{" "}
      </div>

      <div style={{ marginBottom: "50px" }}>
        <Divider style={{ borderColor: "#444", marginBottom: "50px" }}>
          <Title level={2} style={{ fontWeight: "bold", color: "white" }}>
            Discover Top Communities
          </Title>
        </Divider>
        <Row gutter={[16, 16]} style={{ marginTop: "30px", justifyContent: "space-around" }}>
          {topServers.length > 0 ? (
            <React.Fragment>
              {topServers.map((server) => (
                <Col xs={24} sm={12} md={8} lg={6} key={server.id}>
                  <ServerCard server={server} />
                </Col>
              ))}
            </React.Fragment>
          ) : (
            <div style={{ textAlign: "center", width: "100vw", fontSize: "16px" }}>No Servers Found</div>
          )}
        </Row>
      </div>

      <div style={{ marginBottom: "50px" }}>
        <Divider style={{ borderColor: "#444", marginBottom: "50px" }}>
          <Title level={2} style={{ fontWeight: "bold", color: "white" }}>
            Discover New Communities
          </Title>
        </Divider>
        <Row gutter={[16, 16]} style={{ marginTop: "30px", justifyContent: "space-around" }}>
          {newServers.length > 0 ? (
            <React.Fragment>
              {newServers.map((server) => (
                <Col xs={24} sm={12} md={8} lg={6} key={server.id}>
                  <ServerCard server={server} />
                </Col>
              ))}
            </React.Fragment>
          ) : (
            <div style={{ textAlign: "center", width: "100vw", fontSize: "16px" }}>No Servers Found</div>
          )}
        </Row>
      </div>

      {/* Call-to-Action Section */}
      <div
        style={{
          textAlign: "center",
          padding: "40px",
          background: "linear-gradient(135deg, #6a11cb, #2575fc)",
          // background: "black",
          borderRadius: "15px",
          marginBottom: "35px",
          marginTop: "100px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <Title level={2} style={{ color: "#fff" }}>
            Ready to Find Your Community?
          </Title>
          <Paragraph style={{ fontSize: "22px", color: "#fff" }}>
            Join today and start exploring endless possibilities!
          </Paragraph>
          <Button type="primary" size="large" style={{ marginTop: "20px" }} icon={<CheckCircleOutlined />}>
            Join Now
          </Button>
        </div>
      </div>
    </Content>
  );
};

export default Home;
