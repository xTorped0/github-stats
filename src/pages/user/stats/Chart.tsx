import type { TypeRepoStats } from '@/types/user.types';
import { useMemo } from 'react';
import ApexChart from "react-apexcharts";

interface ChartProps {
	data: TypeRepoStats;
}

const Chart = (props: ChartProps) => {
	const { data } = props;

	const summary = useMemo(() => {
		const sumObject = data.reduce((acc, item) => {
			Object.entries(item).forEach(([key, value]) => {
				if (acc[key]) acc[key] += value;
				else acc[key] = value;
			});
			return acc;
		}, {});
		return Object.entries(sumObject).map(([name, value]) => ({ name, value }));
	}, [data]); 
	

	const options = {
    labels: summary.map(item => `${item.name}`),
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: '100%'
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };

  const series = summary.map(item => item.value);

	return (
		<ApexChart options={options} series={series} type="pie" width={380} />
	);
};

export default Chart;