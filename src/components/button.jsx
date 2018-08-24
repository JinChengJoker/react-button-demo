import React, { Component } from 'react'
import './button.css'

class Button extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false,
            relativeX: 0,
            relativeY: 0
        }
    }
    render() {
        return (
            <button className="btn" onClick={this.animation.bind(this)} ref={(btn) => { this.btnElement = btn }}>
                <span className="value">{this.props.value}</span>
                {this.state.active
                    ? <span className="circle" style={{ left: this.state.relativeX, top: this.state.relativeY }} onAnimationEnd={this.hide.bind(this)} />
                    : ''
                }
            </button>
        )
    }
    animation(e) {
        let { x, y } = this.btnElement.getBoundingClientRect()
        let { clientX, clientY } = e
        let relativeX = clientX - x - 5
        let relativeY = clientY - y - 5
        this.setState({
            active: true,
            relativeX: relativeX,
            relativeY: relativeY
        })
        this.props.onClick && this.props.onClick.call(undefined)
    }
    hide() {
        this.setState({
            active: false
        })
    }
}

export default Button