import type { LinksFunction } from 'remix';

import errorStyles from '~/styles/components/error.css';

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: errorStyles,
  },
];

export default function Error() {
  return (
    <main className={`container content error`}>
      <h2>
        Sorry, Something has gone wrong with the API, please try to refresh the
        page later.
      </h2>
    </main>
  );
}
