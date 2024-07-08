import {
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ICategory } from "@/interfaces/category";
import { cn } from "@/lib/utils";
import CategoriesService from "@/services/api/categories";
import {
  ArrowRight,
  Watch,
  Gamepad2,
  Headphones,
  LaptopMinimal,
  Laptop,
} from "lucide-react";

type ICategoryIcons = {
  [key: string]: JSX.Element;
};

const Aside = async ({ side }: { side: "left" }) => {
  // Получаем категории
  let categories = (await CategoriesService.getAll()) as ICategory[];

  let categoryiconClass = cn("opacity-90 text-primary");

  const categoriesIcons: ICategoryIcons = {
    "Умные часы и фитнес браслеты": (
      <Watch size={20} className={categoryiconClass} />
    ),
    Игровое: <Gamepad2 size={20} className={categoryiconClass} />,
    "Наушники и аудиотехника": (
      <Headphones size={20} className={categoryiconClass} />
    ),
    "Компьютерная техника": <Laptop size={20} className={categoryiconClass} />,
  };

  return (
    <SheetContent
      side={side}
      className="flex flex-col gap-10 rounded-tr-lg rounded-br-lg"
    >
      <SheetHeader>
        <SheetTitle className="text-lg">Title</SheetTitle>
        <SheetDescription className="text-base">
          A little bit of water to complete a description to the title
        </SheetDescription>
      </SheetHeader>
      <div>
        <ul className="text-lg flex flex-col gap-3">
          {categories.map((category, i) => (
            <li
              key={i}
              className="hover:opacity-75 ease-in-out duration-150 cursor-pointer flex items-center justify-between group"
            >
              <span className="flex items-center text-balance justify-center gap-2">
                {categoriesIcons[category.title]}
                <>{category.title}</>
              </span>
              <ArrowRight
                size={24}
                className={cn(
                  "text-primary transition-transform duration-150 group-hover:translate-x-1"
                )}
              />
            </li>
          ))}
        </ul>
      </div>
    </SheetContent>
  );
};

export default Aside;
