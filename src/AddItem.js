import React from 'react';


class AddItem extends React.Component{

    constructor(){
        super();
        this.state = {
            name:"",
            imgURL:"",
            price:"",
            star:"",
            description:""
     
        }

    }
    

    handleChange (event) {
        this.setState( {
            [event.target.name]: event.target.value 
        })
      }

    submitHandler = event => {
        event.preventDefault();
        console.log("Event:" , this.state);

        this.props.addItemToState(this.state);

        this.setState({
            name:"",
            imgURL:"",
            price:"",
            star:"",
            description:""
        });
    }

    render(){
        return(
            <div style={formContainer}>
                <p style={heading}>Add Product</p>
                <form style={formStyle} onSubmit={this.submitHandler}>

                    <label htmlFor="name">Item Name:</label>
                    <input type="text" name="name" id="name"
                      onChange={event => this.handleChange(event)}
                      value ={this.state.name}
                    />
                   <br/><br/>

                    <label htmlFor="price">Price:</label>
                    <input type="number" name="price" id="price"
                      onChange={event => this.handleChange(event)}
                      value ={this.state.price}
                    />
                    <br/><br/>

                    <label htmlFor="image">Image URL:</label>
                    <input type="text" name="imgURL" id="image"
                       onChange={event => this.handleChange(event)}
                       value ={this.state.imgURL} 
                    />
                    <br/><br/>

                    <label htmlFor="star">Star:</label>
                    <input type="number" name="star" id="star"
                        onChange={event => this.handleChange(event)}
                        value ={this.state.star} 
                    />
                    <br/><br/>

                    <label htmlFor="description">Description:</label>
                    <textarea name="description" id="description"
                      onChange={event => this.handleChange(event)}
                      value ={this.state.description} 
                     />
                     <br/><br/>

                    <button style={btn} type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

const formContainer = {
    marginTop: '20px',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   AlignItems: 'center',
   backgroundColor: 'green',
   padding: '20px 150px 50px 150px'
}

const heading = {
    fontSize: '30px',
    textAlign: 'center',
    color: 'white',
    padding: '20px',
    fontWeight: '800'
}

const formStyle = {
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   AlignItems: 'center'
}

const btn = {
    fontSize: '25px',
    backgroundColor: 'blue',
    color: 'red',
    fontWeight: '500',
    cursor: 'pointer'
}

export default AddItem;