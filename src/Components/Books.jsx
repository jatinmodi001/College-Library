import React, { Component } from 'react'
import Title from './Title';
import { Link } from 'react-router-dom';
class Books extends Component {
    constructor() {
        super();
        this.state = { books: [] }
    }
    deleteBook = (id)=> {
        console.log(id);
        fetch(`http://localhost:5000/deleteBook/${id}`,{
            method:"DELETE",
            headers:{
                'Content-Type': 'applications/json'
            }
        })
        .then(res=>{
            this.componentDidMount();
            return res.json();
        })
    }

    componentDidMount() {
        fetch('http://localhost:5000/books')
            .then(res => res.json())
            .then(res => {
                console.log(res);
                this.setState({ books: res });
            })
    }
    sendBook = (book)=>{
        console.log('DEBUG');
        this.props.editBook(book);
    }
    render() {
        return (<React.Fragment><Title />
            <div className='container'>
                <table className=' shadow table table-light mt-2 table-responsive-sm table-responsive-lg table-responsive-md table-hover table-bordered'>
                    <thead className="thead-dark">
                        <tr>
                            <th>Sr No.</th>
                            <th>Name</th>
                            <th>Author</th>
                            <th>Price</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.books.map((key, index) => {
                            return <tr>
                                <td>{index + 1}</td>
                                <td>{key.name}</td>
                                <td>{key.author}</td>
                                <td><i className="fas fa-rupee-sign"></i> {key.price}</td>
                                <td><Link to="/edit"><button className='btn btn-info' onClick={()=>this.sendBook(key)}>Edit</button></Link> <button className='btn btn-danger' onClick={()=>this.deleteBook(key.id)} >Delete</button></td>
                            </tr>
                        }
                        )}
                    </tbody>
                </table>
                <Link to='/addbook' className='btn btn-lg btn-success mb-3 mt-3 offset-5 shadow'>Add Book</Link>
            </div>
        </React.Fragment>
        )   
    }
    
}

export default Books
