import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import { type as data } from '../../../../../../src/data/data.json';

const PieChart = () => {
  const chartBackgroundColor = '#f8f8f8'; 
  const chartBorderRadius = '10px'; 

  const chartStyle = {
    height: '150px', 
    background: chartBackgroundColor,
    borderRadius: chartBorderRadius,
  };

  return (
    <div style={chartStyle}>
      <ResponsivePie
        data={data}
        margin={{ top: 30, right: 150, bottom: 30 }}
        sortByValue={true}
        innerRadius={0.1} 
        padAngle={0.7}
        cornerRadius={2}
        activeOuterRadiusOffset={10} 
        colors={{ scheme: 'nivo' }}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 0.2]],
        }}
        enableArcLinkLabels={false}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        enableArcLabels={false}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: 'color',
          modifiers: [['darker', 2]],
        }}
        isInteractive={false}
        legends={[
          {
            anchor: 'right',
            direction: 'column',
            justify: false,
            translateX: -10,
            translateY: 0,
            itemsSpacing: 0,
            itemWidth: 0,
            itemHeight: 22,
            itemTextColor: '#999',
            itemDirection: 'left-to-right',
            itemOpacity: 1,
            symbolSize: 10,
            symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#000',
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default PieChart;
