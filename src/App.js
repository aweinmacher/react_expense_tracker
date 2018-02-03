import React, { Component } from 'react';
import ExpenseForm from './expense-form';
import ExpenseDisplay from './expense-display';


class App extends Component {
  constructor(props) {
    super(props);
    this.addExpense = this.addExpense.bind(this);
    this.removeExpense = this.removeExpense.bind(this);
    this.state = { expenses: [] };
  }
  addExpense(expense) {
    this.setState({ expenses: this.state.expenses.concat(expense) }, function () {
      console.log(this.state.expenses)
    });
  }
  removeExpense(expenseIndex) {
    this.setState(
      (prevState) => {
        return {expenses: prevState.expenses.filter((item, i) => { return (i !== expenseIndex) })}
      }
    );
  }

  render() {
    return (
      <div className="App">
        <ExpenseForm addExpense={this.addExpense} btnText="Add Expense" />
        <ExpenseDisplay expenses={this.state.expenses} removeExpense={this.removeExpense} />
      </div>
    );
  }
}

export default App;
