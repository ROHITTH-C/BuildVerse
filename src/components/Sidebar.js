// src/components/Sidebar.js
'use client'; // This is important to specify that it's a Client Component

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import usePathname from next/navigation

export default function Sidebar() {
  const pathname = usePathname(); // Get the current pathname

  // Function to check if the current route matches the sidebar item
  const isActive = (path) => pathname === path;

  return (
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
          <li className={isActive('/dashboard') ? 'active' : ''}>
            <Link href="/dashboard" style={{ textDecoration: 'none', color: 'inherit' }}>
              <i className="fas fa-user"></i>
              <span>My Profile</span>
            </Link>
          </li>
          <li className={isActive('/dashboard/contribute') ? 'active' : ''}>
            <Link href="/dashboard/contribute" style={{ textDecoration: 'none', color: 'inherit' }}>
              <i className="fas fa-hands-helping"></i>
              <span>Contribute</span>
            </Link>
          </li>
          <li className={isActive('/dashboard/upload-projects') ? 'active' : ''}>
            <Link href="/dashboard/upload-projects" style={{ textDecoration: 'none', color: 'inherit' }}>
              <i className="fas fa-cloud-upload-alt"></i>
              <span>Upload Projects</span>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="sidebar-footer">
        <button className="btn btn-logout">
          <i className="fas fa-sign-out-alt"></i> LOGOUT
        </button>
      </div>
    </div>
  );
}
