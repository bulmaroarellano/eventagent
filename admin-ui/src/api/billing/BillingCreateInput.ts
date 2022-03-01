import { InputJsonValue } from "../../types";
import { EventCreateNestedManyWithoutBillingsInput } from "./EventCreateNestedManyWithoutBillingsInput";

export type BillingCreateInput = {
  amount?: number | null;
  clientData?: InputJsonValue;
  discount?: number | null;
  events?: EventCreateNestedManyWithoutBillingsInput;
  iva?: number | null;
  payForm?: Array<"Paypal" | "CreditCard" | "Devit" | "Cash" | "Transfer">;
  price?: number | null;
  product?: string | null;
  subtotal?: number | null;
  totalValue?: number | null;
};
