import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type AddressUpdateInput = {
  address_1?: string | null;
  address_2?: string | null;
  city?: string | null;
  customers?: CustomerWhereUniqueInput;
  state?: string | null;
  zip?: number | null;
};
