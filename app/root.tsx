import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix';
import type { LinksFunction } from 'remix';

import Navbar, { navbarStyles } from '~/components/Navbar';
import Welcome, { welcomeStyles } from '~/components/Welcome';
import Footer, { footerStyles } from '~/components/Footer';
import Error, { errorStyles } from '~/components/Error';

import globalStyles from '~/styles/global.css';

export const links: LinksFunction = () => [
  {
    rel: 'preload',
    as: 'font',
    href: '/fonts/poppins-latin-400-normal.woff2',
    type: 'font/woff2',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'preload',
    as: 'font',
    href: '/fonts/poppins-latin-700-normal.woff2',
    type: 'font/woff2',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'icon',
    href: '/favicon.ico',
  },
  {
    rel: 'stylesheet',
    href: globalStyles,
  },
  ...navbarStyles(),
  ...welcomeStyles(),
  ...footerStyles(),
  ...errorStyles(),
];

interface DocumentProps {
  children: React.ReactNode;
}

function Document({ children }: DocumentProps) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body>
        <Navbar />
        <Welcome />
        {children}
        <Footer />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
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
