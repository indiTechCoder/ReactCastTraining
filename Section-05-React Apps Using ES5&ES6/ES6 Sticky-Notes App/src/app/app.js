
import ReactDOM from 'react-dom';
import React,{ Component } from 'react';

import '../../style/style.css';
import MainContainer from './containers/mainContainer';




export default class App extends Component {
  render() {
    return (
        <MainContainer></MainContainer>
    );
  }
}

ReactDOM.render(<App /> , document.getElementById("app"));
