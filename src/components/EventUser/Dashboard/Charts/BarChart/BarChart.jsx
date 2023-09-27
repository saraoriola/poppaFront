import { WS_URL } from "../../../../../utils/constants";
import { useEffect, useState } from "react";
import { ResponsiveBar } from "@nivo/bar";
import { nationality as data } from "../../../../../../src/data/data.json";
import useWebSocket from "react-use-websocket";

function isCheckInOp(message) {
    let evt = JSON.parse(message.data);
    return evt.type === "CHECK-IN";
}

const BarChart = () => {
    const [chartData, setChartData] = useState(data);
    const { lastJsonMessage } = useWebSocket(WS_URL, {
        share: true,
        filter: isCheckInOp,
    });

    useEffect(() => {
        if (lastJsonMessage?.payload) {
            const user = lastJsonMessage.payload.User;
            let updated = false;
            const chartDataUpdated = chartData.map((country) => {
                if (country.country === user.country) {
                    country.quantity += 1;
                    updated = true;
                }
                return country;
            });

            if (updated) setChartData(chartDataUpdated);
            else setChartData([...chartDataUpdated, { country: user.country, quantity: 1 }]);
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
            <ResponsiveBar
                data={chartData}
                keys={["quantity"]}
                indexBy="country"
                margin={{ top: 10, bottom: 10, left: 50, right: 20 }}
                padding={0.2}
                layout="horizontal"
                valueScale={{ type: "linear" }}
                indexScale={{ type: "band", round: true }}
                colors={{ scheme: "nivo" }}
                colorBy={"indexValue"}
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
