import { OrderUpdateManyWithoutMenusInput } from "./OrderUpdateManyWithoutMenusInput";

export type MenuUpdateInput = {
  description?: string | null;
  isAvailable?: boolean | null;
  itemPrice?: number;
  name?: string | null;
  orders?: OrderUpdateManyWithoutMenusInput;
};
