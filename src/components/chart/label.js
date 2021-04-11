import React from 'react';

export const Label = (props) => {
  const { x, y, stroke, value } = props;

  return (
    <text x={x} y={y} dy={-4} fill={stroke} fontSize={16} textAnchor="middle">
      {value}
    </text>
  )
}

