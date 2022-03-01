import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const EmployeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="lastName" source="lastName" />
        <TextInput label="name" source="name" />
        <NumberInput label="roleID" source="roleId" />
      </SimpleForm>
    </Edit>
  );
};
