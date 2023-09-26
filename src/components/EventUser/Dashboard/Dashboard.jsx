import React, { useRef } from "react";
import HeaderEvent from "./HeaderEvent/HeaderEvent";
import HeaderDash from "./HeaderDash";
import LineChart from "./Charts/LineChart/LineChart";
import PieChart from "./Charts/PieChart/PieChart";
import { Box, Button } from "@chakra-ui/react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function Dashboard() {
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

  const handleDownloadJPG = () => {
    const input = dashboardRef.current;

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/jpeg", 1.0);
      const link = document.createElement("a");
      link.href = imgData;
      link.download = "dashboard.jpg";
      link.click();
    });
  };

  return (
    <div>
      <HeaderDash />
      <HeaderEvent />
      <Box padding={5} backgroundColor="#e6dfcf" ref={dashboardRef}>
        <Box marginBottom={5}>
          <LineChart />
        </Box>
        <Box marginBottom={5}>
          <PieChart />
        </Box>
        <Box marginBottom={5}>
          <PieChart />
        </Box>
      </Box>
      <Box display="flex" justifyContent="center">
      <Button  width="48%" height="32px" borderRadius={6} onClick={handleDownloadPDF}>
          Descargar como PDF
        </Button>
        <Button  width="48%" height="32px" borderRadius={6} onClick={handleDownloadJPG}>
          Descargar como JPG
        </Button>
      </Box>
    </div>
  );
}

export default Dashboard;
