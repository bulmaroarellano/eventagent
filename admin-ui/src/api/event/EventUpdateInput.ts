import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { BillingWhereUniqueInput } from "../billing/BillingWhereUniqueInput";

export type EventUpdateInput = {
  address?: CustomerWhereUniqueInput | null;
  billingId?: BillingWhereUniqueInput | null;
  categoriId?: string | null;
  price?: number | null;
};
