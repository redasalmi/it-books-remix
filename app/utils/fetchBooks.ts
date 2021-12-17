const fetchBooks = async (resource: string) => {
  const apiUrl = 'https://api.itbook.store/1.0';
  const res = await fetch(`${apiUrl}${resource}`, {
    headers: {
      origin: '*',
      'Content-Type': 'application/json',
    },
  });

  if (res.status !== 200) {
    throw new Error('Network error, no books found.');
  }

  const json = await res.json();

  return json;
};

export default fetchBooks;
