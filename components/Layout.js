import Head from 'next/head';
import Header from './Header';

const Layout = props => (
  <div>
    <Head>
      <meta charset="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdn.jsdelivr.net/npm/normalize.css@8.0.1/normalize.css"
      />
    </Head>
    <Header />
    {props.children}
    <style jsx global>
      {`
        body {
          background-color: #000;
          color: white;
          font-family: Lato, sans-serif;
          font-size: 10px;
          margin: 0;
          padding: 2rem;
          max-width: 100vw;
          overflow: hidden;
        }
      `}
    </style>
  </div>
);

export default Layout;
