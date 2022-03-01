import { JsonValue } from "type-fest";

export type Billing = {
  amount: number | null;
  clientData: JsonValue;
  createdAt: Date;
  discount: number | null;
  id: string;
  iva: number | null;
  price: number | null;
  product: string | null;
  subtotal: number | null;
  totalValue?: "Paypal" | "CreditCard" | "DevitCard" | null;
  updatedAt: Date;
};
