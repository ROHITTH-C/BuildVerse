'use client'; // if you need interactivity (JS)

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../../../assets/css/dashboard.css';
import Sidebar from '../../../components/Sidebar'; // Import Sidebar component
import { useState } from 'react';

export default function Contribute() {
  const [activeTab, setActiveTab] = useState('available-projects');

  // Handle tab switch (Available Projects, Ongoing Projects)
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="contribute-container" style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="main-content" style={{ flexGrow: 1, padding: '20px' }}>
        {/* Contribute Section */}
        <section id="contribute-section" className="content-section active">
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
      </div>
    </div>
  );
}
