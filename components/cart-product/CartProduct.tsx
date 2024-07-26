import React from 'react'
import { Checkbox } from '../ui/checkbox'
import { Button } from '../ui/button'
import { TrashIcon } from 'lucide-react'
import Image from 'next/image'

interface props { }

const CartProduct = ({ }: props) => {
  return (
    <div className="flex items-start space-x-4 ">
      <Image
        src="https://images.uzum.uz/cleal5d6sfhvbd1idob0/original.jpg"
        alt="Product Image"
        width={240}
        height={240}
        className="w-28 h-full object-cover rounded-lg" />
      <div className="flex-1">
        <h3 className="text-lg font-medium text-balance max-w-[360px]">Механическая игровая клавиатура для компьютера</h3>
        <p className="mt-1 text-sm text-muted-foreground">серый</p>
        <p className="mt-1 text-sm text-muted-foreground">Аксессуары</p>

        <div className="flex items-center space-x-2 mt-2">
          <Button variant="secondary" size="sm">
            −
          </Button>
          <span>1</span>
          <Button variant="secondary" size="sm">
            +
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-end space-y-2">
        <div className="text-lg font-bold">$40.00</div>
        <div className="text-sm text-muted-foreground line-through">$49.99</div>
        <Button variant="ghost" size="icon">
          <TrashIcon className="w-5 h-5" />
          <span className="sr-only">Удалить</span>
        </Button>
      </div>
    </div>
  )
}

export default CartProduct