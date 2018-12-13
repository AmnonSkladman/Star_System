import { sunSize } from './Sun';
import { earthOrbitRelative, earthSizeRelative } from '../utils/calculations';

const size = `${earthSizeRelative(53.21)}px`;

export default () => (
  <div>
    <div className="Mars" id="Mars" />
    <style jsx>{`
      animation-name: spin;
      animation-duration: ${earthOrbitRelative(188.22)}ms;
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

      .Mars {
        background-image: radial-gradient(lightsalmon, salmon, white);
        border-radius: 50%;
        height: ${size};
        left: calc(${sunSize} + 230px);
        margin: auto;
        width: ${size};
      }
    `}</style>
  </div>
);
