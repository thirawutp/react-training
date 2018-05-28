// import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import rootReducer from './reducers'
const store = createStore(rootReducer)

const withCounter = ({ text }) => (Component) => {
  return class extends React.Component {
    state = {
      count: 0
    }
  
    handleCount = () => {
      this.setState({ count: this.state.count+1 })
    }

    render() {
      return <Component onClick={this.handleCount} count={this.state.count} text={text}/>
    }
  }
}

const Button = props => {
  return <button onClick={props.onClick}>button: {props.count}</button> 
}
const Div = props => {
  return <div onClick={props.onClick}>button: {props.count}</div> 
}

const withCounterWithHello = withCounter({ text: 'hello' })(Div)

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
, document.getElementById('root'))
