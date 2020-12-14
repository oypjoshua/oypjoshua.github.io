import React, { Component } from 'react';
import Counter from "./counter";

class Counters extends Component {
    state = {
        counters : [
            { id: 1 , value: 0 , tag: ['Sidwyn']},
            { id: 2 , value: 0 , tag: ['Siawyoung']},
            { id: 3 , value: 0 , tag: ['Jong']},
            { id: 4 , value: 0 , tag: ['Tiong']}
        ],
        form : ""
        ,
    };

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter };
        counters[index].value++;    
        this.setState({counters})
    }
    
    handleDecrease = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter };
        counters[index].value--;    
        this.setState({counters})
    }

    handleDelete = counterId => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters})
    };

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        })
        this.setState({ counters })
    };

    handleAdd = (event) => {
        if (event.key === 'Enter') {
            let inputValue = this.state.counters;
            inputValue.push({
                id: inputValue[inputValue.length-1].id + 1,
                value: 0,
                tag: [this.state.form],
            })
            this.setState({counters: inputValue})
            this.setState({form: ""})
        }
    };

    handleTextChange = (textChange) => {
        this.setState({form : textChange.target.value})
    }

    render() { 
        return (
        <div>
            <br></br>
            <br></br>
            <br></br> 
            <div>
                <label>Anything you want to add?</label>
                <br></br>
                <input type = 'text'
                value={this.state.form}
                onChange={this.handleTextChange}
                onKeyPress={this.handleAdd}
                ></input>   
            </div>            
            <button
                onClick = {this.handleReset}
                className = "btn btn-primary btn-sm m-2"
            > Reset </button>

            {this.state.counters.map(counter => (
            <Counter 
            key = {counter.id}
            onDelete = {this.handleDelete}
            onIncrement = {this.handleIncrement}
            onDecrease = {this.handleDecrease}
            id = {counter.id} 
            tag = {counter.tag} 
            counter = {counter}
            />
            ))};
        </div>
        );
    }
}
 
export default Counters;