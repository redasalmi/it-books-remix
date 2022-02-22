export default function Fonts() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
          @font-face {
            font-family: 'Poppins';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src: url('/fonts/poppins-latin-400-normal.woff2') format('woff2'),
              url('/fonts/poppins-latin-400-normal.woff') format('woff');
          }

          @font-face {
            font-family: 'Poppins';
            font-style: normal;
            font-display: swap;
            font-weight: 700;
            src: url('/fonts/poppins-latin-700-normal.woff2') format('woff2'),
              url('/fonts/poppins-latin-700-normal.woff') format('woff');
          }
    `,
      }}
    />
  );
}
