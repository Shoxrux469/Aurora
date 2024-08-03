import React from 'react'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Button } from '../ui/button'
import { Facebook, Linkedin, LogIn } from 'lucide-react'
import { Input } from '../ui/input'
import Link from 'next/link'
import { Separator } from '../ui/separator'

const LoginForm = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="default"
          className="flex items-center h-full text-zinc-800 gap-2 py-2 px-2 duration-150 ease-in-out">
          <LogIn size={20} />
          Войти
        </Button>
      </DialogTrigger>
      <DialogContent className='max-w-[380px]'>
        <DialogHeader>
          <DialogTitle className='text-center text-3xl font-medium'>Вход в аккаунт</DialogTitle>
        </DialogHeader>

        <div className='flex items-center place-content-center gap-5'>
          <Button variant="outline" size="icon" className='p-2 rounded-full'>
            <span className='text-zinc-500 text-xl'>G</span>
          </Button>
          <Button variant="outline" size="icon" className='p-2 rounded-full'>
            <Facebook color='#71717a' />
          </Button>
          <Button variant="outline" size="icon" className='p-2 rounded-full'>
            <Linkedin color='#71717a' />
          </Button>
        </div>

        <form>
          <div className='space-y-5'>
            <Input placeholder='Email' />
            <Input placeholder='Password' />

            <Button className='w-full' size="lg">Войти</Button>
          </div>
        </form>

        <Link href="/reset" className='text-center text-sm text-blue-600'>
          Забыли пароль?
        </Link>

        <Separator />

        <DialogFooter>
          <div className='text-sm'>
            У вас нет аккаунта? &nbsp;
            <Link href="/signup" className='text-blue-600'>Создать аккаунт</Link>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default LoginForm