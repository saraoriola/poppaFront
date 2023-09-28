import { WS_URL } from "../../../../../utils/constants";
import { useEffect, useState } from "react";
import { ResponsivePie } from "@nivo/pie";
import { type as data } from "../../../../../../src/data/data.json";
import useWebSocket from "react-use-websocket";

function isCheckInOp(message) {
    let evt = JSON.parse(message.data);
    return evt.type === "CHECK-IN";
}

const PieChart = () => {
    const [chartData, setChartData] = useState(data);
    const { lastJsonMessage } = useWebSocket(WS_URL, {
        share: true,
        filter: isCheckInOp,
    });

    useEffect(() => {
        if (lastJsonMessage?.payload) {
            const user = lastJsonMessage.payload.User;
            let updated = false;
            const chartDataUpdated = chartData.map((area) => {
                if (area.id === user.area) {
                    area.value += 1;
                    updated = true;
                }
                return area;
            });

            if (updated) setChartData(chartDataUpdated);
            else setChartData([...chartDataUpdated, { id: user.area, label: user.area, value: 1 }]);
        }
    }, [lastJsonMessage]);

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
            <ResponsivePie
                data={data}
                margin={{ top: 30, right: 150, bottom: 30 }}
                sortByValue={true}
                innerRadius={0.6}
                padAngle={0.7}
                cornerRadius={2}
                activeOuterRadiusOffset={10}
                colors={{ scheme: "nivo" }}
                borderColor={{
                    from: "color",
                    modifiers: [["darker", 0.2]],
                }}
                enableArcLinkLabels={false}
                arcLinkLabelsTextColor="#333333"
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: "color" }}
                enableArcLabels={true}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={{
                    from: "color",
                    modifiers: [["darker", 2]],
                }}
                arcLabel="value"
                isInteractive={true}
                legends={[
                    {
                        anchor: "right",
                        direction: "column",
                        justify: false,
                        translateX: -10,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemWidth: 0,
                        itemHeight: 22,
                        itemTextColor: "#999",
                        itemDirection: "left-to-right",
                        itemOpacity: 1,
                        symbolSize: 10,
                        symbolShape: "circle",
                        effects: [
                            {
                                on: "hover",
                                style: {
                                    itemTextColor: "#000",
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
