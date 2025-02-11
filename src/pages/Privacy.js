import React from "react";
import { motion } from "framer-motion";
import "./Privacy.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const headerVariants = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 },
  },
};

const Privacy = () => {
  const sections = [
    {
      title: "Information We Collect",
      content:
        "We only collect anonymous information that helps us enhance your user experience without compromising your privacy. No personal data such as IP addresses are collected. We gather:",
      items: [
        "Session Information: Pages viewed, time spent on the site, and interactions.",
        "Traffic Source Information: How you reached our website (e.g., search engines, links).",
        "Performance Information: Data to monitor and improve the website's performance.",
      ],
      additional_info:
        "Additionally, if you choose to contact us through support, we may collect your email address, name, and any information you disclose in your communications. We use Discord as our customer support platform for processing these inquiries.",
    },
    {
      title: "User Rights & Limitations",
      content: "By using Guildiscover, users agree to the following:",
      items: [
        "Access Restrictions: Guildiscover reserves the right to disable access to our website at our sole discretion.",
        "Use of Data and Content: Users are prohibited from using any information or data from the website for personal, commercial, or non-commercial purposes. Unauthorized use of our data is strictly prohibited.",
        "Agreement with Terms: If you do not agree with this Privacy Policy, please refrain from using our website. Your continued use constitutes acceptance of our privacy practices.",
      ],
    },
    {
      title: "Our Service Providers",
      content: "To maintain the quality and performance of our services, we use the following providers:",
      items: [
        "Piwik.PRO (Analytics): Provides anonymous data to improve user experience. No personal data is collected.",
        "CloudFlare (Security & Performance): Ensures the security and speed of the website. It collects anonymized data on devices and browser types.",
        "Netlify (Hosting): Collects technical server data to host our website.",
        "FontAwesome & Google Fonts (Web Fonts): Load fonts and icons, collecting minimal anonymous data for font rendering.",
      ],
    },
    {
      title: "Purpose of Data Collection",
      content: "We collect data to:",
      items: [
        "Provide a safe and enjoyable user experience.",
        "Improve website performance and services.",
        "Analyze statistical data on how our users interact with our website.",
      ],
      additional_info:
        "This data is collected through secure facilities to ensure that your experience on Guildiscover remains private and reliable.",
    },
    {
      title: "Security Management Practices",
      content:
        "At Guildiscover, we prioritize the security of the information we collect. Our security measures include:",
      items: [
        "Data Encryption: All data transmitted to and from the website is encrypted.",
        "Access Control: Only authorized personnel have access to the data.",
        "Regular Audits: We conduct security audits to ensure vulnerabilities are identified and addressed.",
      ],
    },
    {
      title: "Total Anonymity with Piwik.PRO",
      content:
        "We use Piwik.PRO as our analytics tool to provide total anonymity. Unlike other analytics platforms like Google Analytics, Piwik.PRO allows us to set up a custom solution that ensures no personal data is collected. This means:",
      items: [
        "No IP tracking or personal information collection.",
        "Data is aggregated and anonymous, ensuring complete privacy for our users.",
      ],
    },
    {
      title: "Where Data is Stored & Processed",
      content:
        "All collected data, such as session and performance information, is stored at our third-party providers, primarily Piwik.PRO.",
      additional_info:
        "While this data is processed by our third-party services, it is accessed and managed in Malaysia...",
    },
    {
      title: "Our Commitment To User Privacy",
      content:
        "We deeply care about our users' privacy. We do not sell or share personal information with third parties. The data we collect through anonymous analytics is used solely to improve the quality and performance of our website and services.",
    },
    {
      title: "Responding to Government Requests",
      content:
        "As we do not collect any personal information, we cannot provide such data in response to government or legal requests. Should we be required by law to respond, we will comply while maintaining the privacy and anonymity of our users.",
    },
    {
      title: "No Cookies",
      content:
        "Guildiscover does not use cookies. Our website operates without tracking mechanisms, ensuring that you can browse freely without concern for cookie-based data collection.",
    },
    {
      title: "Children's Privacy",
      content:
        "Guildiscover does not knowingly collect any personal information from children under the age of 13. If we learn that a child under 13 has provided personal information, we will take steps to delete it immediately.",
    },
    {
      title: "Links to Other Websites",
      content:
        "Guildiscover may include links to third-party websites. Please be aware that we are not responsible for the privacy practices of these external sites. We encourage users to review the privacy policies of any third-party websites they visit.",
    },
    {
      title: "Disclaimer",
      content:
        "The content and services provided by Guildiscover are for general information purposes only. We make no guarantees regarding the accuracy or availability of information on our website. Guildiscover is not liable for any damages resulting from the use of our services or data.",
    },
    {
      title: "Validity of Terms",
      content:
        "This Privacy Policy may be updated or modified at any time. We encourage users to review the policy periodically. Your continued use of Guildiscover after changes have been made to this policy constitutes your acceptance of the updated terms.",
    },
    {
      title: "Compliance with Privacy Laws",
      content: "Guildiscover complies with all major global privacy regulations, including:",
      items: [
        {
          law: "GDPR (General Data Protection Regulation)",
          description: "Ensuring no personal data is collected or shared.",
        },
        {
          law: "PDPA (Personal Data Protection Act)",
          description: "We comply with Malaysia’s PDPA standards by avoiding personal data collection.",
        },
        {
          law: "CCPA (California Consumer Privacy Act)",
          description:
            "In full compliance with CCPA, we do not collect or process personal information from our users.",
        },
      ],
    },
    {
      title: "Contact Us",
      content:
        "If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:",
      additional_info: {
        team: "Guildiscover Team",
        email: "guildiscover@jst-tan.page",
        website: "https://guildiscover.jst-tan.page",
      },
      disclaimer:
        "By using Guildiscover, you agree to the terms of this Privacy Policy. If you do not agree, please refrain from using our website.",
    },
  ];

  const renderListItems = (items) => {
    if (!items) return null;

    return (
      <motion.ul className="privacy-list">
        {items.map((item, index) => (
          <motion.li key={index} variants={listItemVariants} custom={index}>
            {item.law ? (
              <div className="law-item">
                <span className="law-title">{item.law}</span>
                <p className="law-description">{item.description}</p>
              </div>
            ) : (
              item
            )}
          </motion.li>
        ))}
      </motion.ul>
    );
  };

  const renderContactInfo = (info) => {
    if (!info) return null;

    return (
      <div className="contact-info">
        <h3>{info.team}</h3>
        <div className="contact-details">
          <a href={`mailto:${info.email}`} className="contact-link">
            {info.email}
          </a>
          <a href={info.website} className="contact-link" target="_blank" rel="noopener noreferrer">
            {info.website}
          </a>
        </div>
      </div>
    );
  };

  return (
    <motion.div className="privacy-container" initial="hidden" animate="visible" variants={containerVariants}>
      <motion.div className="privacy-header" variants={headerVariants}>
        <h1>Privacy Policy</h1>
        <p className="effective-date">Effective Date: 10 October 2024</p>
        <p className="header-content">
          At <strong>Guildiscover</strong>, we are deeply committed to protecting your privacy and ensuring
          your experience on our website is safe, enjoyable, and anonymous.
        </p>
      </motion.div>

      <motion.div className="privacy-grid" variants={containerVariants}>
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className={`privacy-card ${section.items ? "has-list" : ""}`}
            variants={cardVariants}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
          >
            <h2>{section.title}</h2>
            <div className="card-content">
              <p>{section.content}</p>
              {renderListItems(section.items)}
              {section.additional_info && (
                <p className="additional-info">
                  {typeof section.additional_info === "object"
                    ? renderContactInfo(section.additional_info)
                    : section.additional_info}
                </p>
              )}
              {section.disclaimer && <p className="disclaimer">{section.disclaimer}</p>}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Privacy;
