import {
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const Aside = ({ side }: { side: "left" }) => {
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
        <ul className="text-xl flex flex-col gap-2">
          <li>Info 1</li>
          <li>Info 2</li>
          <li>Info 3</li>
          <li>Info 4</li>
          <li>Info 5</li>
        </ul>
      </div>
    </SheetContent>
  );
};

export default Aside;
