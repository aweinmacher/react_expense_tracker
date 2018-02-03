import React, { Component } from 'react';
import Remove from './remove';

class Expense extends Component {
    removeExpense = () =>{
        this.props.removeExpense(this.props.index)
    }
    render() {
        const text = `$${this.props.amt}, ${this.props.cat}, ${this.props.descr}`;
        return (
            <div>
                {text}
                <Remove removeExpense={this.removeExpense} />
            </div>
        );
    }
}

export default Expense;