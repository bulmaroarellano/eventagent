import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const SettingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="item" source="itemm" />
        <TextInput label="value" source="value" />
      </SimpleForm>
    </Edit>
  );
};
