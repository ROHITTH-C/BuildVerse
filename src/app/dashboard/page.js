'use client'; // if you need interactivity (JS)

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../../assets/css/dashboard.css';
import Sidebar from '../../components/Sidebar';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <Sidebar />

      {/* Main Content */}
      <div className="main-content">
        {/* Profile Section */}
        <section id="profile-section" className="content-section active">
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

        {/* Upload Section */}
        <section id="upload-section" className="content-section">
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
