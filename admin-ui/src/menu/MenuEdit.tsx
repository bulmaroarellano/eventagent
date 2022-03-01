import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  NumberInput,
} from "react-admin";

export const MenuEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <BooleanInput label="isAvailable" source="isAvailable" />
        <NumberInput label="Item Price" source="itemPrice" />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
