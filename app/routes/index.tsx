import { useLoaderData, useSearchParams } from 'remix';
import type { LoaderFunction, LinksFunction } from 'remix';

import BooksList, { booksListStyles } from '~/components/Books/List';
import Pagination, { paginationStyles } from '~/components/Pagination';
import fetchBooks from '~/utils/fetchBooks';

export const links: LinksFunction = () => [
  ...booksListStyles(),
  ...paginationStyles(),
];

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const search = url.searchParams.get('search');
  const page = url.searchParams.get('page');
  const hasSearched = !!(search && search?.length > 0);

  try {
    const data = !hasSearched
      ? await fetchBooks('/new')
      : await fetchBooks(`/search/${search}/${page}`);

    return {
      data,
      hasSearched,
    };
  } catch (error) {
    return {
      data: [],
      hasSearched,
    };
  }
};

export default function Books() {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');
  const page = searchParams.get('page');

  const { data, hasSearched } = useLoaderData();
  const { books, total } = data;

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
