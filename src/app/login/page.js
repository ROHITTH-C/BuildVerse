'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'animate.css/animate.min.css';
import '../../assets/css/auth.css';
import { useEffect } from 'react';

export default function LoginPage() {
  useEffect(() => {
    require('../../assets/js/login.js'); // Your JS logic
  }, []);

  return (
    <>
      {/* Animated Background */}
      <div className="auth-bg"></div>

      {/* Auth Container */}
      <div className="auth-container animate__animated animate__fadeIn">
        <div className="auth-card">
          <div className="auth-header">
            <a href="/" className="logo-link">
              <i className="fas fa-code"></i>
              <h1>BuildVerse</h1>
            </a>
            <p className="tagline">Where projects find people and people find purpose</p>
          </div>

          <div className="auth-body">
            <h3 className="auth-title">ENTER YOUR CREDENTIALS</h3>

            <form id="loginForm" className="auth-form">
              <div className="form-group">
                <label htmlFor="loginUsername">Username</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-user"></i>
                  </span>
                  <input type="text" id="loginUsername" name="username" className="form-control" required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="loginPassword">Password</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-lock"></i>
                  </span>
                  <input type="password" id="loginPassword" name="password" className="form-control" required />
                  <button className="btn btn-outline-secondary toggle-password" type="button">
                    <i className="fas fa-eye"></i>
                  </button>
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="form-check">
                  <input type="checkbox" id="rememberMe" className="form-check-input" />
                  <label htmlFor="rememberMe" className="form-check-label">Remember me</label>
                </div>
                <a href="#" className="forgot-password">Forgot password?</a>
              </div>

              <button type="submit" className="btn btn-primary w-100 auth-btn">
                <i className="fas fa-sign-in-alt me-2"></i>LOGIN
              </button>
            </form>

            <div className="auth-footer">
              <p>Don't have an account? <a href="/register" className="auth-link">Register here</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
