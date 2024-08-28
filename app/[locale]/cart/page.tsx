import { MapProvider } from "@/providers/MapProvider";
import CartClient from "@/components/cart-client/CartClient";
import { getCurrentUser } from "@/lib/auth";

interface params {
  params: {
    locale: string;
  };
}

const CartPage = async ({ params: { locale } }: params) => {
  const user = await getCurrentUser();

  return (
    <div className="pt-8 pb-12 bg-muted">
      <MapProvider>
        <CartClient user={user} />
      </MapProvider>
    </div>
  );
};
export default CartPage