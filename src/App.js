import React from 'react';
import Item from './Item';
import './App.css';
import AddItem from './AddItem';
import CartItems from './CartItems';


class App extends React.Component{

  state = {
    items: [
      {
      name: 'Red Chair',
      imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSU2L0dIuvb_epcwY27wPcw1n1GyGsf6slr-w&usqp=CAU',
      price: 3000,
      star: 4,
      qty: 0,
      inCart: false,
      description: "This is the awesome chair"
      },
      {
      name: 'Office Seat',
      imgURL: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRAkshxv5FdXZ9pgG0VrZ0DuH1881dVxS13y3OFlH-KL68oALKkZyO0PvFJ7GkHymZ7PVGr6rUzyRtRZHp10KLh04jSLlsO208D7xz2NASqNkURYKqIZeM&usqp=CAc',
      price: 10000,
      star: 5,
      qty: 0,
      inCart: false,
      description: "This is the awesome Office Seat"
      }
    ],
    displayItems: true,
    displayCart: false,
    TotalItemInCart: 0,
    TotalItemInCartPrice: 0
  }

  

  callShowItems = () => {
    this.setState({
      displayItems: true,
      displayCart: false
    })
  }

  callShowCart = () => {
    this.setState({
      displayCart: true
    });
  }

  callAddItem = () => {
    this.setState({
      displayItems: false,
      displayCart: false
    })
  }

  // ADD NEW ITEM TO THE DATABASE
  addItemToState = item => {

    // console.log("NEw Item:", item);
    item.qty = 0;
    item.index = false;
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

  // if(item.inCart){
  //   this.state.TotalItemInCart += item.qty;
  //   this.state.TotalItemPrice += item.qty * item.price;
  // }
  // function For Adding item into card
  addItemToCart = index => {
    const newItems = this.state.items.map((item, i) => {
      if(i === index && !item.inCart) {
        this.state.TotalItemInCart += item.qty;
        this.state.TotalItemInCartPrice += item.qty * item.price;
        return {
          ...item,
          inCart: true
        }
      }
      return item;
    });

    this.setState({
      items: newItems
    },() => {
      // console.log("AFTER",this.state.items);
    });
    
  }

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

  onIncreasQuantity = index => {
    const newItems = this.state.items.map((item, i) =>{
      if(index === i) {
        this.state.TotalItemInCart += 1;
        this.state.TotalItemInCartPrice += Number(item.price);
        return {
            ...item,
            qty: item.qty+1
        }
      }
      return item
    });
    this.setState({
      items:newItems
    });
  }

  onDecreaseQuantity = index => {
    const newItems = this.state.items.map((item, i) =>{
      if(index === i && item.qty >= 1) {
        this.state.TotalItemInCart -= 1;
        this.state.TotalItemInCartPrice -= item.price;
        return {
            ...item,
            qty: item.qty-1
        }
      }
      return item
    });
    this.setState({
      items:newItems
    });
  }

  // FOR REMOVING ITEM FROM CART
  onDeleteProduct = index => {
    const newItems = this.state.items.map((item, i) =>{
      if(index === i) {
        this.state.TotalItemInCart -= item.qty;
        this.state.TotalItemInCartPrice -= item.qty * item.price;
        alert(`Wanted To Remove ${item.name} From Cart?`);
        return {
            ...item,
            qty: 1,
            inCart:false
        }
      }
      return item
    });
    this.setState({
      items:newItems
    });
  }

render(){

  const {items, displayItems, displayCart, TotalItemInCart, TotalItemInCartPrice} = this.state;
  return (
    <div className="App">
      <div className="header">
        <div>eCommerce</div>
        <div onClick={this.callShowItems} >Products</div>
        <div onClick={this.callAddItem}> add a product </div>
        <div onClick={this.callShowCart}>Cart ({TotalItemInCart})</div>
        <div onClick={this.callShowCart}>Total MRP: {TotalItemInCartPrice}</div>
      </div>
      <div className="main">
        {(displayCart) ? items.map((item, index) => {
          return (item.inCart)?<CartItems 
             key={index} 
             index={index} 
             item={item}
             onIncreasQuantity={this.onIncreasQuantity}
             onDecreaseQuantity={this.onDecreaseQuantity}
             onDeleteProduct={this.onDeleteProduct}
            /> : <br/>
        })  
        : 
        (displayItems) ? 
          items.map((item, index) => {
           return <Item key={index} 
              index={index} item={item} 
              deleteItemFromState={this.deleteItemFromState}
              editItemFromState={this.editItemFromState}
              addItemToCart={this.addItemToCart}
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
