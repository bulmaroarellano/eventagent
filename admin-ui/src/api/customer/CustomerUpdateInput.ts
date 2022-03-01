import { EventUpdateManyWithoutCustomersInput } from "./EventUpdateManyWithoutCustomersInput";
import { OrderUpdateManyWithoutCustomersInput } from "./OrderUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  address_1?: string | null;
  address_2?: string | null;
  city?: string | null;
  email?: string | null;
  events?: EventUpdateManyWithoutCustomersInput;
  firstName?: string | null;
  lastName?: string | null;
  lat?: string | null;
  long?: string | null;
  orders?: OrderUpdateManyWithoutCustomersInput;
  phone?: string | null;
  state?: string | null;
  zip?: number | null;
};
