import { Employe as TEmploye } from "../api/employe/Employe";

export const EMPLOYE_TITLE_FIELD = "lastName";

export const EmployeTitle = (record: TEmploye): string => {
  return record.lastName || record.id;
};
