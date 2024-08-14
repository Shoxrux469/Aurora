'use client'

import EmptyCart from '@/components/empty-cart/EmptyCart'
import React, { useEffect, useState } from 'react'
import CheckoutCard from '@/components/checkout-card/CheckoutCard'
import { ICartProduct } from '@/interfaces/product'
import { Input } from '@/components/ui/input'
import CartItemsList from '@/components/cart-items-list/CartItemsList'
import DeliveryMethodsCard from '@/components/delivery-methods-card/DeliveryMethodsCard'
import UserDataCard from '@/components/user-data-card/UserDataCard'
import PaymentMethods from '@/components/payment-methods/PaymentMethods'

const CartPage = () => {
  const [cartItems, setCartItems] = useState<ICartProduct[]>([]);
  let isEmpty = cartItems.length === 0

  useEffect(() => {
    let cart = localStorage.getItem("cart");
    if (cart) {
      try {
        let arr = JSON.parse(cart).map((item: ICartProduct) => ({
          ...item,
          cartQuantity: item.cartQuantity || 1
        }));
        setCartItems(arr);
      } catch (error) {
        console.error("Failed to parse cart items:", error);
        setCartItems([]);
      }
    }
  }, []);

  if (isEmpty) return <EmptyCart />

  return (
    <div className="pt-8 pb-12 bg-muted">
      <section className="container px-8 grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
        <div className="lg:col-span-2 space-y-5 ">
          <CartItemsList cartItems={cartItems} setCartItems={setCartItems} />
          <DeliveryMethodsCard cartItems={cartItems} />

          <div className='flex gap-5'>
            <PaymentMethods />
            <UserDataCard />
          </div>

          <div className="p-6 rounded-xl bg-white shadow-md">
            <h2 className="text-2xl font-medium">Паспортные данные</h2>

            <div className='py-4 grid grid-cols-2 gap-4'>
              <div>
                <span className='text-sm text-zinc-500'>Серия и номер паспорта *</span>
                <Input className='h-11 mt-1.5 border rounded-md' />
              </div>
              <div>
                <span className='text-sm text-zinc-500'>ПИНФЛ *</span>
                <Input className='h-11 mt-1.5 border rounded-md' />
              </div>
            </div>
          </div>
        </div>
        <CheckoutCard cartItems={cartItems} />
      </section>
    </div>
  )
}

export default CartPage