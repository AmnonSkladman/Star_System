export default () => (
  <div>
    <style jsx>{`
      animation-name: spin;
      animation-duration: 1000ms;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      background-color: lightyellow;
      border-radius: 50%;
      bottom: 0;
      height: 500px;
      left: 0;
      margin: auto;
      position: absolute;
      right: 0;
      top: 0;
      width: 500px;

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
