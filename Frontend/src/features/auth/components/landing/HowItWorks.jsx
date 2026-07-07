import React from "react";
import {
  HiUserPlus,
  HiDocumentArrowUp,
  HiClipboardDocumentList,
  HiRocketLaunch,
} from "react-icons/hi2";

const steps = [
  {
    id: "01",
    icon: <HiUserPlus />,
    title: "Create Account",
    description:
      "Sign up in seconds and access your personalized interview dashboard.",
  },
  {
    id: "02",
    icon: <HiDocumentArrowUp />,
    title: "Upload Resume",
    description:
      "Upload your latest resume so AI can analyze your profile and skills.",
  },
  {
    id: "03",
    icon: <HiClipboardDocumentList />,
    title: "Paste Job Description",
    description:
      "Provide the target job description to generate company-specific interview preparation.",
  },
  {
    id: "04",
    icon: <HiRocketLaunch />,
    title: "Generate Interview Plan",
    description:
      "Receive AI-generated questions, preparation roadmap, resume tips and interview strategy.",
  },
];

const HowItWorks = () => {
  return (
    <section className="how-it-works" id="workflow">

      <div className="section-heading">

        <span>Simple Process</span>

        <h2>How It Works</h2>

        <p>
          Get interview-ready in just four easy steps.
        </p>

      </div>

      <div className="timeline">

        {steps.map((step, index) => (

          <div
            className="timeline-card"
            key={index}
          >

            <div className="step-number">

              {step.id}

            </div>

            <div className="step-icon">

              {step.icon}

            </div>

            <h3>{step.title}</h3>

            <p>{step.description}</p>

          </div>

        ))}

      </div>

    </section>
  );
};

export default HowItWorks;