import { EmployeWhereInput } from "./EmployeWhereInput";
import { EmployeOrderByInput } from "./EmployeOrderByInput";

export type EmployeFindManyArgs = {
  where?: EmployeWhereInput;
  orderBy?: EmployeOrderByInput;
  skip?: number;
  take?: number;
};
