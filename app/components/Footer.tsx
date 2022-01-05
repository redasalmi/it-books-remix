import type { LinksFunction } from 'remix';

import { Github } from '~/components/icons';
import footerStyles from '~/styles/components/footer.css';

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: footerStyles,
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>
          All of these books and information are brought to you by the{' '}
          <a
            target="_blank"
            rel="noreferrer noopener"
            className="footer-link"
            href="https://api.itbook.store/"
          >
            IT Bookstore API
          </a>
        </p>

        <a
          target="_blank"
          rel="noreferrer noopener"
          aria-label="reda salmi github account"
          href="https://github.com/redasalmi/it-books-remix"
        >
          <Github className="github-svg" />
        </a>
      </div>
    </footer>
  );
}
