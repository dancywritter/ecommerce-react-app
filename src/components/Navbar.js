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
          <a
            href='https://github.com/rks107/ecommerce-react-app.git'
            target='_blank'>
            GitHub Link
          </a>
        </div>
        <div onClick={callShowItems} style={{ cursor: "pointer" }}>
          Products
        </div>
        <div onClick={callAddItem} style={{ cursor: "pointer" }}>
          {" "}
          add a product{" "}
        </div>
        {/* <div onClick={callShowCart} style={{ cursor: "pointer" }}>
          Cart ({getItemCount})
        </div> */}

        <div
          onClick={callShowCart}
          style={styles.cartIconContainer}>
          <img
            style={styles.cartIcon}
            src='https://image.flaticon.com/icons/svg/833/833400.svg'
            alt='cart-icon'
          />
          <span style={styles.cartCount}> {getItemCount} </span>
        </div>

        <div>Total MRP: {getTotalMRP}</div>
      </div>
    );
  }
}


const styles = {
  nav: {
    height: 70,
    background: "#4267b2",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  cartIcon: {
    height: 32,
    marginRight: 20,
  },
  cartIconContainer: {
    position: "relative",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  cartCount: {
    background: "yellow",
    borderRadius: "50%",
    padding: "4px 8px",
    position: "absolute",
    color: "red"
    // right: 0,
    // top: -9,
  },
};

export default Navbar;
