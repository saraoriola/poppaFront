import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { nationality as data } from "../../../../../../src/data/data.json";

const BarChart = () => {
    const chartBackgroundColor = "#f8f8f8";
    const chartBorderRadius = "10px";

    const chartStyle = {
        height: "100px",
        background: chartBackgroundColor,
        borderRadius: chartBorderRadius,
    };

    return (
        <div style={chartStyle}>
            <ResponsiveBar
                data={data}
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
