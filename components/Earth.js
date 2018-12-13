import { sunSize } from './Sun';

export const earthOrbit = 50000;
export const earthSize = 30;

export default () => (
  <div>
    <div className="Earth" id="Earth" />
    <style jsx>{`
      animation-name: spin;
      animation-duration: ${earthOrbit}ms;
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

      .Earth {
        background-image: radial-gradient(darkblue, midnightblue);
        border-radius: 50%;
        height: ${earthSize}px;
        left: calc(${sunSize} + 170px);
        margin: auto;
        width: ${earthSize}px;
      }
    `}</style>
  </div>
);
