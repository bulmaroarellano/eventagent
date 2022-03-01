import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const BillingList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"billings"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
