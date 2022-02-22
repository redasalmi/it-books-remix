import * as React from 'react';
import { Link, Form, useTransition } from 'remix';

import { Spinner, Search } from '~/components/icons';

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
              <Spinner className="search-svg" />
            ) : (
              <Search className="search-svg" />
            )}
          </button>
        </Form>
      </div>
    </nav>
  );
}
