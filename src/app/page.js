'use client';
import Image from 'next/image';
import Link from 'next/link';
import './globals.css';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <>
      {/* Animated Background */}
      <div className="animated-bg"></div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark px-4 py-3 fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold fs-2 jersey-font animate__animated animate__fadeInLeft" href="#">
            <i className="fas fa-code me-2"></i>BuildVerse
          </a>
          <span className="tagline d-none d-lg-inline text-white animate__animated animate__fadeIn">
            Where projects find people and people find purpose
          </span>
          <button className="btn btn-outline-light login-btn ms-auto animate__animated animate__fadeInRight">
            <Link href="/dashboard" className="fas fa-sign-in-alt me-2"> Dashboard</Link>
          </button>
          <button className="btn btn-outline-light login-btn ms-auto animate__animated animate__fadeInRight">
            <Link href="/login" className="fas fa-sign-in-alt me-2"> LOGIN</Link>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container h-100">
          <div className="row h-100 align-items-center justify-content-center">
            <div className="col-lg-6 text-section animate__animated animate__fadeInUp">
              <br /><br />
              <h1 className="display-4 fw-bold mb-4">Build. Collaborate. Grow.</h1>
              <h3 className="mb-3">Start your journey by joining our community</h3>
              <p className="lead mb-4">Reach out for help or be the one to support</p>
              <div className="d-flex gap-3">
                <a href="/signup" className="btn btn-primary btn-lg px-4 py-2 signup-btn">
                  <i className="fas fa-user-plus me-2"></i>SIGN UP
                </a>
                <a href="/learn-more" className="btn btn-outline-light btn-lg px-4 py-2 learn-more-btn">
                  <i className="fas fa-info-circle me-2"></i>LEARN MORE
                </a>
              </div>
            </div>
            <div className="col-lg-6 image-section animate__animated animate__fadeIn">
              <div className="image-container">
                <img src="/superr.png" alt="developer illustration" className="hero-img img-fluid floating" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
