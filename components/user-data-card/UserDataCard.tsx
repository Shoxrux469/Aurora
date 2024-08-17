import React from 'react'
import { Button } from '../ui/button';
import { Edit2Icon } from 'lucide-react';
import { Input } from '../ui/input';

const UserDataCard = () => {
  return (
    <div className='flex-1 p-6 rounded-xl bg-white shadow-md'>
      <div className='flex justify-between'>
        <h2 className="text-2xl font-medium">Мои данные</h2>
        <Button variant={"ghost"} size={"icon"}>
          <Edit2Icon color='#777777' size={20} />
        </Button>
      </div>
      <div className='py-4 grid grid-cols-2 gap-2'>
        <div>
          <span className='text-sm text-zinc-500'>Имя *</span>
          <Input
            className='mt-1.5 border-none bg-muted rounded-md'
            defaultValue={'Name'}
            readOnly />
        </div>
        <div>
          <span className='text-sm text-zinc-500'>Фамилия *</span>
          <Input
            className='mt-1.5 border-none bg-muted rounded-md'
            defaultValue={'Name'}
            readOnly />
        </div>
        <div>
          <span className='text-sm text-zinc-500'>Отчество *</span>
          <Input
            className='mt-1.5 border-none bg-muted rounded-md'
            defaultValue={'Name'}
            readOnly />
        </div>
      </div>
    </div>
  )
}

export default UserDataCard;