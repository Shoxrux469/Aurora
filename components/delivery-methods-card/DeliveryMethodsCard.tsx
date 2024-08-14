import { ICartProduct } from '@/interfaces/product'
import Image from 'next/image'

interface props {
  cartItems: ICartProduct[]
}

const DeliveryMethodsCard = ({ cartItems }: props) => {
  return (
    <div className="p-6 rounded-xl bg-white shadow-md">
      <h2 className="text-2xl font-medium">Способ доставки</h2>

      <div className="mt-6 grid grid-cols-[280px_1fr] gap-2">
        <p className="text-zinc-500">Пункт выдачи</p>
        <p className="text-zinc-800 font-medium">Самаркандская область, Самарканд, улица Мухаммада Аль-Хорезми, 77,</p>

        <p className="text-zinc-500">Стоимость доставки</p>
        <p className="text-zinc-800 font-medium">Бесплатно</p>

        <p className="text-zinc-500">Время доставки</p>
        <p className="text-zinc-800 font-medium">7-10 дней</p>

        <div className="mt-4 flex gap-2">
          {
            cartItems?.map(item => (
              <div key={item.id}>
                <Image src={item.images_links[0]} alt="product" width={72} height={108} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default DeliveryMethodsCard