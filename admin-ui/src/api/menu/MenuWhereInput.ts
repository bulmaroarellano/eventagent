import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { FloatFilter } from "../../util/FloatFilter";

export type MenuWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  isAvailable?: BooleanNullableFilter;
  itemPrice?: FloatFilter;
  name?: StringNullableFilter;
};
