import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
{/* import { getEventById } from '../../../../features/dashboards/dashboardsSlice'; */}
import { ResponsiveBar } from "@nivo/bar";

import { nationality as data } from "../../../../../../src/data/data.json";

const BarChart = () => {
    {/* const dispatch = useDispatch();
const event = useSelector((state) => state.dashboards.event);
const { id } = useParams();

useEffect(() => {
  dispatch(getEventById(id));
}, [dispatch, id]);
console.log(event) */}
    const chartBackgroundColor = "#f8f8f8";
    const chartBorderRadius = "4px";

    const chartStyle = {
        height: "150px",
        background: chartBackgroundColor,
        borderRadius: chartBorderRadius,
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
    };

    return (
        <div style={chartStyle}>
            <ResponsiveBar
                data={data}  //event.nacionality
                keys={["United States", "Canada", "Mexico", "United Kingdom", "Germany"]}
                indexBy="country"
                margin={{ top: 10, bottom: 10, left: 50, right: 20 }}
                padding={0.3}
                layout="horizontal"
                valueScale={{ type: "linear" }}
                indexScale={{ type: "band", round: true }}
                colors={{ scheme: "nivo" }}
                borderColor={{
                    from: "color",
                    modifiers: [["darker", 1.6]],
                }}
                axisTop={null}
                axisRight={null}
                axisBottom={null}
                borderRadius={5}
                labelTextColor={{
                    from: "color",
                    modifiers: [["darker", "1.4"]],
                }}
                isInteractive={false}
                role="application"
            />
        </div>
    );
};

export default BarChart;
