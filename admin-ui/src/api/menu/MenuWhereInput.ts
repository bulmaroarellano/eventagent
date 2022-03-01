import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type MenuWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  isAvailable?: BooleanNullableFilter;
  itemPrice?: FloatFilter;
  name?: StringNullableFilter;
  orders?: OrderListRelationFilter;
};
