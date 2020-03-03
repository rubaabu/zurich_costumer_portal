import React from "react";

// Styles Imports
import "./index.css";

const Footer = () => {
  return (
    <footer className="footer-container" data-t-name="Footer">
      <div className="social-media bg-secondary-01">
        <ul className="linklist linklist--inline mod-footer__social">
          <li>
            <a
              href="https://www.facebook.com/zurichoesterreich"
              target="_blank"
              rel="noopener noreferrer"
              className="link link--icon link--has-icon"
            >
              <i className="icon icon--facebook" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/zurich_at"
              target="_blank"
              rel="noopener noreferrer"
              className="link link--icon link--has-icon"
            >
              <i className="icon icon--twitter" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCLdIz05wnKJkyk_k0BShFUA"
              rel="noopener noreferrer"
              target="_blank"
              className="link link--icon link--has-icon"
            >
              <i className="icon icon--youtube" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              href="https://www.xing.com/company/zurichoesterreich"
              target="_blank"
              rel="noopener noreferrer"
              className="link link--icon link--has-icon"
            >
              <i className="icon icon--xing" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
      <div className="mod mod-footer">
        <div className="mod-footer__wrapper">
          <ul className="linklist linklist--inline mod-footer__list">
            <li>
              <a
                href="https://www.zurich.at/impressum"
                target="_blank"
                rel="noopener noreferrer"
                className="link link--primary"
              >
                Impressum
              </a>
            </li>
            <li>
              <a
                href="https://www.zurich.at/rechtliche_hinweise"
                target="_blank"
                rel="noopener noreferrer"
                className="link link--primary"
              >
                Rechtliche Hinweise
              </a>
            </li>
            <li>
              <a
                href="https://www.zurich.at/datenschutz"
                target="_blank"
                rel="noopener noreferrer"
                className="link link--primary"
              >
                Datenschutz
              </a>
            </li>
          </ul>
        </div>
        <div className="mod-footer__copyright">
          <p className="copy-small">
            &copy;
            {new Date().getFullYear()}
            &nbsp;Zurich
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
