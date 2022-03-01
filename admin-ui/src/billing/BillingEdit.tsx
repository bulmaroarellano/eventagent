import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  SelectInput,
} from "react-admin";

export const BillingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <div />
        <NumberInput label="discount" source="discount" />
        <NumberInput label="iva" source="iva" />
        <NumberInput label="price" source="price" />
        <TextInput label="product" source="product" />
        <NumberInput label="subtotal" source="subtotal" />
        <SelectInput
          source="totalValue"
          label="totalValue"
          choices={[
            { label: "paypal", value: "Paypal" },
            { label: "credit card", value: "CreditCard" },
            { label: "devit card", value: "DevitCard" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
