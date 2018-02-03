import React, { Component } from 'react';
import Expense from './expense'

class ExpenseDisplay extends Component {
    renderExpenses() {
        return  this.props.expenses.map((expense, i) => <Expense key={i} index={i} {...expense} removeExpense={this.props.removeExpense} />);
    };
    render() {
        return (
            <ul>
                {this.renderExpenses()}
            </ul>
        );
    }
}

export default ExpenseDisplay;