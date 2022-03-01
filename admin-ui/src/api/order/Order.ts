import { Customer } from "../customer/Customer";
import { Menu } from "../menu/Menu";

export type Order = {
  createdAt: Date;
  customer?: Customer | null;
  discount: number | null;
  id: string;
  product?: Menu | null;
  quantity: number | null;
  totalPrice: number | null;
  updatedAt: Date;
};
