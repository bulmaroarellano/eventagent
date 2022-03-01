import { InputJsonValue } from "../../types";

export type BillingCreateInput = {
  amount?: number | null;
  clientData?: InputJsonValue;
  discount?: number | null;
  iva?: number | null;
  payForm?: Array<"Paypal" | "CreditCard" | "Devit" | "Cash" | "Transfer">;
  price?: number | null;
  product?: string | null;
  subtotal?: number | null;
  totalValue?: number | null;
};
