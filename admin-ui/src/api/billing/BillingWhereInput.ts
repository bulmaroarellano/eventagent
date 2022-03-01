import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { EventListRelationFilter } from "../event/EventListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type BillingWhereInput = {
  amount?: FloatNullableFilter;
  clientData?: JsonFilter;
  discount?: FloatNullableFilter;
  events?: EventListRelationFilter;
  id?: StringFilter;
  iva?: FloatNullableFilter;
  price?: FloatNullableFilter;
  product?: StringNullableFilter;
  subtotal?: FloatNullableFilter;
  totalValue?: FloatNullableFilter;
};
