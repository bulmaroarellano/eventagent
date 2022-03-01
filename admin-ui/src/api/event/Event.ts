import { Customer } from "../customer/Customer";
import { Billing } from "../billing/Billing";

export type Event = {
  address?: Customer | null;
  billingId?: Billing | null;
  categoriId: string | null;
  createdAt: Date;
  id: string;
  price: number | null;
  updatedAt: Date;
};
