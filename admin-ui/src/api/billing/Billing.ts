import { JsonValue } from "type-fest";

export type Billing = {
  amount: number | null;
  clientData: JsonValue;
  createdAt: Date;
  discount: number | null;
  id: string;
  iva: number | null;
  payForm?: Array<"Paypal" | "CreditCard" | "Devit" | "Cash" | "Transfer">;
  price: number | null;
  product: string | null;
  subtotal: number | null;
  totalValue: number | null;
  updatedAt: Date;
};
