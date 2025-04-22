import React from 'react';
import '../App.css'

const Hero = () => {
  return (
    <section id="about" className="py-5 bg-white">
      <div className="container">
        <div className="row align-items-center text-center text-lg-start">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <img
              src={`${process.env.PUBLIC_URL}/profile.jpg`}
              alt="Profile"
              className="rounded-circle shadow float-animation"
              width="180"
              height="180"
            />
          </div>
          <div className="col-lg-8">
            <h1>Nettem Rahul Naidu</h1>
            <h4 className="text-muted">Full Stack Developer | React | Python | ML</h4>
            <p className="lead">
              Passionate about building user-friendly apps, backend systems,
              and solving problems with Machine Learning.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start mb-3">
            <a className="btn btn-primary" href="/resume.pdf" download="Resume.pdf">
  Download Resume
</a>
              <a className="btn btn-outline-primary" href="#projects">View Projects</a>
            </div>
            <div className="social-icons d-flex gap-3 justify-content-center justify-content-lg-start">
              <a href="https://github.com/nettemrahul" target="_blank" rel="noreferrer">
                <i className="bi bi-github" style={{ fontSize: "1.5rem" }}></i>
              </a>
              <a href="https://www.linkedin.com/in/nettem-rahul-naidu-026691239" target="_blank" rel="noreferrer">
                <i className="bi bi-linkedin" style={{ fontSize: "1.5rem" }}></i>
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=rahul.nettem@gmail.com&su=Let's Connect&body=Hi Rahul,"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-envelope-fill" style={{ fontSize: '1.5rem' }}></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
