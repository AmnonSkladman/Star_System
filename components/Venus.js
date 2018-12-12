import { sunSize } from './Sun';

const size = '30px';

export default () => (
  <div>
    <div className="Venus" id="Venus" />
    <style jsx>{`
      animation-name: spin;
      animation-duration: 7800ms;
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

      .Venus {
        background-image: radial-gradient(papayawhip, moccasin);
        border-radius: 50%;
        height: ${size};
        left: calc(${sunSize} + 100px);
        margin: auto;
        width: ${size};
      }
    `}</style>
  </div>
);
