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
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap'
          rel='stylesheet'
        />
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
