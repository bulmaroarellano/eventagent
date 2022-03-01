import { SortOrder } from "../../util/SortOrder";

export type EmployeOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  name?: SortOrder;
  roleId?: SortOrder;
  updatedAt?: SortOrder;
};
