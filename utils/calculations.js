import { earthOrbit, earthSize } from '../components/Earth';

export const earthOrbitRelative = diff => {
  const orbit = (diff * earthOrbit) / 100;
  return orbit;
};

export const earthSizeRelative = diff => {
  const size = (diff * earthSize) / 100;
  return size;
};
