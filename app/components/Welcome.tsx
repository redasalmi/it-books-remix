import type { LinksFunction } from 'remix';

import welcomeStyles from '~/styles/components/welcome.css';

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: welcomeStyles,
  },
];

export default function Welcome() {
  return (
    <div className='welcome'>
      <div className='welcome-container'>
        <h2>Welcome to IT Books</h2>
        <h2>IT, Programming and Computer Science Books</h2>
      </div>
    </div>
  );
}
