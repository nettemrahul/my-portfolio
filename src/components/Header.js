import React from 'react';

export default function Header() {
  return (
    <div className="container">
      <img src="/profile.jpg" alt="profile" className="profile-pic" />
      <h1 id="about">Nettem Rahul Naidu</h1>
      <h3>Full Stack Developer | React | Python | ML</h3>

      <p>
        Passionate about building user-friendly apps with React, backend systems, and solving problems with Machine Learning.
      </p>

      <div className="social-icons">
        <a href="https://github.com/nettemrahul" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/nettem-rahul-naidu-026691239
" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
        <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=rahul.nettem@gmail.com&su=Let's Connect&body=Hi Rahul,"
  target="_blank"
  rel="noopener noreferrer"
>
  <i className="bi bi-envelope-fill" style={{ fontSize: '1.5rem' }}></i>
</a>
      </div>

      <a href="/resume.pdf" download className="btn" id="resume">📄 Download Resume</a>

      <h2 id="projects" className="section-title">Projects</h2>
      <div className="projects">
        <div className="project-card">
          <h3>Todo App</h3>
          <p>A React Todo app with localStorage & CRUD.</p>
          <a href="https://github.com/nettemrahul/todo-app" target="_blank" rel="noreferrer">View</a>
        </div>
        <div className="project-card">
          <h3>Car Price Prediction</h3>
          <p>ML-based app for predicting used car prices using Python.</p>
          <a href="https://github.com/your-ml-project" target="_blank" rel="noreferrer">View</a>
        </div>
      </div>

      <h2 id="contact" className="section-title">Contact</h2>
      <p>Email:rahul.nettem@gmail.com.com</p>
      <p>LinkedIn: https://www.linkedin.com/in/nettem-rahul-naidu-026691239
      </p>
    </div>
  );
}
