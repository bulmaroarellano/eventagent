import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  address_1?: SortOrder;
  address_2?: SortOrder;
  city?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  lat?: SortOrder;
  long?: SortOrder;
  phone?: SortOrder;
  state?: SortOrder;
  updatedAt?: SortOrder;
  zip?: SortOrder;
};
