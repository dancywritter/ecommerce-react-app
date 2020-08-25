import React from "react";
import {storage} from './firebase';

class AddItem extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      url: "",
      price: 0,
      star: 0,
      description: "",
      image:null
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleChangeForImage = (event) => {
       if(event.target.files[0]){
         const image = event.target.files[0];
         this.setState (()=>({image}))
       }
  }
  handleImageUpload = () => {
    const {image} = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on('state_changed',
    (snapshot) => {

    },
    (err)=>{
      console.log(err);
    },
    ()=>{
      storage.ref('images').child(image.name).getDownloadURL().then(url => {
        // console.log(url);
        this.setState({url});
      })
    })
  }

  submitHandler = (event) => {
    event.preventDefault();
    delete this.state.image;
    // console.log("Event:" , this.state);
    this.props.addItemToState(this.state);

    this.setState({
      name: "",
      url: "",
      price: 0,
      star: 0,
      description: "",
    });
  };

  render() {
    return (
      <div style={formContainer}>
        <p style={heading}>Add Product</p>
        <label htmlFor='image'>Image:</label>
        <div style={style.uploadImage}>
        
          <div>
          <input
            type='file'
            // name='imgURL'
            id='image'
            onChange={(event) => this.handleChangeForImage(event)}
            value={this.state.imgURL}
          />
          </div>
          <div>
          <button onClick={this.handleImageUpload}>Upload</button>
          </div>
        </div>

        <br />
        <br />
        
        <form style={formStyle} onSubmit={this.submitHandler}>
          <label htmlFor='name'>Item Name:</label>
          <input
            type='text'
            name='name'
            id='name'
            onChange={(event) => this.handleChange(event)}
            value={this.state.name}
          />
          <br />
          <br />

          <label htmlFor='price'>Price:</label>
          <input
            type='number'
            name='price'
            id='price'
            onChange={(event) => this.handleChange(event)}
            value={this.state.price}
          />
          <br />
          <br />

          {/* <label htmlFor='image'>Image URL:</label>
          <input
            type='file'
            // name='imgURL'
            id='image'
            onChange={(event) => this.handleChangeForImage(event)}
            value={this.state.imgURL}
          />
          <button onClick={this.handleImageUpload}>Upload</button> 
           <br />
          <br /> */}

          <label htmlFor='star'>Star:</label>
          <input
            type='number'
            name='star'
            id='star'
            onChange={(event) => this.handleChange(event)}
            value={this.state.star}
          />
          <br />
          <br />

          <label htmlFor='description'>Description:</label>
          <textarea
            name='description'
            id='description'
            onChange={(event) => this.handleChange(event)}
            value={this.state.description}
          />
          <br />
          <br />

          <button style={btn} type='submit'>
            Submit
          </button>
        </form>
      </div>
    );
  }
}


const style = {
  uploadImage:{
    margin: '10px 0px',
    display: 'flex'
  }
}
const formContainer = {
  marginTop: "15vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  AlignItems: "center",
  backgroundColor: "green",
  padding: "20px 150px 50px 150px",
};

const heading = {
  fontSize: "30px",
  textAlign: "center",
  color: "white",
  padding: "20px",
  fontWeight: "800",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  AlignItems: "center",
};

const btn = {
  fontSize: "25px",
  backgroundColor: "blue",
  color: "red",
  fontWeight: "500",
  cursor: "pointer",
};

export default AddItem;
