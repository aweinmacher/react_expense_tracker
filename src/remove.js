import React, { Component } from 'react';

function Remove(props) {
    return (
        <button type="button" onClick={props.removeExpense}>Remove</button>
    );
}

export default Remove;