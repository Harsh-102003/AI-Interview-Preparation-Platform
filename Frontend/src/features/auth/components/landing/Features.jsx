import React from "react";
import {
  HiDocumentText,
  HiClipboardDocumentCheck,
  HiChatBubbleLeftRight,
  HiSparkles,
} from "react-icons/hi2";

const featureData = [
  {
    icon: <HiDocumentText />,
    title: "Resume Analysis",
    description:
      "Analyze your resume with AI and receive suggestions to improve ATS compatibility and highlight your strengths.",
  },
  {
    icon: <HiClipboardDocumentCheck />,
    title: "ATS Resume Checker",
    description:
      "Check whether your resume matches the job description and improve your chances of getting shortlisted.",
  },
  {
    icon: <HiChatBubbleLeftRight />,
    title: "AI Mock Interview",
    description:
      "Practice realistic interview questions with instant AI feedback and confidence-building tips.",
  },
  {
    icon: <HiSparkles />,
    title: "Interview Strategy",
    description:
      "Generate a personalized roadmap based on your resume, skills, and target company.",
  },
];

const Features = () => {
  return (
    <section className="features" id="features">

      <div className="section-heading">

        <span>Why Choose Us</span>

        <h2>Everything You Need To Crack Interviews</h2>

        <p>
          Prepare smarter with AI-powered tools designed to boost your
          confidence and maximize your interview success.
        </p>

      </div>

      <div className="features-grid">

        {featureData.map((feature, index) => (
          <div className="feature-card" key={index}>

            <div className="feature-icon">
              {feature.icon}
            </div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Features;