import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLinkedin,
    faGithub,
    faYoutube,
  } from '@fortawesome/free-brands-svg-icons';


export default function SocialFollow() {
  return (
 <div class="social-container">
      <h3>Social Follow</h3>
      {/* Social Font Awesome setup:
          <a href="https://www.youtube.com/c/jamesqquick"
            className="youtube social">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
       */}

      <a 
        href="https://www.linkedin.com/in/david-hiltzman/" 
        className="linkedin link"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>

      <a 
        href="https://www.github.com/dhiltzman" 
        className="github link"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>

      <a href="https://www.youtube.com/channel/UCCFGvxwKVb6LosVxLl3oAsQ"
        className="youtube link">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
</div>
  );
}