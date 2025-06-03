import { useEffect, useRef } from "react";
import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import { TooltipComponent, LegendComponent, GridComponent, AxisPointerComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

// سجل المكونات مع echarts
echarts.use([
  LineChart,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  AxisPointerComponent,
  CanvasRenderer  // مهم جداً تسجيل الـ Renderer
]);

export default function MyLineChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    const myChart = echarts.init(chartRef.current, 'dark');

    const option = {
      backgroundColor: 'transparent',
      tooltip: { trigger: 'axis' },
      legend: { data: ['Laravel', 'React', 'Mysql', 'Bootstrap', 'PHP'] },
      grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
      toolbox: { feature: { saveAsImage: {} } },
      xAxis: { type: 'category', boundaryGap: false, data: ['2020', '2021', '2022', '2023', '2024', '2025', '2026'] },
      yAxis: { type: 'value' },
      series: [
        { name: 'Laravel', type: 'line', stack: 'Total', data: [100, 40, 100, 100, 300, 1050, 2010] },
        { name: 'React', type: 'line', stack: 'Total', data: [220, 182, 191, 234, 290, 330, 310] },
        { name: 'Mysql', type: 'line', stack: 'Total', data: [150, 232, 201, 20, 190, 1030, 410] },
        { name: 'Bootstrap', type: 'line', stack: 'Total', data: [1500, 332, 301, 3334, 390, 330, 320] },
        { name: 'PHP', type: 'line', stack: 'Total', data: [820, 932, 2001, 934, 590, 1330, 1320] },
      ]
    };

    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, []);

  return <div ref={chartRef} id="main_interface_chart" />;
}
