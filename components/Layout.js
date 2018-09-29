import Header from './Header';

const Layout = props => (
  <div>
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
