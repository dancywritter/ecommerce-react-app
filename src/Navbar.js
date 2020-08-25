import React from "react";

class Navbar extends React.Component {
  render() {
    const {
      getItemCount,
      getTotalMRP,
      callShowItems,
      callAddItem,
      callShowCart,
    } = this.props;
    return (
      <div className='header'>
        <div>
          <a href='https://github.com/rks107/ecommerce-react-app.git' target="_blank">
            GitHub Link
          </a>
        </div>
        <div onClick={callShowItems} style={{cursor: 'pointer'}}>Products</div>
        <div onClick={callAddItem} style={{cursor: 'pointer'}}> add a product </div>
        <div onClick={callShowCart} style={{cursor: 'pointer'}}>Cart ({getItemCount})</div>
        <div>Total MRP: {getTotalMRP}</div>
      </div>
    );
  }
}

export default Navbar;
