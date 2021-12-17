import RcPagination from 'react-js-pagination';
import type { LinksFunction } from 'remix';

import paginationStyles from '~/styles/components/pagination.css';

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: paginationStyles,
  },
];

interface PaginationProps {
  activePage: number;
  itemsCountPerPage: number;
  totalItemsCount: number;
  handlePageChange: (page: number) => void;
}

export default function Pagination({
  activePage,
  itemsCountPerPage,
  totalItemsCount,
  handlePageChange,
}: PaginationProps) {
  return (
    <div className='pagination-container'>
      <RcPagination
        activePage={activePage}
        itemsCountPerPage={itemsCountPerPage}
        totalItemsCount={totalItemsCount}
        onChange={handlePageChange}
        innerClass='pagination'
        itemClass='pagination-item'
        activeClass='pagination-active-item'
        disabledClass='pagination-disabled-item'
        linkClass='pagination-link'
        activeLinkClass='pagination-active-link'
      />
    </div>
  );
}
