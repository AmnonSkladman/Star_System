import Link from 'next/link';

const Header = () => (
  <div>
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
      `}
    </style>
  </div>
);

export default Header;
