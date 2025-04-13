'use client'

import { useEffect } from 'react'
import setupRegisterForm from '@/assets/js/register'
import Script from 'next/script'
import '@/assets/css/auth.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCode,
  faUser,
  faEnvelope,
  faLock,
  faEye,
  faUserPlus
} from '@fortawesome/free-solid-svg-icons'

export default function SignupPage() {
  useEffect(() => {
    setupRegisterForm()
  }, [])

  return (
    <>
      {/* Bootstrap */}
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />

      <div className="auth-bg"></div>

      <div className="auth-container animate__animated animate__fadeIn">
        <div className="auth-card">
          <div className="auth-header">
            <a href="/" className="logo-link">
              <FontAwesomeIcon icon={faCode} className="me-2" />
              <h1>BuildVerse</h1>
            </a>
            <p className="tagline">Where projects find people and people find purpose</p>
          </div>

          <div className="auth-body">
            <h3 className="auth-title">CREATE YOUR ACCOUNT</h3>

            <form id="registerForm" className="auth-form">
              <div className="form-group">
                <label htmlFor="registerUsername">Username</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <FontAwesomeIcon icon={faUser} />
                  </span>
                  <input type="text" id="registerUsername" name="username" className="form-control" required />
                </div>
                <div className="form-text">Minimum 4 characters</div>
              </div>

              <div className="form-group">
                <label htmlFor="registerEmail">Email</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  <input type="email" id="registerEmail" name="email" className="form-control" required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="registerPassword">Password</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <FontAwesomeIcon icon={faLock} />
                  </span>
                  <input type="password" id="registerPassword" name="password" className="form-control" required />
                  <button className="btn btn-outline-secondary toggle-password" type="button">
                    <FontAwesomeIcon icon={faEye} />
                  </button>
                </div>
                <div className="form-text">Minimum 8 characters with numbers</div>
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <FontAwesomeIcon icon={faLock} />
                  </span>
                  <input type="password" id="confirmPassword" className="form-control" required />
                </div>
              </div>

              <div className="form-check mb-4">
                <input type="checkbox" id="termsAgreement" className="form-check-input" required />
                <label htmlFor="termsAgreement" className="form-check-label">
                  I agree to the <a href="#" className="auth-link">Terms of Service</a> and <a href="#" className="auth-link">Privacy Policy</a>
                </label>
              </div>

              <button type="submit" className="btn btn-primary w-100 auth-btn">
                <FontAwesomeIcon icon={faUserPlus} className="me-2" />
                REGISTER
              </button>
            </form>

            <div className="auth-footer">
              <p>Already have an account? <a href="/login" className="auth-link">Login here</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
