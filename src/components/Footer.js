import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-dark text-white text-center py-4">
      <h5>Want to work together or have questions?</h5>
      <p>
        Feel free to reach out via{' '}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=youremail@example.com&su=Let's Connect&body=Hi Rahul,"
          target="_blank"
          rel="noopener noreferrer"
          className="text-info fw-semibold"
        >
          email
        </a>{' '}
        or connect with me on social media!
      </p>
      <div className="d-flex justify-content-center gap-3 mt-2">
        <a href="https://github.com/nettemrahul" target="_blank" rel="noreferrer">
          <i className="bi bi-github" style={{ fontSize: '1.5rem', color: 'white' }}></i>
        </a>
        <a href="https://www.linkedin.com/in/nettem-rahul-naidu-026691239
" target="_blank" rel="noreferrer">
          <i className="bi bi-linkedin" style={{ fontSize: '1.5rem', color: 'white' }}></i>
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=rahul.nettem@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi bi-envelope-fill" style={{ fontSize: '1.5rem', color: 'white' }}></i>
        </a>
      </div>
      <p className="mt-3 mb-0">© 2025 Nettem Rahul Naidu. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
