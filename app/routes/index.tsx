import { useLoaderData } from 'remix';
import type { LoaderFunction, LinksFunction } from 'remix';

import BooksList, { booksListStyles } from '~/components/Books/List';
import fetchBooks from '~/utils/fetchBooks';

export const links: LinksFunction = () => [...booksListStyles()];

export const loader: LoaderFunction = async () => {
  const books = await fetchBooks('/new');

  return books;
};

export default function Books() {
  const data = useLoaderData();

  return (
    <main className='container content'>
      <BooksList books={data.books} />
    </main>
  );
}
