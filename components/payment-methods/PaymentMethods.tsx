import React from 'react'
import { Button } from '../ui/button'
import { Edit2Icon } from 'lucide-react'

const PaymentMethods = () => {
  return (
    <div className='flex-1 p-6 rounded-xl bg-white shadow-md'>
      <div className='flex justify-between'>
        <h2 className="text-2xl font-medium">Способ оплаты</h2>
        <Button variant={"ghost"} size={"icon"}>
          <Edit2Icon color='#777777' size={20} />
        </Button>
      </div>

      <div>
        <p>Matercard <span>-- 6261</span></p>
      </div>
    </div>
  )
}

export default PaymentMethods