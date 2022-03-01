import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { MenuWhereUniqueInput } from "../menu/MenuWhereUniqueInput";

export type OrderCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  discount?: number | null;
  product?: MenuWhereUniqueInput | null;
  quantity?: number | null;
  totalPrice?: number | null;
};
