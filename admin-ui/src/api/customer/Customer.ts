import { Event } from "../event/Event";
import { Order } from "../order/Order";

export type Customer = {
  address_1: string | null;
  address_2: string | null;
  city: string | null;
  createdAt: Date;
  email: string | null;
  events?: Array<Event>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  lat: string | null;
  long: string | null;
  orders?: Array<Order>;
  phone: string | null;
  state: string | null;
  updatedAt: Date;
  zip: number | null;
};
