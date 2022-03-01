import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { MenuWhereUniqueInput } from "../menu/MenuWhereUniqueInput";

export type OrderUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  discount?: number | null;
  product?: MenuWhereUniqueInput | null;
  quantity?: number | null;
  totalPrice?: number | null;
};
