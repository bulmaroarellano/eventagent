import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const SettingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="item" source="itemm" />
        <TextInput label="value" source="value" />
      </SimpleForm>
    </Create>
  );
};
