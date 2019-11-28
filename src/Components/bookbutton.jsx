import React, { Component } from 'react'
import AddBook from './addBook'

export class bookbutton extends Component {
    render() {
        return (<React.Fragment>
            <button className="btn btn-lg btn-success">Add a new book</button>
            <AddBook></AddBook>
            </React.Fragment>
        )
    }
}

export default bookbutton
