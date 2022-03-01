import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { EventCreateNestedManyWithoutCustomersInput } from "./EventCreateNestedManyWithoutCustomersInput";
import { OrderCreateNestedManyWithoutCustomersInput } from "./OrderCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  addeessId?: AddressWhereUniqueInput | null;
  email?: string | null;
  events?: EventCreateNestedManyWithoutCustomersInput;
  firstName?: string | null;
  lastName?: string | null;
  orders?: OrderCreateNestedManyWithoutCustomersInput;
  phone?: string | null;
};
