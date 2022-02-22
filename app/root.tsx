import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix';
import type { LinksFunction } from 'remix';

import { Fonts, Navbar, Welcome, Footer, Error } from '~/components';
import styles from '~/styles/global.css';

export const links: LinksFunction = () => [
  {
    rel: 'icon',
    href: '/favicon.ico',
  },
  {
    rel: 'stylesheet',
    href: styles,
  },
];

interface DocumentProps {
  children: React.ReactNode;
}

function Document({ children }: DocumentProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Fonts />
        <Links />
      </head>
      <body>
        <Navbar />
        <Welcome />
        {children}
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

export function CatchBoundary() {
  return (
    <Document>
      <Error />
    </Document>
  );
}
