import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";

export type CustomerCreateInput = {
  addeessId?: AddressWhereUniqueInput | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
};
