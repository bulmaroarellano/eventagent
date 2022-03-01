import { InputJsonValue } from "../../types";

export type BillingUpdateInput = {
  amount?: number | null;
  clientData?: InputJsonValue;
  discount?: number | null;
  iva?: number | null;
  price?: number | null;
  product?: string | null;
  subtotal?: number | null;
  totalValue?: "Paypal" | "CreditCard" | "DevitCard" | null;
};
