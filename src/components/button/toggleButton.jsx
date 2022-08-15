import React from 'react';
import styles from './toggleButton.module.css';

const ToggleButton = ({ toggle, setToggle }) => {
	return (
		<div
			className={`${styles.toggleButton} ${ toggle && styles.toggleOn}`}
			onClick={setToggle}>
			<div className={styles.toggle} />
		</div>
	);
};

export default ToggleButton;