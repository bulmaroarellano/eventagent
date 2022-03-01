import { OrderCreateNestedManyWithoutMenusInput } from "./OrderCreateNestedManyWithoutMenusInput";

export type MenuCreateInput = {
  description?: string | null;
  isAvailable?: boolean | null;
  itemPrice: number;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutMenusInput;
};
