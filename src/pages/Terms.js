import React from "react";
import { motion } from "framer-motion";
import "./Terms.css";

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

const Terms = () => {
  const termsData = [
    {
      title: "Eligibility",
      content: [
        "Age Requirement: You must be at least 13 years of age to use the Website.",
        "Regional Restrictions: Users in certain regions, such as the European Union, must be at least 16 years old or higher to use the Website in compliance with local regulations.",
        "Parental Consent: If you are under the required age for your region, you must have parental or legal guardian consent to use the Website. By allowing a minor to use this Website, parents or guardians agree to these Terms on behalf of the minor.",
      ],
    },
    {
      title: "Service Description",
      content: [
        "Guildiscover is the go-to platform for discovering and listing Discord servers and bots. With a commitment to user safety, all content uploaded undergoes strict review by our dedicated moderation team, ensuring that every server and bot listed is safe, reliable, and suitable for all users. Whether you're exploring new communities or seeking powerful bots to enhance your experience, Guildiscover offers a trusted, secure space to connect with the best Discord offers.",
      ],
    },
    {
      title: "Intellectual Property",
      content: [
        "All content on the Website, including text, images, software, and trademarks, is owned by Guildiscover or its licensors and is protected by intellectual property laws.",
        "You may not copy, reproduce, or distribute any content from the Website without express written permission.",
        "By uploading content, you grant us a non-exclusive, worldwide, royalty-free license to use, modify, and distribute the content on the Website.",
      ],
    },
    {
      title: "Termination of Services",
      content: [
        "We reserve the right to suspend or terminate your access to the Website at our sole discretion, with or without reason, and without prior notice. Upon termination, you must cease all use of the Website immediately.",
      ],
    },
    {
      title: "Changes to Terms",
      content: [
        "We reserve the right to modify these Terms at any time. Any changes will be effective immediately upon posting to the Website. You are responsible for reviewing these Terms periodically. Continued use of the Website after changes have been made constitutes your acceptance of the updated Terms.",
      ],
    },
    {
      title: "Privacy Policy",
      content: [
        "Your use of Guildiscover is governed by our Privacy Policy, available at https://guildiscover.jst-tan.com/privacy. By using the Website, you agree to the collection and use of your information as described in the Privacy Policy.",
      ],
    },
    {
      title: "Third-Party Websites",
      content: [
        "Guildiscover may contain links to third-party websites or services. We do not control or endorse these third-party sites and are not responsible for their content or privacy practices.",
        "Accessing third-party websites is at your own risk.",
      ],
    },
    {
      title: "Service AS IS",
      content: [
        "Guildiscover is provided on an “AS IS” and “AS AVAILABLE” basis, without warranties of any kind, express or implied. We do not guarantee that the Website will function uninterrupted or error-free, nor do we make any guarantees regarding the accuracy, reliability, or availability of the Website.",
      ],
    },
    {
      title: "Limitation of Liability",
      content: [
        "To the fullest extent permitted by law, Guildiscover and its affiliates will not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of the Website.",
      ],
    },
    {
      title: "Indemnification",
      content: [
        "You agree to indemnify and hold Guildiscover and its affiliates harmless from any claims, damages, losses, or legal fees arising out of your use of the Website, your violation of these Terms, or your violation of any rights of another.",
      ],
    },
    {
      title: "Governing Laws",
      content: [
        "These Terms and any disputes related to them or the use of the Website will be governed by the laws of Malaysia. You agree to submit to the exclusive jurisdiction of the courts in Malaysia for the resolution of any disputes.",
      ],
    },
    {
      title: "Severability",
      content: [
        "If any provision of these Terms is found to be invalid or unenforceable by a court of competent jurisdiction, the remaining provisions will continue to be valid and enforceable.",
      ],
    },
    {
      title: "Waiver",
      content: [
        "Failure to enforce any provision of these Terms by Guildiscover will not constitute a waiver of that provision or any other provision in these Terms.",
      ],
    },
    {
      title: "Terminaton of Services",
      content: [
        "We reserve the right to modufy, suspend, or terminate the Website or any part of it at any time, for any reason, with or without notice. Upon termination, the licenses granted o you by these Terms will automatically terminate.",
      ],
    },
    {
      title: "Entire Agreement",
      content: [
        "These Terms, along with any additional terms, policies, and agreements referenced within, constitute the entire agreement between you and Guildiscover regarding the use of the Website.",
      ],
    },
    {
      title: "Prohibited Conduct",
      content: [
        "Users are not permitted to use the platform to engage in behavior that harms others. This includes but is not limited to:",
        "Harassment, bullying, or sending harmful or malicious content.",
        "Using the platform for illegal purposes.",
        "Uploading malicious software or viruses designed to disrupt services or harm others.",
      ],
    },

    {
      title: "Arbitration Agreement",
      content: [
        "Direct Arbitration: In the event of any dispute, claim, or controversy arising from or related to these Terms or your use of Guildiscover, you agree to first attempt to resolve the dispute with us directly through negotiation. If we are unable to reach a resolution, you and Guildiscover agree to resolve the dispute through binding arbitration, conducted on an individual basis.",
        "How Arbitration Works: Arbitration will be conducted in accordance with the rules of [Insert Arbitration Institution] and will take place in Malaysia. The arbitrator’s decision will be final and binding.",
        "No Class Actions: By agreeing to these Terms, you waive any right to participate in a class action or class-wide arbitration. Any dispute resolution will be conducted on an individual basis, and you agree not to bring any claim in a representative or collective capacity.",
      ],
    },
    {
      title: "Content Uploads & Usages",
      content: [
        "Permitted Content: You may upload information related to your Discord servers and bots for discovery by other users.",
        "Prohibited Content: You may not upload content that contains:",
        "NSFW (Not Safe For Work) material, including but not limited to explicit, pornographic, violent or abusive content.",
        "Content that harms or targets othersa, including harassment, hate speech or illegal activity.",
        "Non-Exclusive License: By uploading any content to Guildiscover, you grant us a non-exclusive, worldwide, royalty-free license to use, modify, reproduce, distribute, and display your content for the purpose of operating, improving and promoting the Website.",
        "Prohibited Usage: You may not use Guildiscover to harm others, such as attempting to hack, harm or otherwise interfere with the experience of other users or third parties.",
      ],
    },
  ];

  return (
    <motion.div className="terms-container" variants={containerVariants} initial="hidden" animate="visible">
      <motion.div className="terms-header" variants={headerVariants}>
        <h1>Terms of Service</h1>
        <p className="effective-date">Effective Date: 10 October 2024</p>
        <p className="header-content">
          Welcome to Guildiscover! These Terms of Service (“Terms”) govern your access to and use of our
          website, services, and content provided by Guildiscover (“we,” “us,” or “our”). By accessing or
          using{" "}
          <a
            href="https://guildiscover.jst-tan.com"
            target={"_blank"}
            className="link_text"
            rel="noreferrer"
          >
            https://guildiscover.jst-tan.com
          </a>{" "}
          (the “Website”), you agree to comply with these Terms.
          <br />
          <br />
          Please read them carefully. If you do not agree with these Terms, you may not use the Website or its
          services.
        </p>
      </motion.div>

      <motion.div className="terms-grid">
        {termsData.map((section, index) => (
          <motion.div className="terms-card" key={index} variants={cardVariants}>
            <h2>{section.title}</h2>
            <div className="card-content">
              {section.content.map((item, itemIndex) => (
                <p key={itemIndex}>{item}</p>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Terms;
