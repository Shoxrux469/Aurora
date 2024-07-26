import EmptyCart from '@/components/empty-cart/EmptyCart'
import React from 'react'

import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { TrashIcon } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import CartProduct from '@/components/cart-product/CartProduct'
import CheckoutCard from '@/components/checkout-card/CheckoutCard'


const CartPage = () => {
  let cartItems = ['', '']
  let isEmpty = cartItems.length === 0

  if (isEmpty) return <EmptyCart />

  return (
    <section className='py-8'>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <div className="border rounded-xl p-4 shadow">
            <h2 className="text-2xl font-bold">Корзина</h2>
            <p className='mb-2 font-thin'>1 товар</p>
            <div className="pt-4 space-y-4">
              {cartItems?.map((item, idx) => (
                <CartProduct key={idx} />
              ))}
            </div>
          </div>
        </div>
        <CheckoutCard />
      </div>
    </section>
  )
}

export default CartPage