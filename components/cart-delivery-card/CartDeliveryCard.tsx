import { ICartProduct } from '@/interfaces/product';
import Image from 'next/image';
import { Button } from '../ui/button';
import { Edit2Icon } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { useMapContext } from '@/providers/MapProvider';
import Map from '../map/Map';
import { useEffect } from 'react';

interface props {
  cartItems: ICartProduct[];
}

const CartDeliveryCard = ({ cartItems }: props) => {
  const { location, address, updateLocationAndAddress } = useMapContext();

  useEffect(() => {
    if (location) {
      updateLocationAndAddress(location).catch((error) => {
        console.error('Failed to update address:', error);
      });
    }
  }, [location, updateLocationAndAddress]);

  return (
    <div className="p-6 rounded-xl bg-white shadow-md" id='order-data'>
      <div className='flex justify-between'>
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              className='w-full p-0 flex justify-between 
              hover:text-primary hover:bg-transparent duration-200'>
              <h2 className="text-2xl font-medium">Адрес доставки</h2>
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
          {address ? address : 'Укажите адрес'}
        </p>

        <p className="text-zinc-500">Стоимость доставки</p>
        <p className="text-zinc-800 font-medium">Бесплатно</p>

        <p className="text-zinc-500">Время доставки</p>
        <p className="text-zinc-800 font-medium">2-3 дня</p>

        <div className="mt-4 flex gap-2">
          {cartItems?.map(item => (
            <div key={item.id}>
              <Image src={item.images_links[0]} alt="product" width={72} height={108} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartDeliveryCard;
