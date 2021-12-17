import { useLoaderData } from 'remix';
import type { LoaderFunction, LinksFunction } from 'remix';

import BookDetail, { bookDetailStyles } from '~/components/Books/Detail';
import fetchBooks from '~/utils/fetchBooks';

export const links: LinksFunction = () => [...bookDetailStyles()];

export const loader: LoaderFunction = async ({ params }) => {
  const { isbn13 } = params;
  try {
    const book = await fetchBooks(`/books/${isbn13}`);

    return book;
  } catch (error) {
    return {};
  }
};

export default function BookDetailRoute() {
  const book = useLoaderData();

  return (
    <main className='container content'>
      <BookDetail book={book} />
    </main>
  );
}
