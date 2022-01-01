import { LinksFunction, useSearchParams, Link } from 'remix';

import paginationStyles from '~/styles/components/pagination.css';

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: paginationStyles,
  },
];

interface PaginationItemProps {
  page: number;
  text: string | number;
  active?: boolean;
  disabled?: boolean;
}

function PaginationItem({ page, text, active, disabled }: PaginationItemProps) {
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search');

  const liClassName = `pagination-item ${
    active ? 'pagination-active-item' : ''
  } ${disabled ? 'pagination-disabled-item' : ''}`.trim();
  const linkClassName = `pagination-link ${
    active ? 'pagination-active-link' : ''
  }`.trim();
  const link = !search ? `?page=${page}` : `?search=${search}&page=${page}`;

  return (
    <li className={liClassName}>
      {disabled ? (
        <span className={linkClassName}>{text}</span>
      ) : (
        <Link
          to={link}
          aria-label={`go to page number ${page}`}
          className={linkClassName}
        >
          {text}
        </Link>
      )}
    </li>
  );
}

interface PaginationProps {
  activePage: number;
  itemsCountPerPage: number;
  totalItemsCount: number;
}

export default function Pagination({
  activePage,
  itemsCountPerPage,
  totalItemsCount,
}: PaginationProps) {
  const pagesTotal = Math.ceil(totalItemsCount / itemsCountPerPage);
  const paginationItems = pagesTotal > 5 ? 5 : pagesTotal;

  let pages = Array.from({ length: paginationItems }, (_, i) => i + 1);
  if (pagesTotal > 5) {
    if (activePage + 2 < pagesTotal && activePage >= 4) {
      pages = [
        activePage - 2,
        activePage - 1,
        activePage,
        activePage + 1,
        activePage + 2,
      ];
    }
    if (activePage + 2 >= pagesTotal) {
      pages = Array.from(
        { length: paginationItems },
        (_, i) => pagesTotal + i - 4,
      );
    }
  }

  return (
    <div className='pagination-container'>
      <ul className='pagination'>
        <PaginationItem page={1} text='«' disabled={activePage === 1} />
        <PaginationItem
          page={activePage - 1}
          text='⟨'
          disabled={activePage === 1}
        />

        {pages.map((page) => (
          <PaginationItem
            key={`page${page}`}
            page={page}
            text={page}
            active={page === activePage}
          />
        ))}

        <PaginationItem
          page={activePage + 1}
          text='⟩'
          disabled={activePage === pagesTotal}
        />
        <PaginationItem
          page={pagesTotal}
          text='»'
          disabled={activePage === pagesTotal}
        />
      </ul>
    </div>
  );
}
