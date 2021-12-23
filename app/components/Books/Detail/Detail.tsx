import { Link } from 'remix';
import type { LinksFunction } from 'remix';

import type { BookData } from '../../../types/book';

import bookDetailStyles from '~/styles/components/book-detail.css';

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: bookDetailStyles,
  },
];

interface BookDetailProps {
  book: BookData;
}

const BookDetail = ({ book }: BookDetailProps) => {
  const {
    title,
    base64Image,
    subtitle,
    authors,
    publisher,
    year,
    pages,
    language,
    rating,
    isbn10,
    isbn13,
    desc,
  } = book;

  return (
    <div>
      <nav className='detail-nav'>
        <ul>
          <li>
            <Link to='/' className='detail-nav-link'>
              It Books
            </Link>
          </li>
          <li className='detail-nav-title'>{title}</li>
        </ul>
      </nav>

      <div className='book-detail'>
        <div className='book-detail-img-col'>
          <img className='book-detail-img' src={base64Image} alt={title} />

          <div className='text-center'>
            <h3 className='book-detail-title'>{title}</h3>
            <h3>{subtitle}</h3>
          </div>
        </div>

        <div className='book-detail-info-col'>
          <table>
            <tbody>
              <tr>
                <td>Title</td>
                <td>{title}</td>
              </tr>

              <tr>
                <td>Subtitle</td>
                <td>{subtitle}</td>
              </tr>

              <tr>
                <td>Authors</td>
                <td>{authors}</td>
              </tr>

              <tr>
                <td>Publisher</td>
                <td>{publisher}</td>
              </tr>

              <tr>
                <td>Year</td>
                <td>{year}</td>
              </tr>

              <tr>
                <td>Pages</td>
                <td>{pages}</td>
              </tr>

              <tr>
                <td>Language</td>
                <td>{language}</td>
              </tr>

              <tr>
                <td>Rating</td>
                <td>{`${rating}/5`}</td>
              </tr>

              <tr>
                <td>ISBN-10</td>
                <td>{isbn10}</td>
              </tr>

              <tr>
                <td>ISBN-13</td>
                <td>{isbn13}</td>
              </tr>

              <tr>
                <td>Description</td>
                <td>{desc}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
