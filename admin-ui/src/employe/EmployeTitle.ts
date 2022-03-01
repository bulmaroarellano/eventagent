import { Employe as TEmploye } from "../api/employe/Employe";

export const EMPLOYE_TITLE_FIELD = "id";

export const EmployeTitle = (record: TEmploye): string => {
  return record.id || record.id;
};
