import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SettingWhereInput = {
  id?: StringFilter;
  itemm?: StringNullableFilter;
  value?: StringNullableFilter;
};
