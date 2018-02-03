import React, { Component } from 'react';
import SingleInput from './single-input';

class ExpenseForm extends Component {
    constructor(props) {
        super(props);
        this.state = { amt: 0, cat: "" , descr: "" };
        this.changeExpense = this.changeExpense.bind(this);
        this.onBtnClick = this.onBtnClick.bind(this);
        console.log(this.state);
    }
    changeExpense(e) {
        this.setState({ [e.target.id]: e.target.value });
        // how to write with callback?
    }
    onBtnClick() {
        this.props.addExpense(this.state);
        this.setState({ amt: 0, cat: '', descr: '' }, () => {
            console.log(this.state);
        });
    }
    render() {
        return (
            <div>
                <form>
                    <SingleInput id="amt" type="number" placeholder="$" content={this.state.amt} controlFunc={this.changeExpense} />
                    <SingleInput id="cat" type="text" placeholder="Category" content={this.state.cat} controlFunc={this.changeExpense} />
                    <SingleInput id="descr" type="text" placeholder="Description" content={this.state.descr} controlFunc={this.changeExpense} />
                    <button type="button" onClick={this.onBtnClick}>{this.props.btnText}</button>
                </form>
            </div>
        );
    }
}

export default ExpenseForm;