import { Separator } from '@radix-ui/react-separator';
import React, { Dispatch, SetStateAction, useEffect } from 'react'
import CartProduct from '../cart-product/CartProduct';
import { idType } from '@/interfaces';
import { ICartProduct } from '@/interfaces/product';

interface props {
  cartItems: ICartProduct[]
  setCartItems: Dispatch<SetStateAction<ICartProduct[]>>
}

const CartItemsList = ({ cartItems, setCartItems }: props) => {
  const handleDelete = (id: idType) => {
    const updatedCart = cartItems.filter(item => item.id !== id)
    setCartItems(updatedCart)
    localStorage.setItem("cart", JSON.stringify(updatedCart))
  }
  const handleIncrease = (id: idType) => {
    const updatedCart = cartItems.map(item =>
      item.id === id ? { ...item, cartQuantity: item.cartQuantity + 1 } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }
  const handleDecrease = (id: idType) => {
    const updatedCart = cartItems.map(item =>
      item.id === id ? { ...item, cartQuantity: item.cartQuantity - 1 } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }
  const handleQuantityChange = (id: idType, quantity: number) => {
    const updatedCart = cartItems.map(item =>
      item.id === id ? { ...item, cartQuantity: quantity } : item
    )
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }
  return (
    <div className="p-6 rounded-xl bg-white shadow-md">
      <h2 className="text-2xl font-medium">Корзина</h2>
      <p className="mb-5 font-thin italic">{cartItems.length} товар</p>
      <Separator />
      <div className="pt-6 space-y-4">
        {cartItems?.map((item, idx) => (
          <CartProduct
            key={idx}
            item={item}
            onDelete={handleDelete}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            onQuantityChange={handleQuantityChange}
          />
        ))}
      </div>
    </div>
  )
}

export default CartItemsList