import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <div className="about-header">
          <h1 className="page-title">About Us</h1>
          <p className="about-subtitle">
            Learn more about our story, our mission, and the team behind Testing.
          </p>
        </div>

        <section className="about-section">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">Our Story</h2>
              <p>
                Testing was founded in 2023 with a simple mission: to provide high-quality, stylish clothing at affordable prices. 
                What started as a small online store has grown into a beloved brand with customers all over the world.
              </p>
              <p>
                Our journey began when our founder noticed a gap in the market for clothing that was both fashionable and accessible. 
                Drawing on years of experience in the fashion industry, they set out to create a brand that would redefine the online 
                shopping experience.
              </p>
            </div>
            <div className="about-image">
              <img src="https://via.placeholder.com/600x400?text=Our+Story" alt="Our story" />
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="about-content reverse">
            <div className="about-text">
              <h2 className="section-title">Our Mission</h2>
              <p>
                At Testing, our mission is to make fashion accessible to everyone. We believe that looking good shouldn't cost a fortune, 
                and that sustainable, ethical practices should be the standard in the fashion industry.
              </p>
              <p>
                We're committed to reducing our environmental impact by using eco-friendly materials and packaging, 
                partnering with ethical manufacturers, and implementing sustainable practices throughout our supply chain.
              </p>
            </div>
            <div className="about-image">
              <img src="https://via.placeholder.com/600x400?text=Our+Mission" alt="Our mission" />
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2 className="section-title centered">Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-leaf"></i>
              </div>
              <h3 className="value-title">Sustainability</h3>
              <p className="value-description">
                We're committed to reducing our environmental footprint and promoting sustainable practices in everything we do.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3 className="value-title">Quality</h3>
              <p className="value-description">
                We believe in creating products that are built to last, using high-quality materials and expert craftsmanship.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h3 className="value-title">Ethical Practices</h3>
              <p className="value-description">
                We work only with manufacturers who provide fair wages and safe working conditions for their employees.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="value-title">Community</h3>
              <p className="value-description">
                We believe in building a community of like-minded individuals who share our passion for fashion and sustainability.
              </p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2 className="section-title centered">Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="team-member-image">
                <img src="https://via.placeholder.com/300x300?text=Team+Member" alt="Team member" />
              </div>
              <h3 className="team-member-name">John Doe</h3>
              <p className="team-member-role">Founder & CEO</p>
            </div>
            <div className="team-member">
              <div className="team-member-image">
                <img src="https://via.placeholder.com/300x300?text=Team+Member" alt="Team member" />
              </div>
              <h3 className="team-member-name">Jane Smith</h3>
              <p className="team-member-role">Creative Director</p>
            </div>
            <div className="team-member">
              <div className="team-member-image">
                <img src="https://via.placeholder.com/300x300?text=Team+Member" alt="Team member" />
              </div>
              <h3 className="team-member-name">Mike Johnson</h3>
              <p className="team-member-role">Head of Operations</p>
            </div>
            <div className="team-member">
              <div className="team-member-image">
                <img src="https://via.placeholder.com/300x300?text=Team+Member" alt="Team member" />
              </div>
              <h3 className="team-member-name">Sarah Williams</h3>
              <p className="team-member-role">Customer Experience Manager</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 