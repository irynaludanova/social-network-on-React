import { Textarea } from "../../common/FormsControls/FormsControls";
import React from "react";
import {
  required,
  maxLengthCreator,
} from "../../../utils/validators/validators";
import { reduxForm, Field } from "redux-form";

let maxLength100 = maxLengthCreator(100);
const AddMessageForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          component={Textarea}
          validate={[required, maxLength100]}
          placeholder={"Enter your message"}
          name={"newMessageBody"}
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};
export default reduxForm({ form: "dialog-add-message-form" })(AddMessageForm);
