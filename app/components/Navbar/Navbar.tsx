import * as React from 'react';
import { Link, useLocation, useNavigate, useSearchParams } from 'remix';
import type { LinksFunction } from 'remix';

import navbarStyles from '~/styles/components/navbar.css';

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: navbarStyles,
  },
];

export default function NavBar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [search, setSearch] = React.useState('');
  const [, setSearchParams] = useSearchParams();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    if (searchValue) {
      setSearch(searchValue);
    } else {
      setSearch('');
    }
  };

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (search) {
      if (pathname === '/') {
        setSearchParams(new URLSearchParams(`search=${search}&page=1`));
      } else {
        navigate(`/?search=${search}&page=1`);
      }
    }
  };

  return (
    <nav className='navbar'>
      <div className='container navbar-container'>
        <div className='logo'>
          <Link to='.' className='navbar-link'>
            IT Books
          </Link>
        </div>

        <form onSubmit={handleSearch} className='form'>
          <input
            id='search'
            type='text'
            value={search}
            className='search-input'
            onChange={handleSearchChange}
            aria-label='Search books by title, author, ISBN'
            placeholder='Search books by title, author, ISBN'
          />

          <button className='submit-btn' type='submit' aria-label='search book'>
            <svg
              className='search-svg'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='white'
              width='48px'
              height='48px'
            >
              <path d='M0 0h24v24H0z' fill='none' />
              <path d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' />
            </svg>
          </button>
        </form>
      </div>
    </nav>
  );
}
