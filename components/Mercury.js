export default () => (
  <div>
    <div className="Mercury" id="Mercury" />
    <style jsx>{`
      animation-name: spin;
      animation-duration: 8000ms;
      animation-iteration-count: infinite;
      animation-timing-function: linear;

      bottom: 0;
      left: 0;
      margin: auto;
      position: absolute;
      right: 0;
      top: 0;

      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }

      .Mercury {
        background-color: darkgrey;
        border-radius: 50%;
        margin: auto 68% auto auto;
        height: 10px;
        width: 10px;
      }
    `}</style>
  </div>
);
