import React from 'react';
import { ResponsiveBump } from '@nivo/bump';
import { entry_exit as data } from '../../../../../../src/data/data.json';

const invertYData = (data) => {
  return data.map((serie) => ({
    id: serie.id,
    data: serie.data.map((d) => ({ x: d.x, y: -d.y })),
  }));
};

const LineChart = () => {
  const invertedData = invertYData(data);

  const chartBackgroundColor = '#f8f8f8'; 
  const chartBorderRadius = '10px'; 

  const chartStyle = {
    height: '140px',
    background: chartBackgroundColor,
    borderRadius: chartBorderRadius,
  };

  return (
    <div style={chartStyle}>
      <ResponsiveBump
        data={invertedData}
        xOuterPadding={0.15}
        yOuterPadding={0.6}
        colors={{ scheme: 'nivo' }}
        lineWidth={3}
        activeLineWidth={6}
        inactiveLineWidth={3}
        inactiveOpacity={0.25}
        startLabelPadding={15}
        startLabelTextColor={{ from: 'color', modifiers: [] }}
        pointSize={4}
        activePointSize={11}
        inactivePointSize={0}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        activePointBorderWidth={3}
        pointBorderColor={{ from: 'serie.color' }}
        axisTop={null}
        axisBottom={{
          tickSize: 6,
          tickPadding: 5,
          tickRotation: 0,
          legend: '',
          legendPosition: 'middle',
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 6,
          tickPadding: 7,
          tickRotation: 0,
          legend: '',
          legendPosition: 'middle',
          legendOffset: -41,
          format: (value) => Math.abs(value),
        }}
        margin={{ top: 10, right: 15, bottom: 30, left: 40 }}
        axisRight={null}
      />
    </div>
  );
};

export default LineChart;
