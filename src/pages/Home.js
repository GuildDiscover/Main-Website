import React from "react";
import { Layout } from "antd";
import FeaturesSection from "../components/FeaturesSection";
import { features, newServers, topServers } from "../data/HomePageData";
import HomeServerList from "../components/Home/HomeServerList";
import HomeHeroSection from "../components/Home/HomeHeroSection";
import HomeCallToAction from "../components/Home/HomeCallToAction";

const { Content } = Layout;

const Home = () => {
  return (
    <Content>
      {/* Hero Section */}
      <HomeHeroSection />

      {/* Features Section */}
      <FeaturesSection features={features} />

      <HomeServerList servers={topServers} title="Discover Top Communities" />

      <HomeServerList servers={newServers} title="Discover New Communities" />

      {/* Call-to-Action Section */}
      <HomeCallToAction />
    </Content>
  );
};

export default Home;
