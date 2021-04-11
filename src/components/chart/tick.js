import React from 'react';

export const Tick = ({ x, y, payload }) => (
  <g transform={`translate(${x},${y})`}>
    <text x={0} y={0} dy={16} textAnchor="end" fill="white" transform="rotate(-35)">
      {payload.value}
    </text>
  </g>
)
