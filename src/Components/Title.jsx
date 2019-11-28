import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class Title extends Component {
    constructor()
    {
        super();
        this.state={menu:false};
        this.toggle = this.toggle.bind(this);
    }
    toggle()
    {
        
        this.setState({menu:!this.state.menu})
    }
    render() {
        const show = this.state.menu ? "show" : "none";
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <Link className="navbar-brand text-white" to="/"><i className='fas fa-book-reader'></i> College Library</Link>
                <button className="navbar-toggler" type="button" onClick={this.toggle}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={"collapse navbar-collapse "+show}>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link text-light" to="/"><i className="fas fa-home"></i> Home</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link text-light" to="/books"><i className="fas fa-book"></i> Books</Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-success my-2 my-sm-0" type="submit"><i className='fas fa-search'></i></button>
                    </form>
                </div>
            </nav>
        )
    }
}

export default Title
