import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";
import { BILLING_TITLE_FIELD } from "../billing/BillingTitle";

export const EventList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"events"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField
          label="address"
          source="customer.id"
          reference="Customer"
        >
          <TextField source={CUSTOMER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="billingId"
          source="billing.id"
          reference="Billing"
        >
          <TextField source={BILLING_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="categoriId" source="categoriId" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="price" source="price" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
