import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const EmployeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="lastName" source="lastName" />
        <TextInput label="name" source="name" />
        <NumberInput label="roleID" source="roleId" />
      </SimpleForm>
    </Create>
  );
};
