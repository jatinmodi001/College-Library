import React,{Component} from 'react';
import Title from './Title';
import {Link,Redirect} from 'react-router-dom'
class EditBook extends Component
{
    constructor(props)
    {
        super(props);
        this.state= {
            edited:false
        }
    }
    handleSubmit = (event)=>
    {
        event.preventDefault();
        let newbook={
            name:event.target.name.value,
            author:event.target.author.value,
            price : event.target.price.value,
            desc : event.target.desc.value
        }
        fetch(`http://localhost:5000/edit/${this.props.book.id}`,{
            method:"PUT",
            headers:{
                'Content-Type':'application/json'
            },
            body : JSON.stringify(newbook)
        })
        .then(res=> res.json())
        .then(res=>{

            alert('Book Updated Successfully');
            this.setState({edited:true})
        })
    }
    render()
    {
        if(this.state.edited)
        {
            return <Redirect to="/books"/>
        }
        return <React.Fragment>
                <Title/>
                <div class="container mt-2">
                    <form onSubmit={this.handleSubmit}>
                        <div class="form-row">
                            <div class="form-group col-4 offset-1">
                                <label>Name of Book</label>
                                <input id='name' required defaultValue={this.props.book.name} class="form-control"></input>
                            </div>
                            <div class="form-group col-4 offset-1">
                                <label>Name of Author</label>
                                <input id='author' required defaultValue={this.props.book.author} class="form-control"></input>
                            </div>
                        </div>
                        <div class="form-row">
                            <div className='col-9 offset-1'>
                                    <label>Price</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Rs.</span>
                                        </div>
                                        <input id='price' required className="form-control" defaultValue={this.props.book.price} type='number' id="price"></input>
                                    </div>
                            </div>
                        </div>
                        <div class="form-row mt-3 mb-3">
                            <div className='col-9 offset-1'>
                                <div className="from-group">
                                    <label>Description (Optional)</label>
                                    <textarea className="p-4 form-control" id="desc" defaultValue={this.props.book.desc} ></textarea>
                                </div>
                            </div>
                        </div>
                        <input id='desc' className="btn btn-success offset-5" type="submit" value="Update Book"></input>
                    </form>
                </div>
        </React.Fragment>
    }
}

export default EditBook