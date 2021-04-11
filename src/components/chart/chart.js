import React from 'react';
import { Label } from './label';
import { Tick } from './tick';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useSelector } from 'react-redux';
import { selectWeather } from '../../store/selectors';

const chartMargin = {
  right: 30,
  left: 20,
  bottom: 20,
  top: 20
}

export const Chart = () => {
  const data = useSelector(selectWeather);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        width={500}
        data={data}
        margin={chartMargin}
      >
        <XAxis dataKey="time" tick={<Tick />}/>
        <YAxis />

        <CartesianGrid strokeDasharray="2 2" />

        <Tooltip />

        <Line type="monotone" label={<Label />} dataKey="temperature" stroke="blue" />
      </LineChart>
    </ResponsiveContainer>
  )
}

