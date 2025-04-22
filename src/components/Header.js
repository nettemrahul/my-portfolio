import React from 'react';

export default function Header() {
  return (
    <div className="container text-center py-5">
      <img src="/profile.jpg" alt="profile" className="profile-pic rounded-circle shadow mb-3" width="150" height="150" />
      
      <h1 id="about">Nettem Rahul Naidu</h1>
      <h4 className="text-muted">Full Stack Developer | React | Python | ML</h4>

      <p className="lead">
        Passionate about building user-friendly apps with React, backend systems, and solving problems with Machine Learning.
      </p>

      <div className="social-icons d-flex justify-content-center gap-4 my-3">
        <a href="https://github.com/nettemrahul" target="_blank" rel="noreferrer">
          <i className="bi bi-github" style={{ fontSize: '1.5rem' }}></i>
        </a>
        <a href="https://www.linkedin.com/in/nettem-rahul-naidu-026691239" target="_blank" rel="noreferrer">
          <i className="bi bi-linkedin" style={{ fontSize: '1.5rem' }}></i>
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=rahul.nettem@gmail.com&su=Let's Connect&body=Hi Rahul,"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-envelope-fill" style={{ fontSize: '1.5rem' }}></i>
        </a>
      </div>

      <a href="/resume.pdf" download className="btn btn-primary mb-4" id="resume">
        📄 Download Resume
      </a>

      <h2 id="projects" className="section-title mb-3">Projects</h2>
      <div className="projects row justify-content-center">
        <div className="project-card col-md-5 m-2 p-3 border rounded shadow-sm">
          <h4>Todo App</h4>
          <p>A React Todo app with localStorage & CRUD functionality.</p>
          <a href="https://github.com/nettemrahul/todo-app" target="_blank" rel="noreferrer">View</a>
        </div>
        <div className="project-card col-md-5 m-2 p-3 border rounded shadow-sm">
          <h4>Car Price Prediction</h4>
          <p>ML-based app for predicting used car prices using Python.</p>
          <a href="https://github.com/your-ml-project" target="_blank" rel="noreferrer">View</a>
        </div>
      </div>

      <h2 id="contact" className="section-title mt-5 mb-3">Contact</h2>
      <p>Email: <a href="mailto:rahul.nettem@gmail.com">rahul.nettem@gmail.com</a></p>
      <p>
        LinkedIn: <a href="https://www.linkedin.com/in/nettem-rahul-naidu-026691239" target="_blank" rel="noreferrer">
          nettem-rahul-naidu-026691239
        </a>
      </p>
    </div>
  );
}
