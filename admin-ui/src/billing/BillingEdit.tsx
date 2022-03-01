import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

export const BillingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <div />
        <NumberInput label="discount" source="discount" />
        <NumberInput label="iva" source="iva" />
        <SelectArrayInput
          label="payForm"
          source="payForm"
          choices={[
            { label: "paypal", value: "Paypal" },
            { label: "credit card", value: "CreditCard" },
            { label: "devit", value: "Devit" },
            { label: "cash", value: "Cash" },
            { label: "transfer", value: "Transfer" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <NumberInput label="price" source="price" />
        <TextInput label="product" source="product" />
        <NumberInput label="subtotal" source="subtotal" />
        <NumberInput label="totalValue" source="totalValue" />
      </SimpleForm>
    </Edit>
  );
};
