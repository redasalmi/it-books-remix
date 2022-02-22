import { useLoaderData } from 'remix';

import fetchBooks from '~/utils/fetchBooks.server';

import { BookDetail } from '~/components';
import styles from '~/styles/book.css';

import type { LoaderFunction, LinksFunction, MetaFunction } from 'remix';
import type { BookData } from '~/types';

export const meta: MetaFunction = ({ data }) => {
  if (!data) {
    return {
      title: 'It books',
      description: 'Website for IT, Programming and Computer Science Books',
    };
  }

  return {
    title: `IT Books - ${data.title}`,
    description: `${data.desc}`,
  };
};

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: styles,
  },
];

export const loader: LoaderFunction = async ({ params }) => {
  try {
    const { isbn13 } = params;
    const book: BookData = await fetchBooks(`/books/${isbn13}`);

    return book;
  } catch {
    throw new Response('Network error.', {
      status: 404,
    });
  }
};

export default function BookDetailRoute() {
  const book = useLoaderData<BookData>();

  return (
    <main className="container content">
      <BookDetail book={book} />
    </main>
  );
}
