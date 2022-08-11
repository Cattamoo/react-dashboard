import React from 'react';
import styles from './gridItem.module.css';
import NumberChart from "../numberChart/numberChart";


import {
	Chart as ChartJS,
	LinearScale,
	CategoryScale,
	BarElement,
	PointElement,
	LineElement,
	Legend,
	Tooltip,
	LineController,
	BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
	LinearScale,
	CategoryScale,
	BarElement,
	PointElement,
	LineElement,
	Legend,
	Tooltip,
	LineController,
	BarController
);

// 위치, 사이즈, 안에들어가는값
const GridItem = ({pos, size, data, color = `#ff0`, bgColor = `#112`}) => {
	const itemSize = {
		 gridColumn: `${pos.x} / ${pos.x + size.w}`
		,gridRow: `${pos.y} / ${pos.y + size.h}`
	};
	const itemColor = {
		 color: color
		,backgroundColor: bgColor
		,border: `solid .2em ${color}`
	};

	return (
		<div className={styles.gridItem} style={{...itemSize, ...itemColor}}>
			{
				data.dataType === 'number'
				? <NumberChart
						title={data.contents.title}
						value={data.contents.value} />
				: <Chart type={`bar`}
					 options={{
						responsive: true,			// 반응형
						maintainAspectRatio: false,	// 비율유지
						plugins: {
							legend: { // 범례
								position: 'bottom', // as const,
							},
							title: {
								display: false,
								text: data.contents.title
							},
							tooltip: {
							}
						},
						color: itemColor.color,
						scales: {
							y: {
								ticks: {
									color: itemColor.color
								},
								grid: {
									color: `${itemColor.color}33`,
								}
							},
							x: {
								ticks: {
									color: itemColor.color,
									fontSize: 14
								},
								grid: {
									color: `${itemColor.color}33`,
								}
							}
						}
					}}
					data={{
						labels: data.contents.labels,
						datasets: data.contents.value,
					}} />
			}
		</div>
	);
};

export default GridItem;