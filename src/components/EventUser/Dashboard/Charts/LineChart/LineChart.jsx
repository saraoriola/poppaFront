import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
{/* import { getEventById } from '../../../../features/dashboards/dashboardsSlice'; */}
import { ResponsiveBump } from '@nivo/bump';

import { entry_exit as data } from '../../../../../../src/data/data.json';

const invertYData = (data) => { //getEventById
  return data.map((serie) => ({
    id: serie.id,
    data: serie.data.map((d) => ({ x: d.x, y: -d.y })),
  }));
};

const LineChart = () => {
  {/* const dispatch = useDispatch();
const event = useSelector((state) => state.dashboards.event);
const { id } = useParams();

useEffect(() => {
  dispatch(getEventById(id));
}, [dispatch, id]);
console.log(event) */}

  const invertedData = invertYData(data); //getEventById

  const chartBackgroundColor = '#f8f8f8'; 
  const chartBorderRadius = '4px'; 

  const chartStyle = {
    height: '140px',
    background: chartBackgroundColor,
    borderRadius: chartBorderRadius,
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
  };

  return (
    <div style={chartStyle}>
      <ResponsiveBump
        data={invertedData} //event.entry_exit
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
