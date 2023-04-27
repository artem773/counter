import { useState } from 'react';
import './App.css';


const App = (props) => {

    const [currentValue, setCurrenValue] = useState(props.currentValue);

    function incCounter() {
        if (currentValue < 50) {
            setCurrenValue(currentValue => currentValue + 1)
        }
    }

    function decCouner() {
        if (currentValue > -50) {
            setCurrenValue(currentValue => currentValue - 1)
        }
    }

    function resCounter() {
        if (currentValue) {
            setCurrenValue(props.currentValue)
        }
    }
    function rndCounter() {
        setCurrenValue((+(Math.random() * (50 - -50) + -50).toFixed(0)))
    }

    return (
        <div className="app">
            <div className="counter">{currentValue}</div>
            <div className="controls">
                <button onClick={incCounter}>INC</button>
                <button onClick={decCouner}>DEC</button>
                <button onClick={rndCounter}>RND</button>
                <button onClick={resCounter}>RESET</button>
            </div>
        </div>
    )
}

export default App;