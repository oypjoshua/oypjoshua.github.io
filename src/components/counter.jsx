import React, { Component } from 'react';

class Counter extends Component {
    state = {
        tags : [this.props.tag] 
    };

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;
        return <ul> {this.state.tags.map(tag => <li key = {tag}>{ tag }</li>)} </ul>
        }

    render() {
        return (
        <div>
            <span 
            style = {{fontSize : 18}} 
            className = {this.getBadgeClasses()} >
                {this.formatCount()}
            </span>
            <br></br>
            <button
            onClick = {() => this.props.onIncrement(this.props.counter)}
            className = "btn btn-secondary btn-sm m-2">
                Increase
            </button>
            <button
            onClick = {() => this.props.onDecrease(this.props.counter)}
            className = "btn btn-secondary btn-sm m-2">
                Decrease
            </button>
            <button
            onClick = {() => this.props.onDelete(this.props.id)}
            className="btn btn-danger btn-sm m-2">
                Delete
            </button>
            {this.renderTags()}
        </div>
        )
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const  value  = this.props.counter.value;
        return value === 0 ? 'zero' : value;
    }

}
export default Counter;