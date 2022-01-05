import * as React from 'react';
import { Link, Form, useTransition } from 'remix';
import type { LinksFunction } from 'remix';

import navbarStyles from '~/styles/components/navbar.css';

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: navbarStyles,
  },
];

export default function NavBar() {
  const transition = useTransition();
  const isSubmitting = transition.state === 'submitting';
  const searchRef = React.useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (!searchRef.current?.value) {
      event.preventDefault();
    }
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="logo">
          <Link to="/" className="navbar-link">
            IT Books
          </Link>
        </div>

        <Form method="get" action="/" className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="search"
            ref={searchRef}
            disabled={isSubmitting}
            className="search-input"
            aria-label="Search books by title, author, ISBN"
            placeholder="Search books by title, author, ISBN"
          />

          <input type="text" name="page" value="1" hidden readOnly />

          <button
            type="submit"
            className="submit-btn"
            aria-label="search book"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <svg
                className="search-svg"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                width="48px"
                height="48px"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8z"
                  opacity=".5"
                  fill="white"
                />
                <path
                  d="M20 12h2A10 10 0 0 0 12 2v2a8 8 0 0 1 8 8z"
                  fill="#343a40"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 12 12"
                    to="360 12 12"
                    dur="1s"
                    repeatCount="indefinite"
                  />
                </path>
              </svg>
            ) : (
              <svg
                className="search-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                width="48px"
                height="48px"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
            )}
          </button>
        </Form>
      </div>
    </nav>
  );
}
