import React from 'react';
import Item from './Item';
import './App.css';
import AddItem from './AddItem';


class App extends React.Component{

  state = {
    items: [
      {
      name: 'Red Chair',
      imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSU2L0dIuvb_epcwY27wPcw1n1GyGsf6slr-w&usqp=CAU',
      price: '3000',
      star: '4',
      description: "This is the awesome chair"
      },
      {
      name: 'Office Seat',
      imgURL: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRAkshxv5FdXZ9pgG0VrZ0DuH1881dVxS13y3OFlH-KL68oALKkZyO0PvFJ7GkHymZ7PVGr6rUzyRtRZHp10KLh04jSLlsO208D7xz2NASqNkURYKqIZeM&usqp=CAc',
      price: '10000',
      star: '5',
      description: "This is the awesome Office Seat"
      }
    ],
    displayItems: true
  }

  callShowItems = () => {
    this.setState({
      displayItems: true
    })
  }

  callAddItem = () => {
    this.setState({
      displayItems: false
    })
  }

  addItemToState = item => {

    // console.log("NEw Item:", item);
    const newItems = this.state.items.concat(item);

    this.setState({
      items: newItems
    });
  }

  deleteItemFromState = index => {
    const newItems = this.state.items.filter((item, i) => {

      return (index === i)? false : true;
    });

    this.setState({
      items: newItems
    });
  };

  editItemFromState = (index, newItem) => {
    const newItems = this.state.items.map((item, i) => {
      if(index === i) {
        return {
          ...item,
          name: newItem.newName,
          price: newItem.newPrice,
          star: newItem.newStar,
          description: newItem.newDescription
        };
      }
      return item;
    });

    console.log("UPDATED ITEM", newItems);
    this.setState({
      items: newItems
    });
    
  }


render(){
  return (
    <div className="App">
      <div className="header">
        <div>eCommerce</div>
        <div onClick={this.callShowItems} >Products</div>
        <div onClick={this.callAddItem}> add a product </div>
      </div>
      <div className="main">
        {(this.state.displayItems) ? 
          this.state.items.map((item, index) => {
           return <Item key={index} 
              index={index} item={item} 
              deleteItemFromState={this.deleteItemFromState}
              editItemFromState={this.editItemFromState}
            /> ;
          }) 
        : <AddItem 
            addItemToState = {this.addItemToState} 
          /> 
        }
      </div>
    </div>
  );
}
  
}

export default App;
