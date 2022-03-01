import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { BillingWhereUniqueInput } from "../billing/BillingWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type EventWhereInput = {
  address?: CustomerWhereUniqueInput;
  billingId?: BillingWhereUniqueInput;
  categoriId?: StringNullableFilter;
  id?: StringFilter;
  price?: FloatNullableFilter;
};
