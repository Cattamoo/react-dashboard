import React from 'react';
import styles from './numberChart.module.css';

const NumberChart = ({title, value}) => {
	return (
		<div className={styles.chart}>
			<span className={styles.title}>{title}</span>
			<span className={styles.value}>{value}</span>
		</div>
	);
};

export default NumberChart;