import React, { Component } from 'react'
import Title from './Title'
import {Redirect} from 'react-router-dom'
class AddBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            author: '',
            price: '',
            desc: '',
            added:false
        }
        this.submitHandle = this.submitHandle.bind(this);
    }
    submitHandle(event) {
        event.preventDefault();
        let newBook = {
            name: event.target.name.value,
            author: event.target.author.value,
            price: event.target.price.value,
            desc:event.target.desc.value
        }
        fetch('http://localhost:5000/addBook', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newBook)
        })
            .then(res =>{
                return res.json()

            })
            .then(res => {
                alert("New Book added successfully");
                this.setState({added:true})
            })
            .catch(err=>
            {
                console.log(err);
            })
    }
    render() {
        if(this.state.added)
        {
            return <Redirect to="/books"/>
        }
        return (
            <React.Fragment>
                <Title />
                <div className="container">
                    <form className="m-3" onSubmit={this.submitHandle}>
                        <div className="form-row">
                            <div className="col-5">
                                <div className="form-group">
                                    <label>Name of book</label>
                                    <input autoFocus required className="form-control" id='name' ></input>
                                </div>
                            </div>
                            <div className="col-5">
                                <div className="form-group">
                                    <label>Name of Author</label>
                                    <input required className="form-control" id='author'></input>
                                </div>
                            </div>
                        </div>
                        <div className='form-row'>
                            <div className='col-10'>
                                <label>Price</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Rs.</span>
                                    </div>
                                    <input required className="form-control" type='number' id="price"></input>
                                </div>
                            </div>
                        </div>
                        <div className='form-row mt-3'>
                            <div className='col-10'>
                                <div className="from-group">
                                    <label>Description (Optional)</label>
                                    <textarea className="form-control" id="desc" ></textarea>
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <input className='btn btn-success' type='submit' value='Submit'></input>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default AddBook
