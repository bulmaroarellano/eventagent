import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";
import { BILLING_TITLE_FIELD } from "./BillingTitle";

export const BillingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="amount" source="amount" />
        <TextField label="clientData" source="clientData" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="discount" source="discount" />
        <TextField label="ID" source="id" />
        <TextField label="iva" source="iva" />
        <TextField label="payForm" source="payForm" />
        <TextField label="price" source="price" />
        <TextField label="product" source="product" />
        <TextField label="subtotal" source="subtotal" />
        <TextField label="totalValue" source="totalValue" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Event" target="BillingId" label="events">
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
