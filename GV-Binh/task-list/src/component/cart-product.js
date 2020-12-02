import React, {Component} from 'react';

export const CartContext = React.createContext();


export class CartProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartLists: []
        }
    }


    updateCart = (product) => {
        this.setState({
            cartLists: this.state.cartLists.concat(product)
        })
    }

    render() {
        const { cartLists } = this.state;
        return <CartContext.Provider value={
            {
                cartLists,
                updateCart: this.updateCart
            }
        }>
            {this.props.children}
            </CartContext.Provider>
    }
}