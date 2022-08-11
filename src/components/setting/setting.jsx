import React, {useState} from 'react';
import styles from './setting.module.css';

const Setting = ({ bgColor, setBgColor }) => {
	const [open, setOpen] = useState(false);
	const openHandler = () => {
		setOpen(!open);
	}
	const onColorChangeHandler = (e) => {
		setBgColor(e.currentTarget.value);
	}

	return (
		<div>
			<button
				className={`${styles.button} ${open ? styles.closeButton : styles.openButton}`}
				onClick={openHandler}>
				<img src={`/image/setting.png`}  alt={`setting`} />
			</button>
			{
				open &&
				<div className={styles.setting}>
					<h2 className={styles.title}>Setting</h2>
					<h3>background color</h3>
					<input type={`color`} value={bgColor} onChange={onColorChangeHandler} />
				</div>
			}

		</div>
	);
};

export default Setting;