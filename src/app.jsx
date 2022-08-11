import styles from './app.module.css';
import GridContainer from "./components/gridContainer/gridContainer";
import Setting from "./components/setting/setting";
import {useState} from "react";

function App() {
    const [bgColor, setBgColor] = useState('#ffffff');
    const setBackgroundColor = (color) => {
        setBgColor(color);
    }
    return (
        <div className={styles.app} style={{backgroundColor: bgColor}}>
            <GridContainer columns={5} rows={4} />
            <Setting bgColor={bgColor} setBgColor={setBackgroundColor} />
        </div>
    );
}

export default App;
