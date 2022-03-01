import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { EventUpdateManyWithoutCustomersInput } from "./EventUpdateManyWithoutCustomersInput";
import { OrderUpdateManyWithoutCustomersInput } from "./OrderUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  addeessId?: AddressWhereUniqueInput | null;
  email?: string | null;
  events?: EventUpdateManyWithoutCustomersInput;
  firstName?: string | null;
  lastName?: string | null;
  orders?: OrderUpdateManyWithoutCustomersInput;
  phone?: string | null;
};
