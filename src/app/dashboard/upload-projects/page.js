// src/app/dashboard/upload-projects/page.js
import Sidebar from '../../../components/Sidebar';

export default function UploadProjects() {
  return (
    <div className="dashboard-container" style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <div className="main-content" style={{ flexGrow: 1, padding: '20px' }}>
        <h2><i className="fas fa-cloud-upload-alt me-2"></i> Upload Projects</h2>
        
        {/* Upload Projects Form */}
        <div className="upload-container">
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
      </div>
    </div>
  );
}
