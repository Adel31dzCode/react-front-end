import { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

const DoughnutChart = () => {
  const chartRef = useRef(null);         // المرجع إلى العنصر <canvas>
  const chartInstanceRef = useRef(null); // المرجع إلى الـ Chart نفسه

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // 🧹 تدمير الرسم القديم لو موجود
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    chartInstanceRef.current = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["MYSQL", "PHP", "JS", "CSS", "HTML", "REACT", "Laravel"],
        datasets: [{
          label: "Skill Power",
          data: [1000, 500, 6000, 8000, 8000, 7000, 7000],
          backgroundColor: [
            "rgba(0, 206, 209, 0.7)",
            "rgba(255, 165, 0, 0.7)",
            "rgba(255, 255, 0, 0.7)",
            "rgba(255, 99, 132, 0.7)",
            "rgba(255, 218, 185, 0.7)",
            "rgba(173, 216, 230, 0.7)",
            "rgba(240, 128, 128, 0.7)"
          ],
          borderColor: "#fff",
          borderWidth: 2,
          hoverOffset: 20
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "bottom"
          },
          title: {
            display: true,
            text: "My Skills Power In Languages"
          }
        }
      }
    });

    // 🧽 تنظيف عند تفكيك المكون
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []); // لو أضفت props للتحديث، حطها هنا

  return <canvas id="myPieChart" ref={chartRef} height="100" width="200" />;
};

export default DoughnutChart;
