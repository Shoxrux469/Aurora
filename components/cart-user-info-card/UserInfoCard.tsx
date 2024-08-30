import { Button } from "../ui/button";
import { Edit2Icon } from "lucide-react";
import { Input } from "../ui/input";
import { useRouter } from "next/navigation";

interface props {
  name: string;
  surname?: string;
}

const UserInfoCard = ({ name, surname }: props) => {
  const router = useRouter();

  return (
    <div className="flex-1 p-6 rounded-xl bg-white shadow-md">
      <Button
        onClick={() => router.push("/user-info/profile")}
        variant="ghost"
        className="w-full p-0 flex justify-between 
              hover:text-primary hover:bg-transparent duration-200"
      >
        <h2 className="text-2xl font-medium">Мои данные</h2>
        <Edit2Icon color="#777777" size={20} />
      </Button>
      <div className="py-4 grid grid-cols-2 gap-2">
        <div>
          <span className="text-sm text-zinc-500">Имя *</span>
          <Input
            className="mt-1.5 border-none bg-muted rounded-md"
            defaultValue={name}
            readOnly
          />
        </div>
        <div>
          <span className="text-sm text-zinc-500">Фамилия *</span>
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

export default UserInfoCard;
