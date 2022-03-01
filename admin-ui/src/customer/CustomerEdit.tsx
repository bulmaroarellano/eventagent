import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const CustomerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="address 1" source="address_1" />
        <TextInput label="address 2" source="address_2" />
        <TextInput label="city" source="city" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="lat" source="lat" />
        <TextInput label="lot" source="long" />
        <TextInput label="Phone" source="phone" />
        <TextInput label="state" source="state" />
        <NumberInput step={1} label="zip" source="zip" />
      </SimpleForm>
    </Edit>
  );
};
