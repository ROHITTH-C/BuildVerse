'use client'; // React

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../../assets/css/dashboard.css';
import { useState } from 'react';

export default function Dashboard() {
  // State to track the active section in the sidebar
  const [activeSection, setActiveSection] = useState('profile-section');
  const [activeTab, setActiveTab] = useState('available-projects');

  // Handle section switch (Profile, Contribute, Upload)
  const handleSectionClick = (section) => {
    console.log(`Changing to section: ${section}`); // Debugging line
    setActiveSection(section);
  };

  // Handle tab switch (Available Projects, Ongoing Projects)
  const handleTabClick = (tab) => {
    console.log(`Switching tab to: ${tab}`); // Debugging line
    setActiveTab(tab);
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="sidebar-header">
          <a href="#" className="logo-link">
            <i className="fas fa-code"></i>
            <h1>BuildVerse</h1>
          </a>
          <p className="tagline">Where projects find people and people find purpose</p>
        </div>

        <nav className="sidebar-nav">
          <ul>
            <li
              className={activeSection === 'profile-section' ? 'active' : ''}
              onClick={() => handleSectionClick('profile-section')}
            >
              <i className="fas fa-user"></i>
              <span>My Profile</span>
            </li>
            <li
              className={activeSection === 'contribute-section' ? 'active' : ''}
              onClick={() => handleSectionClick('contribute-section')}
            >
              <i className="fas fa-hands-helping"></i>
              <span>Contribute</span>
            </li>
            <li
              className={activeSection === 'upload-section' ? 'active' : ''}
              onClick={() => handleSectionClick('upload-section')}
            >
              <i className="fas fa-cloud-upload-alt"></i>
              <span>Upload Projects</span>
            </li>
          </ul>
        </nav>

        <div className="sidebar-footer">
          <button className="btn btn-logout">
            <i className="fas fa-sign-out-alt"></i> LOGOUT
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Profile Section */}
        <section
          id="profile-section"
          className={`content-section ${activeSection === 'profile-section' ? 'active' : ''}`}
        >
          <div className="profile-header">
            <h2><i className="fas fa-user-circle me-2"></i>My Profile</h2>
          </div>
          <div className="profile-content">
            <div className="profile-card">
              <div className="profile-avatar">
                <i className="fas fa-user-astronaut"></i>
              </div>
              <div className="profile-info">
                <div className="info-item">
                  <span className="info-label">User Name:</span>
                  <span className="info-value" id="username-display">JohnDoe42</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Skill Level:</span>
                  <span className="info-value" id="skill-level">Intermediate</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Contributions:</span>
                  <span className="info-value" id="contributions-count">8</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Projects Uploaded:</span>
                  <span className="info-value" id="projects-uploaded">3</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contribute Section */}
        <section
          id="contribute-section"
          className={`content-section ${activeSection === 'contribute-section' ? 'active' : ''}`}
        >
          <div className="section-header">
            <h2><i className="fas fa-hands-helping me-2"></i>Contribute</h2>
            <div className="section-tabs">
              <button
                className={`tab-btn ${activeTab === 'available-projects' ? 'active' : ''}`}
                onClick={() => handleTabClick('available-projects')}
              >
                Available Projects
              </button>
              <button
                className={`tab-btn ${activeTab === 'ongoing-projects' ? 'active' : ''}`}
                onClick={() => handleTabClick('ongoing-projects')}
              >
                Ongoing Projects
              </button>
            </div>
          </div>

          <div className={`tab-content ${activeTab === 'available-projects' ? 'active' : ''}`} id="available-projects">
            {/* Cards go here (repeatable) */}
          </div>

          <div className={`tab-content ${activeTab === 'ongoing-projects' ? 'active' : ''}`} id="ongoing-projects">
            <div className="empty-state">
              <i className="fas fa-folder-open"></i>
              <h3>NO ONGOING PROJECTS</h3>
              <p>You're not currently contributing to any projects</p>
            </div>
          </div>
        </section>

        {/* Upload Section */}
        <section
          id="upload-section"
          className={`content-section ${activeSection === 'upload-section' ? 'active' : ''}`}
        >
          <div className="section-header">
            <h2><i className="fas fa-cloud-upload-alt me-2"></i>Upload Projects</h2>
          </div>

          <div className="upload-container">
            <div className="uploaded-projects">
              <h3>UPLOADED PROJECTS</h3>
              <div className="empty-state">
                <i className="fas fa-folder-open"></i>
                <h4>No uploaded projects</h4>
                <p>You haven't uploaded any projects yet</p>
              </div>
            </div>

            <div className="upload-form">
              <h3>Enter Your Project Details</h3>
              <form id="projectUploadForm">
                <div className="form-group">
                  <label htmlFor="projectTitle">Project title</label>
                  <input type="text" id="projectTitle" className="form-control" required />
                </div>

                <div className="form-group">
                  <label htmlFor="projectDescription">Project description and required assistance</label>
                  <textarea id="projectDescription" className="form-control" rows="4" required></textarea>
                </div>

                <div className="form-group">
                  <label htmlFor="githubLink">GitHub repository link</label>
                  <input type="url" id="githubLink" className="form-control" required />
                </div>

                <div className="form-group">
                  <label htmlFor="projectTags">Tags (comma separated)</label>
                  <input type="text" id="projectTags" className="form-control" placeholder="JavaScript, API, Web Development" />
                </div>

                <button type="submit" className="btn btn-upload">
                  <i className="fas fa-upload me-2"></i> UPLOAD
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
