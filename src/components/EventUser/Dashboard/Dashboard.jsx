import { useRef } from "react";
import { Box, Button } from "@chakra-ui/react";
import HeaderEvent from "./HeaderEvent/HeaderEvent";
import HeaderDash from "./HeaderDash";
import LineChart from "./Charts/LineChart/LineChart";
import PieChart from "./Charts/PieChart/PieChart";
import BarChart from "./Charts/BarChart/BarChart"; // Asegúrate de importar tu componente BarChart
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import useDashboard from "../../../hooks/useDashboard";
import HeaderRender from "../../Header/HeaderRender/HeaderRender";

function Dashboard() {
    useDashboard();
    const dashboardRef = useRef(null);

    const handleDownloadPDF = () => {
        const input = dashboardRef.current;

        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL("image/jpeg", 1.0);
            const pdf = new jsPDF("landscape", "mm", "a4");
            pdf.addImage(imgData, "JPEG", 10, 10, 190, 100);
            pdf.save("dashboard.pdf");
        });
    };

    const handleShare = () => {
        const input = dashboardRef.current;

        html2canvas(input).then((canvas) => {
            canvas.toBlob((blob) => {
                const file = new File([blob], "dashboard.jpg", { type: "image/jpeg" });
                const shareData = {
                    files: [file],
                };

                if (navigator.share) {
                    navigator
                        .share(shareData)
                        .then(() => {
                            console.log("Archivo compartido con éxito");
                        })
                        .catch((error) => {
                            console.error("Error al compartir archivo:", error);
                        });
                } else {
                    console.log("La API de Web Share no es compatible en este navegador.");
                }
            }, "image/jpeg");
        });
    };

    return (
        <div>
            <HeaderRender />
            <HeaderEvent />
            <Box padding={5} backgroundColor="#e6dfcf" ref={dashboardRef}>
                <Box marginBottom={5}>
                    <LineChart />
                </Box>
                <Box marginBottom={5}>
                    <PieChart />
                </Box>
                <Box marginBottom={1}>
                    <BarChart />
                </Box>
            </Box>
            <Box display="flex" justifyContent="center" backgroundColor="#e6dfcf" width="100%">
                <Button width="42%" height="32px" borderRadius={6} onClick={handleShare} backgroundColor="#f2f2f2" color="#cb7862">
                    Compartir
                </Button>
                <Button width="42%" height="32px" borderRadius={6} onClick={handleDownloadPDF} backgroundColor="#cb7862" color="white" marginLeft={5}>
                    Descargar PDF
                </Button>
            </Box>
        </div>
    );
}

export default Dashboard;
