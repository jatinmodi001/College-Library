import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './Home'
import Books from './Books'
import AddBook from './addBook'
import EditBook from './editBook'

class MainPage extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            editBook : []
        }
    }
    editBook = (book)=>{
        this.setState({editBook:book})
    }
    render() {
        return (
            <React.Fragment>
                <Router>
                    <Route exact path="/" render={(props)=><Home/>}/>
                    <Route path="/books" render={(props)=><Books editBook={(book)=>this.editBook(book)}/>}/>
                    <Route path="/edit" render={(props)=><EditBook book={this.state.editBook}/>}/>
                    <Route path="/addbook" render={(props)=><AddBook/>}/>
                </Router>
            </React.Fragment>
        )
    }
}

export default MainPage
