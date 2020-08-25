import React from 'react';
import Item from './Item';
import './App.css';
import AddItem from './AddItem';
import CartItems from './CartItems';
import * as firebase from 'firebase'; 


class App extends React.Component{

  constructor() {
    super();
     this.state = {
      items: [],
      displayItems: true,
      displayCart: false,
      loading: true
    }
    this.db = firebase.firestore()
}

  componentDidMount() {
    this.db
    .collection('items')
  //  .orderBy('title','asc')
    .onSnapshot((snapshot) => {
     const items = snapshot.docs.map((doc) => {
       const data = doc.data();
       data['id'] = doc.id;
       return data;
     })
 
     this.setState({
       items:items,
       loading: false
     });
    });
  }

  
// FOR SHOWING PRODUCTS
  callShowItems = () => {
    this.setState({
      displayItems: true,
      displayCart: false
    })
  }

  // FOR SHOWING CART OF PRODUCTS
  callShowCart = () => {
    this.setState({
      displayCart: true
    });
  }

  // FOR SHOWING FORM FOR ADDING PRODUCTS
  callAddItem = () => {
    this.setState({
      displayItems: false,
      displayCart: false
    })
  }

  // ADD NEW ITEM TO THE DATABASE
  addItemToState = item => {

    item.qty = 0;
    item.inCart = false;

    this.db
    .collection('items')
    .add(item)
    .then(docRef => {
      console.log("Product Added: ", docRef)
    })
    .catch(err => {
      console.log("Error: ", err);
    })
    // const newItems = this.state.items.concat(item);

  }

  // FOR DELETING PRODUCT FROM PRODUCT LIST
  deleteItemFromState = index => {
    const {items} = this.state;
    const docRef = this.db.collection('items').doc(items[index].id);

    if(items[index].inCart) {
      this.onDeleteProduct(index);
    }

    docRef
     .delete()
     .then(()=>{
       console.log("Deleted Product from Database");
     })
     .catch((err)=>{
       console.log("Error in Deleting product From Database", err);
     })
    // const newItems = this.state.items.filter((item, i) => {

    //   return (index === i)? false : true;
    // });

    // this.setState({
    //   items: newItems
    // });
  };

  // function For Adding item into card
  addItemToCart = index => {

    const {items} = this.state;
    const docRef = this.db.collection('items').doc(items[index].id);

    docRef
      .update({
        inCart : true,
        qty:1
      })
      .then(() => {
        console.log("Product Added to Cart !");
      })
      .catch((err) => {
        console.log(`Error in Adding product into Cart ${err}`);
      })
    // const newItems = this.state.items.map((item, i) => {
    //   if(i === index && !item.inCart) {
    //     this.state.TotalItemInCart += item.qty;
    //     this.state.TotalItemInCartPrice += item.qty * item.price;
    //     return {
    //       ...item,
    //       inCart: true
    //     }
    //   }
    //   return item;
    // });

    // this.setState({
    //   items: newItems
    // },() => {
    //   // console.log("AFTER",this.state.items);
    // });
    
  }

  // FOR EDITING PRODUCTS DETAILS
  editItemFromState = (index, newItem) => {
    const {items} = this.state;
    const docRef = this.db.collection('items').doc(items[index].id);

    docRef
      .update({
        ...items[index],
        name: newItem.newName,
        price:newItem.newPrice,
        star:newItem.newStar,
        description:newItem.newDescription
      })
      .then(() => {
        console.log("Updated Sucessfully");
      })
      .catch((error) => {
        console.log("Error in updating Product :", error);
      })
    // const newItems = this.state.items.map((item, i) => {
    //   if(index === i) {
    //     alert(`Product Named: ${item.name} has been modified!`);
    //     return {
    //       ...item,
    //       name: newItem.newName,
    //       price: newItem.newPrice,
    //       star: newItem.newStar,
    //       description: newItem.newDescription
    //     };
    //   }
    //   return item;
    // });

    // this.setState({
    //   items: newItems
    // });
    
  }

  // FOR INCREASE PRODUCT QUANTITY IN CARD
  onIncreasQuantity = index => {
    const {items} = this.state;
    const docRef = this.db.collection('items').doc(items[index].id);

    docRef
      .update({
        qty: items[index].qty + 1
      })
      .then(() => {
        console.log("Updated Sucessfully");
      })
      .catch((error) => {
        console.log("Error i updating Product :", error);
      })
    // const newItems = this.state.items.map((item, i) =>{
    //   if(index === i) {
    //     this.state.TotalItemInCart += 1;
    //     this.state.TotalItemInCartPrice += Number(item.price);
    //     return {
    //         ...item,
    //         qty: item.qty+1
    //     }
    //   }
    //   return item
    // });
    // this.setState({
    //   items:newItems
    // });
  }

   // FOR DECREASING PRODUCT QUANTITY IN CARD
  onDecreaseQuantity = index => {
    const {items} = this.state;
    const docRef = this.db.collection('items').doc(items[index].id);

    docRef
      .update({
        qty: items[index].qty - 1
      })
      .then(() => {
        console.log("Updated Sucessfully");
      })
      .catch((error) => {
        console.log("Error i updating Product :", error);
      })
    // const newItems = this.state.items.map((item, i) =>{
    //   if(index === i && item.qty >= 1) {
    //     this.state.TotalItemInCart -= 1;
    //     this.state.TotalItemInCartPrice -= item.price;
    //     return {
    //         ...item,
    //         qty: item.qty-1
    //     }
    //   }
    //   return item
    // });
    // this.setState({
    //   items:newItems
    // });
  }

  // FOR REMOVING ITEM FROM CART
  onDeleteProduct = index => {
    const {items} = this.state;
    const docRef = this.db.collection('items').doc(items[index].id);

    docRef
      .update({
        inCart: false,
        qty: 0
      })
      .then(() => {
        console.log("Removed From Cart Sucessfully");
      })
      .catch((error) => {
        console.log("Error in removing Product from Cart:", error);
      })
    // const newItems = this.state.items.map((item, i) =>{
    //   if(index === i) {
    //     this.state.TotalItemInCart -= item.qty;
    //     this.state.TotalItemInCartPrice -= item.qty * item.price;
    //     alert(`Wanted To Remove ${item.name} From Cart?`);
    //     return {
    //         ...item,
    //         qty: 1,
    //         inCart:false
    //     }
    //   }
    //   return item
    // });
    // this.setState({
    //   items:newItems
    // });
  }
  ascendingOrder = () => {
    const newItems = this.state.items.map((val) => {
      return val;
    });
    newItems.sort(function(a, b){return a.price - b.price});
    this.setState({
      items:newItems
    });
  }

  descendingOrder = () => {
    const newItems = this.state.items.map((val) => {
      return val;
    });
    newItems.sort(function(a, b){return b.price - a.price});
    this.setState({
      items:newItems
    });
  }

  TotalItemInCart =() => {
    let count = 0;
    this.state.items.forEach((item)=>{
      count += item.qty;
    });

    return count;
  }

  TotalItemInCartPrice =() => {
    let totalPrice = 0;
    this.state.items.forEach((item)=>{
      totalPrice += item.qty * item.price;
    });

    return totalPrice;
  }

render(){

  const {items, displayItems, displayCart, loading} = this.state;
  return (
    <div className="App">
      <div className="header">
        <div>
          <a href="https://github.com/rks107/ecommerce-react-app.git">GitHub Link</a>
        </div>
        <div onClick={this.callShowItems} >Products</div>
        <div onClick={this.callAddItem}> add a product </div>
        <div onClick={this.callShowCart}>Cart ({this.TotalItemInCart()})</div>
        <div onClick={this.callShowCart}>Total MRP: {this.TotalItemInCartPrice()}</div>
      </div>
      <div className="main">
        <div className="order">
          <h4>Sort:</h4>
          <button onClick={this.ascendingOrder}>ascending</button>
          <button onClick={this.descendingOrder}>descending</button>
        </div>
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
      {loading && <h1> Loading Products...</h1>}
    </div>
  );
}
  
}

export default App;
