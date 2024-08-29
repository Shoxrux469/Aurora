import { Button } from "../ui/button";
import { Edit2Icon } from "lucide-react";
import { Input } from "../ui/input";
import { usePathname, useRouter } from "next/navigation";
import { addLocalePrefix } from "@/utils/addLocalePrefix";
import { useTranslations } from "next-intl";

interface props {
  name: string;
  surname?: string;
}

const CartUserDataCard = ({ name, surname }: props) => {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("Cart.cart-user-data");

  const currentLocale = pathname.split("/")[1] || "en";

  return (
    <div className="flex-1 p-6 rounded-xl bg-white shadow-md">
      <Button
        onClick={() =>
          router.push(addLocalePrefix("/user-info/profile", currentLocale))
        }
        variant="ghost"
        className="w-full p-0 flex justify-between 
              hover:text-primary hover:bg-transparent duration-200"
      >
        <h2 className="text-2xl font-medium">{t("myData")}</h2>
        <Edit2Icon color="#777777" size={20} />
      </Button>
      <div className="py-4 grid grid-cols-2 gap-2">
        <div>
          <span className="text-sm text-zinc-500">{t("firstName")}*</span>
          <Input
            className="mt-1.5 border-none bg-muted rounded-md"
            defaultValue={name}
            readOnly
          />
        </div>
        <div>
          <span className="text-sm text-zinc-500">{t("lastName")}*</span>
          <Input
            className="mt-1.5 border-none bg-muted rounded-md"
            defaultValue={surname}
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default CartUserDataCard;
