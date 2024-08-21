import { ICartProduct } from '@/interfaces/product'
import Image from 'next/image'
import { Button } from '../ui/button'
import { Edit2Icon } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { useMapContext } from '@/providers/map-provider'
import Map from '../map/Map'
import { useEffect, useState } from 'react'
import { getAddressFromCoordinates } from '@/utils/geocode'

interface props {
  cartItems: ICartProduct[]
}

const DeliveryCard = ({ cartItems }: props) => {
  const { location } = useMapContext()
  const [address, setAddress] = useState<string>('');

  useEffect(() => {
    if (location) {
      const fetchAddress = async () => {
        const addr = await getAddressFromCoordinates(location.lat, location.lng);
        setAddress(addr);
      };

      fetchAddress();
    }
  }, [location]);

  return (
    <div className="p-6 rounded-xl bg-white shadow-md">
      <div className='flex justify-between'>
        <h2 className="text-2xl font-medium">Адрес доставки</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant={"ghost"} size={"icon"}>
              <Edit2Icon color='#777777' size={20} />
            </Button>
          </DialogTrigger>

          <DialogContent className='max-w-3xl'>
            <DialogHeader>
              <DialogTitle className="text-2xl font-medium">Укажите ваше местоположение</DialogTitle>
            </DialogHeader>
            <Map />
          </DialogContent>
        </Dialog>
      </div>

      <div className="mt-6 grid grid-cols-[280px_1fr] gap-2">
        <p className="text-zinc-500">Пункт выдачи</p>
        <p className="text-zinc-800 font-medium">
          {address.length ? address : 'Укажите адрес'}
        </p>

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

export default DeliveryCard