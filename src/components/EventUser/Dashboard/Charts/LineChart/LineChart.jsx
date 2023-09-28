import { WS_URL } from "../../../../../utils/constants";
import { useEffect, useState } from "react";
import { ResponsiveBump } from "@nivo/bump";
import { entry_exit as data } from "../../../../../../src/data/data.json";
import useWebSocket from "react-use-websocket";

const invertYData = (data) => {
    return data.map((serie) => ({
        id: serie.id,
        data: serie.data.map((d) => ({ x: d.x, y: -d.y })),
    }));
};

function isCheckInOp(message) {
    let evt = JSON.parse(message.data);
    return evt.type === "CHECK-IN";
}

const LineChart = () => {
    const [chartData, setChartData] = useState(data);
    const { lastJsonMessage } = useWebSocket(WS_URL, {
        share: true,
        filter: isCheckInOp,
    });

    useEffect(() => {
        if (lastJsonMessage?.payload) {
            const arriveTime = lastJsonMessage.payload.arriveTime;
            let wholeTime = new Date(arriveTime).toTimeString().split(" ")[0].split(":");
            chartData[0].data.push({ x: wholeTime, y: chartData[0].data.slice(-1)[0].y + 1 });
            chartData[1].data.push({ x: wholeTime, y: chartData[1].data.slice(-1)[0].y });
            setChartData([...chartData]);
        }
    }, [lastJsonMessage]);

    const invertedData = invertYData(data);
    const chartBackgroundColor = "#f8f8f8";
    const chartBorderRadius = "4px";
    const chartStyle = {
        height: "140px",
        background: chartBackgroundColor,
        borderRadius: chartBorderRadius,
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
    };

    return (
        <div style={chartStyle}>
            <ResponsiveBump
                data={invertedData}
                xOuterPadding={0.2}
                yOuterPadding={0.1}
                colors={{ scheme: "nivo" }}
                lineWidth={3}
                activeLineWidth={6}
                inactiveLineWidth={3}
                inactiveOpacity={0.25}
                startLabelPadding={15}
                startLabelTextColor={{ from: "color", modifiers: [] }}
                pointSize={10}
                activePointSize={11}
                inactivePointSize={0}
                pointColor={{ theme: "background" }}
                pointBorderWidth={2}
                activePointBorderWidth={3}
                pointBorderColor={{ from: "serie.color" }}
                axisTop={null}
                axisBottom={{
                    tickSize: 6,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "",
                    legendPosition: "middle",
                    legendOffset: 32,
                }}
                axisLeft={{
                    tickSize: 6,
                    tickPadding: 7,
                    tickRotation: 0,
                    legend: "",
                    legendPosition: "middle",
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
