import { Billing as TBilling } from "../api/billing/Billing";

export const BILLING_TITLE_FIELD = "product";

export const BillingTitle = (record: TBilling): string => {
  return record.product || record.id;
};
