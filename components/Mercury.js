import { sunSize } from './Sun';
import { earthOrbitRelative, earthSizeRelative } from '../utils/calculations';

const size = `${earthSizeRelative(38.3)}px`;

export default () => (
  <div>
    <div className="Mercury" id="Mercury" />
    <style jsx>{`
      animation-name: spin;
      animation-duration: ${earthOrbitRelative(24.11)}ms;
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
        background-image: radial-gradient(silver, grey, darkgrey);
        border-radius: 50%;
        height: ${size};
        left: calc(${sunSize} + 50px);
        margin: auto;
        width: ${size};
      }
    `}</style>
  </div>
);
