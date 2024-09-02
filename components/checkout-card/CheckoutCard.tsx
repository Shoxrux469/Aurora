import React, { useEffect, useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'
import { ICartProduct } from '@/interfaces/product'

interface props {
  cartItems: ICartProduct[]
}

const CheckoutCard = ({ cartItems }: props) => {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const calculateTotalPrice = () => {
      const total = cartItems.reduce((acc, value) => acc + value.price * value.cartQuantity, 0)
      setTotalPrice(total)
    }
    calculateTotalPrice()
  }, [cartItems]);

  return (
    <Card className='bg-white border-none h-fit shadow-md sticky top-4'>
      <CardHeader>
        <CardTitle className='mb-7 text-2xl font-medium'>Ваш заказ</CardTitle>
        <Separator />
      </CardHeader>
      <CardContent>
        <div className="flex justify-between">
          <span>Товары ({cartItems.length}):</span>
          <span>${totalPrice}.00</span>
        </div>
        <div className="flex justify-between">
          <span>Доставка:</span>
          <span>$25.00</span>
        </div>
        <div className="flex justify-between font-medium text-lg mt-2">
          <span>Итого:</span>
          <span>${totalPrice + 25}.00</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          variant="purple"
          size="lg"
          className="w-full bg-purple-600 text-white">Оформить заказ</Button>
      </CardFooter>
    </Card>
  )
}

export default CheckoutCard