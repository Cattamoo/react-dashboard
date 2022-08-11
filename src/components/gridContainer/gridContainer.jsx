import React from 'react';
import styles from './gridContainer.module.css';
import GridItem from "../gridItem/gridItem";
import faker from "faker";

function randomArr(count, min = 0, max = 1000) {
	const arr = [];
	for(let i = 0; i < count; i++) {
		arr.push(faker.datatype.number({ min, max }))
	}
	return arr;
}

const GridContainer = ({ columns, rows }) => {
	const gridSize = {
		 gridTemplateColumns: Array(columns + 1).join(`1fr `)
		,gridTemplateRows: Array(rows + 1).join(`1fr `)
	};
	return (
		<div className={`${styles.gridContainer}`} style={gridSize}>
			<GridItem
				pos={{ x: 1, y: 1 }}
				size={{ w: 4, h: 4 }}
				color={`#f0f000`}
				bgColor={`#101020`}
				data={{
					dataType: '123'
					,contents: {
						title: 'Test'
						,labels: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23].map((value, index) => String(index).padStart(2, '0'))
						,value: [
							{
								label: '금일',
								type: 'line',
								borderColor: '#77ffff',
								borderWidth: 2,
								fill: false,
								data: randomArr(24, 25, 300),
							},
							{
								type: 'bar',
								label: '전일',
								backgroundColor: '#ffaaaa',
								data: randomArr(24, 25, 300),
							},
							{
								type: 'bar',
								label: '전주',
								backgroundColor: '#aaaaff',
								data: randomArr(24, 25, 300),
							},
						]
					}
				}} />
			<GridItem
				pos={{ x: 5, y: 1 }}
				size={{ w: 1, h: 2 }}
				data={{
					dataType: 'number'
					,contents: {
						title: '금일'
						,value: 183
					}
				}} />
			<GridItem
				pos={{ x: 5, y: 3 }}
				size={{ w: 1, h: 1 }}
				data={{
					dataType: 'number'
					,contents: {
						title: '전일'
						,value: 125
					}
				}} />
			<GridItem
				pos={{ x: 5, y: 4 }}
				size={{ w: 1, h: 1 }}
				data={{
					dataType: 'number'
					,contents: {
						title: '전주'
						,value: 156
					}
				}} />
		</div>
	);
};

export default GridContainer;