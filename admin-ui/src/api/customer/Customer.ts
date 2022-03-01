import { Address } from "../address/Address";
import { Event } from "../event/Event";
import { Order } from "../order/Order";

export type Customer = {
  addeessId?: Address | null;
  createdAt: Date;
  email: string | null;
  events?: Array<Event>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  orders?: Array<Order>;
  phone: string | null;
  updatedAt: Date;
};
