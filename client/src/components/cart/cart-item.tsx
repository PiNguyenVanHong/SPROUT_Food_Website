import { Minus, Plus, X } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface CartItemProps {
  // id: string;
  name: string;
  quantity: number;
  price: number;
  image: string;
  isPopup?: boolean;
}

function CartItem({ name, quantity, price, image, isPopup }: CartItemProps) {
  return (
    <div className="flex items-stretch justify-between py-4 border-b-2">
      <div className={cn("flex items-center space-x-8", isPopup && "text-sm")}>
        <div className={cn(isPopup ? "w-16 h-16" : "w-24 h-24")}>
          <img
            src={image}
            alt={name}
            className="object-contain rounded drop-shadow-lg"
          />
        </div>
        <div className={cn("flex flex-col justify-end h-full", isPopup ? "gap-4" : "gap-6")}>
          <h3 className="font-semibold line-clamp-1">{name}</h3>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              className={cn(isPopup ? "w-5 h-5" : "h-8 w-8")}
              onClick={() => {
                // const newItems = [...items];
                // if (newItems[index].quantity > 1) {
                //   newItems[index].quantity--;
                //   setItems(newItems);
                // }
              }}
            >
              <Minus size={isPopup ? 12 : 18} />
            </Button>
            <span>{quantity}</span>
            <Button
              variant="outline"
              size="icon"
              className={cn(isPopup ? "w-5 h-5" : "h-8 w-8")}
              onClick={() => {
                // const newItems = [...items];
                // newItems[index].quantity++;
                // setItems(newItems);
              }}
            >
              <Plus size={isPopup ? 12 : 18} />
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end justify-between">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            // const newItems = items.filter((_, i) => i !== index);
            // setItems(newItems);
          }}
        >
          <X className="h-4 w-4" />
        </Button>
        <span className={cn("mr-4", isPopup && "text-sm")}>${(price * quantity).toFixed(2)}</span>
      </div>
    </div>
  );
}

export default CartItem;
