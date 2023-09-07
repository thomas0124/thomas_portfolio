import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="contact">
    <h2>My SNS</h2>
    <div className="social-links">
      <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
      {/* Add more social media links as needed */}
    </div>
    <p>You can reach me at qingshuitouzhen@gmail.com.</p>
  </section>
  );
}

export default Contact;