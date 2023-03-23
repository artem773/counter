import './App.css';
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: this.props.currentValue
    }
  }

  incCounter = () => {
    if (this.state.currentValue < 50) {
      this.setState(state => ({
        currentValue: state.currentValue + 1
      }))
    } else {
      this.setState({ currentValue: 50 })
    }
  }

  decCouner = () => {
    if (this.state.currentValue > -50) {
      this.setState(state => ({
        currentValue: state.currentValue - 1
      }))
    } else {
      this.setState({ currentValue: -50 })
    }
  }

  resCounter = () => {
    if (this.state.currentValue) {
      this.setState({ currentValue: this.props.currentValue })
    }
  }

  rndCounter = () => {
      this.setState({currentValue: +(Math.random() * (50 - -50) + -50).toFixed(0)})
  }
  /*  function getRandomArbitrary(min, max) { 
        return Math.random() * (max - min) + min; //getting random between two values
  } */

  render() {
    return (
      <div className="app">
        <div className="counter">{this.state.currentValue}</div>
        <div className="controls">
          <button onClick={this.incCounter}>INC</button>
          <button onClick={this.decCouner}>DEC</button>
          <button onClick={this.rndCounter}>RND</button>
          <button onClick={this.resCounter}>RESET</button>
        </div>
      </div>
    )
  }
}
// 1) Начальное значение счетчика должно передаваться через props
// 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит
// 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния
// 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов

export default App;
