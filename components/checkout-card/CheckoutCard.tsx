import React from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { Progress } from '../ui/progress'

interface props {
  activeAll: boolean;
}

const CheckoutCard = () => {
  return (
    <Card className='h-fit'>
      <CardHeader>
        <CardTitle className='text-primary'>Ваш заказ</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between">
          <span>Товары (1):</span>
          <span>$40.00</span>
        </div>
        <div className="flex justify-between font-bold text-lg mt-2">
          <span>Итого:</span>
          <span>$40.00</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="default" size="lg" className="w-full text-white rounded-xl">Перейти к оформлению</Button>
      </CardFooter>
    </Card>
  )
}

export default CheckoutCard