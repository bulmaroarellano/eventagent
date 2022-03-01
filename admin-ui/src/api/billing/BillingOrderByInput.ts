import { SortOrder } from "../../util/SortOrder";

export type BillingOrderByInput = {
  amount?: SortOrder;
  clientData?: SortOrder;
  createdAt?: SortOrder;
  discount?: SortOrder;
  id?: SortOrder;
  iva?: SortOrder;
  price?: SortOrder;
  product?: SortOrder;
  subtotal?: SortOrder;
  totalValue?: SortOrder;
  updatedAt?: SortOrder;
};
