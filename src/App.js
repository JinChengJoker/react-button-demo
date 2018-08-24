import React, { Component } from 'react';
import './App.css';
import Button from './components/button'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Button value="按钮" onClick={this.xxx.bind(this)} />
                <Button value="按钮" />
            </div>
        );
    }
    xxx() {
        console.log('hi')
    }
}

export default App;
