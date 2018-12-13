import Head from 'next/head';
import Header from './Header';

const Layout = props => (
  <div>
    <Head>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdn.jsdelivr.net/npm/normalize.css@8.0.1/normalize.css"
      />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="https://fonts.googleapis.com/css?family=Varela+Round"
        rel="stylesheet"
      />
    </Head>
    <Header />
    {props.children}
    <style jsx global>
      {`
        body {
          background-color: #000;
          color: white;
          font-family: 'Varela Round', Lato, sans-serif;
          font-size: 10px;
          font-weight: 400;
          height: ${typeof window !== 'undefined'
            ? `${window.innerHeight}px`
            : '100vh'};
          line-height: 1.5;
          margin: 0;
          padding: 2rem;
          max-width: 100vw;
          overflow: hidden;
        }

        h1 {
          font-size: 2rem;
        }

        h2 {
          font-size: 1.5rem;
        }

        p {
          font-size: 1rem;
        }
      `}
    </style>
  </div>
);

export default Layout;
