import React, { Component } from 'react'
import Title from './Title'
import { Link } from 'react-router-dom'
class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Title />
                <div className='container'>
                    <h1 className='display-3 text-center mt-5 mb-5'><b>Welcome To Library Portal</b></h1>
                    <div className='row'>
                        <div className='col-12 mt-5 text-center'>
                            <Link to='books'className=' shadow btn btn-success'>DISPLAY BOOKS</Link>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Home
