import { useLoaderData } from 'remix';
import type { LoaderFunction, LinksFunction, MetaFunction } from 'remix';

import BookDetail, { links as bookDetailLinks } from '~/components/BookDetail';
import { fetchBooks, fetchImage, getBase64Img } from '~/utils';
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

export const links: LinksFunction = () => [...bookDetailLinks()];

export const loader: LoaderFunction = async ({ params }) => {
  try {
    const { isbn13 } = params;
    const book: BookData = await fetchBooks(`/books/${isbn13}`);
    const uint8 = await fetchImage(book.image);
    book.base64Image = await getBase64Img(uint8);

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
