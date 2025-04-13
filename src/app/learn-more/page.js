"use client";
import Link from 'next/link';
import Image from 'next/image';
import '../../assets/css/learn-more.css'; // Import global CSS

import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faUsers,
  faProjectDiagram,
  faChartLine,
  faChevronDown
} from '@fortawesome/free-solid-svg-icons';

const faqs = [
  {
    question: 'How do I join BuildVerse?',
    answer: 'Simply click the "Join Now" button and complete the registration process. It takes less than 2 minutes to create your account and start exploring projects.'
  },
  {
    question: 'Is there any cost to use BuildVerse?',
    answer: 'BuildVerse is completely free for developers to join and contribute to projects. Project owners may have premium features available for larger projects.'
  },
  {
    question: 'What types of projects are available?',
    answer: 'We host a wide variety of projects including web applications, mobile apps, open source tools, data analysis projects, and more. Projects range from small enhancements to large-scale applications.'
  },
  {
    question: 'How do I find projects that match my skills?',
    answer: 'Our platform automatically suggests projects based on the skills you list in your profile. You can also filter projects by technology stack, difficulty level, and time commitment.'
  },
  {
    question: 'Can I list my own project on BuildVerse?',
    answer: 'Absolutely! After registering, you can create a project listing with your requirements. Our team will review it to ensure quality standards before making it available to contributors.'
  }
];

export default function LearnMore() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.feature-card, .case-study');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.3;
        if (rect < screenPos) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }
      });
    };

    const elements = document.querySelectorAll('.feature-card, .case-study');
    elements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'all 0.6s ease';
    });

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', handleScroll);
    };
  }, []);

  const toggleFaq = index => {
    document.querySelectorAll('.faq-item').forEach((item, i) => {
      item.classList.toggle('active', i === index ? !item.classList.contains('active') : false);
    });
  };

  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="logo">
            <FontAwesomeIcon icon={faCode} />
            <span>BuildVerse</span>
          </div>
          <p>Where projects find people and people find purpose</p>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h1>Empowering Developers Through Collaboration</h1>
          <p>BuildVerse connects developers with meaningful projects and helps project owners find the perfect contributors.</p>
          <a href="/register" className="btn">Join Now</a>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">About BuildVerse</h2>

          <div className="about-content">
            <div className="about-text">
              <p>BuildVerse was born from a simple observation: many great projects never see completion due to lack of resources, while talented developers often struggle to find meaningful work that aligns with their skills and interests.

Our platform bridges this gap by creating an ecosystem where developers can discover projects that match their expertise and passion, while project owners can find the right talent to bring their visions to life.

Whether you're a beginner looking to gain experience or an expert wanting to contribute to innovative projects, BuildVerse provides the perfect environment for growth and collaboration.</p>
            </div>
            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                alt="Developers collaborating"
              />
            </div>
          </div>

          <h3 className="section-title" style={{ marginTop: '4rem' }}>Key Features</h3>

          <div className="features">
            <div className="feature-card">
              <FontAwesomeIcon icon={faUsers} />
              <h3>Community Driven</h3>
              <p>Join a growing community of developers, designers, and creators all working together to build amazing projects.</p>
            </div>
            <div className="feature-card">
              <FontAwesomeIcon icon={faProjectDiagram} />
              <h3>Project Discovery</h3>
              <p>Easily find projects that match your skills, interests, and availability with our intelligent matching system.</p>
            </div>
            <div className="feature-card">
              <FontAwesomeIcon icon={faChartLine} />
              <h3>Skill Development</h3>
              <p>Gain real-world experience and enhance your portfolio by working on diverse projects.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#f9f9f9' }}>
        <div className="container">
          <h2 className="section-title">Case Study: GeoLocator Project</h2>
          <div className="case-study">
            <h3>How BuildVerse helped complete an ambitious mapping application</h3>
            <p>The Animal Conservation team needed help building a geo-location tracking system for wildlife monitoring, but lacked the technical expertise. They posted their project on BuildVerse with clear requirements:</p>
            <ul>
              <li>Real-time animal movement tracking</li>
              <li>Interactive map visualization</li>
              <li>Data export functionality</li>
            </ul>
            <p>Within 48 hours, three developers with complementary skills (JavaScript, Maps API, and backend development) formed a team through BuildVerse. They collaborated over 6 weeks to deliver:

</p>
            <ul>
              <li>A responsive web application with live tracking</li>
              <li>Custom map markers with animal details</li>
              <li>Automated reporting system</li>
            </ul>
            <p>The project was successfully deployed and is now used by conservationists in three national parks. The developers gained valuable experience and references, while the conservation team got their much-needed tool.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-container">
            {faqs.map((faq, index) => (
              <div className="faq-item" key={index}>
                <div className="faq-question" onClick={() => toggleFaq(index)}>
                  <span>{faq.question}</span>
                  <FontAwesomeIcon icon={faChevronDown} className="faq-toggle" />
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="cta">
            <h2>Ready to Start Your Journey?</h2>
            <p>Join BuildVerse today and become part of a community that's changing how developers collaborate.</p>
            <a href="/register" className="btn" style={{ background: 'white', color: 'var(--primary)', marginTop: '1.5rem' }}>Sign Up Now</a>
          </div>
        </div>
      </section>
    </div>
  );
}
