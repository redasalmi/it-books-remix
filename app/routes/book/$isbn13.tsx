import { useLoaderData } from 'remix';
import type { LoaderFunction, LinksFunction, MetaFunction } from 'remix';

import BookDetail, { bookDetailStyles } from '~/components/Books/Detail';
import fetchBooks from '~/utils/fetchBooks';

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

export const links: LinksFunction = () => [...bookDetailStyles()];

export const loader: LoaderFunction = async ({ params }) => {
  const { isbn13 } = params;
  try {
    const book = await fetchBooks(`/books/${isbn13}`);

    return book;
  } catch {
    throw new Response('Network error.', {
      status: 404,
    });
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
