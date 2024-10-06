import React from 'react';
import  { Svg, Path } from 'react-native-svg';

const IconSun: React.FC = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M12 2v3m0 12v3M4.22 4.22l2.83 2.83m12.72 12.73l-2.83 2.83M2 12h3m12 0h3M4.22 19.78l2.83-2.83m12.72-12.73l-2.83-2.83"></Path>
    </Svg>
  );
};

export default IconSun;
