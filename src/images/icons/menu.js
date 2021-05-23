import React from 'react';

export default function CloseIcon({ baseLayer, color0 }) {
  return (
    <svg
      version="1.1"
      className={baseLayer}
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
    >
      {/* <style type="text/css">
	.st0{fill:none;stroke:#000000;stroke-width:32;stroke-linecap:round;stroke-linejoin:round;}
</style> */}
      <circle className={color0} cx="256" cy="144" r="16" />
      <circle className={color0} cx="256" cy="256" r="16" />
      <circle className={color0} cx="256" cy="368" r="16" />
    </svg>
  );
}
