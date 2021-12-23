import { Link } from 'remix';
import type { LinksFunction } from 'remix';

import type { Book } from '~/types/book';
import booksListStyles from '~/styles/components/books-list.css';

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: booksListStyles,
  },
];

interface BooksListProps {
  books: Book[];
}

export default function BooksList({ books }: BooksListProps) {
  return (
    <div className='books'>
      {books.map(({ title, image, isbn13 }) => (
        <div className='books-list-item' key={isbn13}>
          <Link to={`book/${isbn13}`} className='books-list-link'>
            <img src={image} alt={title} className='books-list-img' />
            <p className='books-list-text'>{title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
