import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

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
        <TextField label="price" source="price" />
        <TextField label="product" source="product" />
        <TextField label="subtotal" source="subtotal" />
        <TextField label="totalValue" source="totalValue" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
