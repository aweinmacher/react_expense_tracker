import React, { Component } from 'react';
import ExpenseForm from './expense-form';
import ExpenseDisplay from './expense-display';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { expenses: [] };
    this.addExpense = this.addExpense.bind(this);
    this.removeExpense = this.removeExpense.bind(this);
  }
  addExpense(expense) {
    this.setState({ expenses: this.state.expenses.concat(expense) }, function () {
      console.log(this.state.expenses)
    });
  }
  removeExpense(expense) {
    var temp = this.state.expenses.slice();
    temp.splice(expense.myKey, 1);
    this.setState({ expenses: temp }, function () {
      console.log(this.state.expenses)
    });
  }
  render() {
    return (
      <div className="App">
        <ExpenseForm addExpense={this.addExpense} />
        <ExpenseDisplay expenses={this.state.expenses} />
      </div>
    );
  }
}

export default App;
