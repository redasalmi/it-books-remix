import { useLoaderData, useSearchParams } from 'remix';
import type { LoaderFunction, LinksFunction, MetaFunction } from 'remix';

import BooksList, { booksListStyles } from '~/components/Books/List';
import Pagination, { paginationStyles } from '~/components/Pagination';
import fetchBooks from '~/utils/fetchBooks';
import type { BooksData } from '~/types/book';

export const meta: MetaFunction = ({ data, location }) => {
  if (!data.hasSearched) {
    return {
      title: 'It books - New Released Books',
      description: 'Website for IT, Programming and Computer Science Books',
    };
  }

  const [search, page] = location.search.split('&');
  const getParamValue = (param: string) => param.split('=').slice(-1)[0];
  const searchedBook = getParamValue(search);
  const pageNumber = getParamValue(page);

  return {
    title: `IT Books - ${searchedBook} books - page ${pageNumber}`,
    description: 'Website for IT, Programming and Computer Science Books',
  };
};

export const links: LinksFunction = () => [
  ...booksListStyles(),
  ...paginationStyles(),
];

export const loader: LoaderFunction = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const search = url.searchParams.get('search');
    const page = url.searchParams.get('page');
    const hasSearched = !!(search && search?.length > 0);

    const booksData: BooksData = !hasSearched
      ? { ...(await fetchBooks('/new')), hasSearched }
      : { ...(await fetchBooks(`/search/${search}/${page}`)), hasSearched };

    return booksData;
  } catch {
    throw new Response('Network error.', {
      status: 404,
    });
  }
};

export default function BooksRoute() {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');
  const page = searchParams.get('page');

  const { books, total, hasSearched } = useLoaderData<BooksData>();

  const handleChangePage = (newPage: number) => {
    setSearchParams(
      new URLSearchParams(`search=${search}&page=${newPage.toString(10)}`),
    );
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <main className='container content'>
      {books && books.length > 0 ? (
        <>
          <BooksList books={books} />

          {hasSearched ? (
            <Pagination
              activePage={parseInt(page!, 10)}
              itemsCountPerPage={10}
              totalItemsCount={parseInt(total, 10)}
              handlePageChange={handleChangePage}
            />
          ) : null}
        </>
      ) : (
        <div className='text-center'>
          <h1>Sorry, No Books Found</h1>
        </div>
      )}
    </main>
  );
}
