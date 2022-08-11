import React, {useState} from 'react';
import styles from './zz.module.css';

const Zz = (props) => {
	const [text, setText] = useState('123');
	const [pwText, setPwText] = useState('123');
	const [isShow, setShow] = useState(false);
	const inputChangeHandler = (e) => {
		setText(e.currentTarget.value);
	}
	const inputPwChangeHandler = (e) => {
		setPwText(e.currentTarget.value);
	}
	const resetHandler = () => {
		setText(''); // 냠냠
		setPwText(''); // 빵먹는중에용
	}
	const showHandler = () => {
		setShow(!isShow);
	}
	return (
		<>
			<div className={styles.buttons}>
				<button onClick={resetHandler}>reset</button>
				<button onClick={showHandler}>isShow</button>
			</div>
			<input className={styles.inputBox} value={text} type={isShow ? 'text' : `password`} onChange={inputChangeHandler} />
			<input className={styles.inputBox} value={pwText} type={isShow ? 'text' : `password`} onChange={inputPwChangeHandler} />
			<span>{text === pwText ? '일치' : '불일치'}</span>
		</>
	);
}

export default Zz;