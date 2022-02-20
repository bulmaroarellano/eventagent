import { Setting as TSetting } from "../api/setting/Setting";

export const SETTING_TITLE_FIELD = "itemm";

export const SettingTitle = (record: TSetting): string => {
  return record.itemm || record.id;
};
