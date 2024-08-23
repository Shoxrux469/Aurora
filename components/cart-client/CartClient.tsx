"use client"

import CheckoutCard from '@/components/checkout-card/CheckoutCard'
import CartItemsList from '@/components/cart-items-list/CartItemsList'
import PaymentMethods from '@/components/payment-methods/PaymentMethods'
import EmptyCard from '@/components/empty-card/EmptyCard'
import DeliveryCard from '@/components/delivery-card/DeliveryCard'
import UserInfoCard from '../user-info-card/UserInfoCard'
import { useEffect, useState } from 'react'
import { useMapContext } from '@/providers/MapProvider'
import { ICartProduct } from '@/interfaces/product'
import { IUser } from '@/interfaces/user'

interface props {
  user: IUser
}

const CartClient = ({ user }: props) => {
  const [cartItems, setCartItems] = useState<ICartProduct[]>([]);
  const [paymentCard, setPaymentCard] = useState<null>(null);
  const { address } = useMapContext()

  useEffect(() => {
    let cart = localStorage.getItem("cart");
    if (cart) {
      try {
        let arr = JSON.parse(cart).map((item: ICartProduct) => ({
          ...item,
          cartQuantity: item.cartQuantity || 1,
        }));
        setCartItems(arr);
      } catch (error) {
        console.error("Failed to parse cart items:", error);
        setCartItems([]);
      }
    }
  }, []);

  let isEmpty = cartItems.length === 0;
  if (isEmpty)
    return <EmptyCard
      title='В корзине пока пусто'
      description='Начните с подборок на главной странице или найдите нужный товар через поиск' />

  return (
    <section className="container px-8 grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
      <div className="lg:col-span-2 space-y-5 ">
        <CartItemsList cartItems={cartItems} setCartItems={setCartItems} />
        <DeliveryCard cartItems={cartItems} />

        <div className='flex gap-5'>
          <PaymentMethods />
          <UserInfoCard name={user.name} surname={user.surname} />
        </div>
      </div>
      <CheckoutCard
        cartItems={cartItems}
        address={address!}
        paymentCard={paymentCard}
        userId={user.id}
      />
    </section>
  )
}

export default CartClient