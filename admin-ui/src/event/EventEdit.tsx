import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { CustomerTitle } from "../customer/CustomerTitle";
import { BillingTitle } from "../billing/BillingTitle";

export const EventEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="address"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="billing.id"
          reference="Billing"
          label="billingId"
        >
          <SelectInput optionText={BillingTitle} />
        </ReferenceInput>
        <TextInput label="categoriId" source="categoriId" />
        <NumberInput label="price" source="price" />
      </SimpleForm>
    </Edit>
  );
};
