import React from "react";
import { motion } from "framer-motion";
import "./Guidelines.css";

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

const Guidelines = () => {
  const guidelines = [
    {
      title: "Be Respectful",
      items: [
        {
          heading: "Treat Others Kindly",
          content:
            "We expect all members to show respect to each other. Bullying, harassing, or threatening others is not allowed.",
        },
        {
          heading: "No Hate Speech or Discrimination",
          content:
            "Discrimination based on race, gender, religion, nationality, or any other personal characteristics will not be tolerated.",
        },
        {
          heading: "Keep Things Civil",
          content:
            "Keep the conversation positive and constructive. Personal attacks, name-calling, and insults are unacceptable.",
        },
      ],
    },
    {
      title: "No Dangerous or Illegal Sales",
      items: [
        {
          heading: "Illegal Goods",
          content:
            "Servers selling regulated goods (weapons, drugs, etc.) without proper licenses are not allowed.",
        },
        {
          heading: "No Dangerous Goods",
          content:
            "The sale of potentially harmful or dangerous items (explosives, firearms, etc.) is strictly prohibited.",
        },
        {
          heading: "Illegal Gambling",
          content:
            "Servers that coordinate, facilitate, or participate in illegal gambling activities are not permitted.",
        },
      ],
    },
    {
      title: "No Extremism, Child Abuse or Misinformation",
      items: [
        {
          heading: "No Extremist Content",
          content: "Servers promoting extremism or violent ideologies are not allowed.",
        },
        {
          heading: "Child Abuse / Child Sexual Abuse",
          content:
            "Any server containing or promoting content related to child abuse or child sexual exploitation is strictly forbidden.",
        },
        {
          heading: "No Misinformation",
          content:
            "Servers spreading deliberate misinformation (such as conspiracy theories, fake news, etc.) will be removed.",
        },
      ],
    },
    {
      title: "Don't Spam",
      items: [
        {
          heading: "Self-Promotion is Welcome",
          content:
            "Guildiscover is built for self-promotion! Feel free to share your servers, but don’t flood the platform with repetitive or irrelevant content.",
        },
        {
          heading: "No Spamming",
          content:
            "Excessive self-promotion, posting irrelevant links, or creating meaningless content that adds no value will be considered spam and removed",
        },
        {
          heading: "No Empty Servers or Redirects",
          content:
            "Servers that exist only to redirect users elsewhere or have no meaningful content are not allowed.",
        },
      ],
    },
    {
      title: "Respect Privacy & Security",
      items: [
        {
          heading: "No Doxxing",
          content: "Sharing someone’s private information without their consent is strictly prohibited.",
        },
        {
          heading: "No Harassment / Threats",
          content:
            "Harassing or threatening users by exposing their personal data or making them feel unsafe is not allowed.",
        },
        {
          heading: "No Malware / Viruses",
          content:
            "Sharing any form of malware (viruses, trojans, worms, etc.) to attack or steal data from others is not tolerated.",
        },
      ],
    },
    {
      title: "No Fraud / Scam",
      items: [
        {
          heading: "Illegal Goods",
          content:
            "Servers selling regulated goods (weapons, drugs, etc.) without proper licenses are not allowed.",
        },
        {
          heading: "No Dangerous Goods",
          content:
            "The sale of potentially harmful or dangerous items (explosives, firearms, etc.) is strictly prohibited.",
        },
        {
          heading: "Illegal Gambling",
          content:
            "Servers that coordinate, facilitate, or participate in illegal gambling activities are not permitted.",
        },
      ],
    },

    {
      title: "No NSFW or Offensive Content",
      items: [
        {
          heading: "No Adult Content",
          content:
            "NSFW content such as pornography or any explicit material is not allowed anywhere on the platform.",
        },
        {
          heading: "Offensive Server Names",
          content:
            "Dirty language or offensive names in server titles are not permitted. Keep it respectful.",
        },
        {
          heading: "Prohibited Imagery",
          content:
            "Real-life violence, gore, or animal cruelty is forbidden. However, fictional portrayals in movies, games, or books are acceptable as long as they comply with our guidelines.",
        },
        {
          heading: "Illegal Content",
          content:
            "Content that involves illegal activities (like child pornography, drug sales, or extortion) will be immediately removed and reported.",
        },
      ],
    },
    {
      title: "Follow the Law",
      items: [
        {
          heading: "Obey the Laws of Your Country and Malaysia",
          content:
            "You must follow the laws of your country of residence as well as Malaysian laws when using our platform or listing servers. Illegal activities of any kind are strictly prohibited.",
        },
        {
          heading: "Malicious Behaviour",
          content:
            "Using Guildiscover for malicious purposes, such as hacking, cracking, or distributing pirated software, cheats, and exploits, is not allowed.",
        },
        {
          heading: "No Misuse of Platform Resources",
          content:
            "Don’t use Guildiscover for abnormal purposes, such as outsourcing computing or storage resources (like cloud mining or hosting), or performing DDoS attacks on our infrastructure.",
        },
      ],
    },
    {
      title: "No Forced Reviews",
      items: [
        {
          heading: "Reviews Must Be Genuine",
          content:
            "Users cannot be forced to leave reviews for your server or content. Reviews should come voluntarily from genuine experiences.",
        },
        {
          heading: "No Fake Reviews",
          content: "Fake reviews or attempts to manipulate the review system will not be tolerated.",
        },
      ],
    },
    {
      title: "No Dangerous Organizations",
      items: [
        {
          heading: "No Terrorism / Gangs",
          content: "Servers that promote or glorify terrorism, gangs, or trafficking are banned.",
        },
        {
          heading: "No Support for Dangerous Movements",
          content:
            "Servers supporting movements or organizations advocating for mass murder or serious harm to others will not be tolerated.",
        },
      ],
    },
    {
      title: "Report Violations",
      items: [
        {
          heading: "How to Report",
          content:
            "If you come across content that violates these guidelines, report it to us through our Discord server or email us at report@guildiscover.com. We will take appropriate action based on our sole discretion.",
        },
      ],
    },
    {
      title: "No Servers for Illegal / Fraudulent Purposes",
      items: [
        {
          heading: "Illegal Intentions",
          content:
            "Servers created to facilitate fraud, scams, or any other illegal activities will be removed.",
        },
        {
          heading: "No Coordinated Attacks",
          content:
            "Servers engaging in distributed denial-of-service (DDoS) attacks or other malicious activities are not allowed.",
        },
      ],
    },
  ];

  const renderGuidelineItems = (items) => {
    return (
      <motion.ul className="guidelines-list">
        {items.map((item, index) => (
          <motion.li
            key={index}
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { delay: index * 0.1 },
              },
            }}
          >
            <span className="item-heading">{item.heading}</span>
            <p className="item-content">{item.content}</p>
          </motion.li>
        ))}
      </motion.ul>
    );
  };

  return (
    <motion.div
      className="guidelines-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="guidelines-header" variants={headerVariants}>
        <h1>Community Guidelines</h1>
        <div className="header-meta">
          <p>
            <strong>Website:</strong>{" "}
            <a
              href="https://guildiscover.jst-tan.page"
              target={"_blank"}
              className="link_text"
              rel="noreferrer"
            >
              https://guildiscover.jst-tan.page
            </a>
          </p>
          <p>
            <strong>Effective Date:</strong> October 4, 2024
          </p>
        </div>
        <p className="header-content">
          Welcome to <strong>Guildiscover</strong>! We're excited to have you here and want to make sure our
          platform is a fun, safe, and welcoming space for everyone. Please read these guidelines carefully.
          Violating them may result in action against your account, and all decisions will be made at our
          <strong> sole discretion</strong>.
        </p>
      </motion.div>

      <motion.div className="guidelines-grid" variants={containerVariants}>
        {guidelines.map((guideline, index) => (
          <motion.div
            key={index}
            className="guideline-card"
            variants={cardVariants}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
          >
            <h2>{guideline.title}</h2>
            {renderGuidelineItems(guideline.items)}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Guidelines;
