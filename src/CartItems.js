import React from 'react';
import './Cart.css';


class CartItems extends React.Component {


    onIncreasQuantity = index => {
        this.props.onIncreasQuantity(this.props.index);
    }

    onDecreaseQuantity = index => {
        this.props.onDecreaseQuantity(this.props.index);
    }

    onDeleteProduct = index => {
        this.props.onDeleteProduct(this.props.index);
    }

    render(){
        
        const {name, imgURL, price, star,qty, inCart, description} = this.props.item;
        return(
            <div className="cart-item">
                {/* <h1>Total Rs. {TotalItemPrice}</h1> */}
                <div className="left-block">
                    <img style={styles.image} src={imgURL}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{name}</div>
                    <div style={{color:'#777'}}>RS. {price}</div>
                    <div style={{color:'#777'}}>Qty. {qty}</div>
                    <div className="cart-item-actions">
                        <img 
                        alt="Increase" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/659/659893.svg" 
                        onClick = {this.onIncreasQuantity} 
                        />
                        <img 
                        alt="Decrease" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/659/659892.svg" 
                        onClick = {this.onDecreaseQuantity} 
                        />
                        <img 
                        alt="Delete" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/1345/1345823.svg" 
                        onClick = {this.onDeleteProduct}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image : {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItems;