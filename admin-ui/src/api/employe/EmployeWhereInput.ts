import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type EmployeWhereInput = {
  id?: StringFilter;
  lastName?: StringNullableFilter;
  name?: StringNullableFilter;
  roleId?: FloatNullableFilter;
};
