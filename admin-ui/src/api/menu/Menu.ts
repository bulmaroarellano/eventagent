import { Order } from "../order/Order";

export type Menu = {
  createdAt: Date;
  description: string | null;
  id: string;
  isAvailable: boolean | null;
  itemPrice: number;
  name: string | null;
  orders?: Array<Order>;
  updatedAt: Date;
};
