import { InputJsonValue } from "../../types";
import { EventUpdateManyWithoutBillingsInput } from "./EventUpdateManyWithoutBillingsInput";

export type BillingUpdateInput = {
  amount?: number | null;
  clientData?: InputJsonValue;
  discount?: number | null;
  events?: EventUpdateManyWithoutBillingsInput;
  iva?: number | null;
  payForm?: Array<"Paypal" | "CreditCard" | "Devit" | "Cash" | "Transfer">;
  price?: number | null;
  product?: string | null;
  subtotal?: number | null;
  totalValue?: number | null;
};
