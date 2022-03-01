import { JsonValue } from "type-fest";
import { Event } from "../event/Event";

export type Billing = {
  amount: number | null;
  clientData: JsonValue;
  createdAt: Date;
  discount: number | null;
  events?: Array<Event>;
  id: string;
  iva: number | null;
  payForm?: Array<"Paypal" | "CreditCard" | "Devit" | "Cash" | "Transfer">;
  price: number | null;
  product: string | null;
  subtotal: number | null;
  totalValue: number | null;
  updatedAt: Date;
};
