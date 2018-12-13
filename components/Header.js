import Link from 'next/link';

const Header = () => (
  <div id="header">
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
    <style jsx global>
      {`
        a {
          color: white;
          font-size: 1rem;
          padding: 1rem;
          text-decoration: none;
          transition: ease-in-out 0.25s;
        }

        a:hover {
          color: silver;
        }

        #header {
          padding-bottom: 1rem;
          position: relative;
          z-index: 6000;
        }
      `}
    </style>
  </div>
);

export default Header;
