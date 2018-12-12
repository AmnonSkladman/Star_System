export const sunSize = '400px';

export default () => (
  <div>
    <style jsx>{`
      animation-name: spin;
      animation-duration: 1000ms;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      background-image: radial-gradient(lightyellow, moccasin, gold);
      border-radius: 50%;
      bottom: 0;
      height: ${sunSize};
      left: 0;
      margin: auto;
      position: absolute;
      right: 0;
      top: 0;
      width: ${sunSize};

      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    `}</style>
  </div>
);
