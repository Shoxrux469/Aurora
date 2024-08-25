import React from "react";
import { Button } from "../ui/button";
import { Edit2Icon, Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

const CartPamentCard = () => {
  let methods = [];

  return (
    <div className="flex-1 p-6 rounded-xl bg-white shadow-md">
      <div className="flex justify-between">
        <h2 className="text-2xl font-medium">Способ оплаты</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant={"ghost"} size={"icon"}>
              <Edit2Icon color="#777777" size={20} />
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-2xl font-medium">
                Способ оплаты
              </DialogTitle>
            </DialogHeader>

            {!methods.length && <p>У вас нет привязанных карт</p>}

            <Button
              variant="outline"
              className="h-12 p-4 flex items-center justify-start gap-2 rounded-lg"
            >
              <Plus size={20} />
              <span className="font-light">Привязать новую карту</span>
            </Button>
          </DialogContent>
        </Dialog>
      </div>
      <div>
        <p>
          Matercard <span>-- 6261</span>
        </p>
      </div>
    </div>
  );
};

export default CartPamentCard;
