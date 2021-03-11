import React from "react";
import { reduxForm, Field } from "redux-form";
import { createField, Input } from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";
import classes from "./../common/FormsControls/FormControls.module.css";

const Login = ({ login, isAuth, captchaUrl }) => {
  const onSubmit = (formData) => {
    login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };
  if (isAuth) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <div>
      <h1>login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
    </div>
  );
};
const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField("Email", "email", [required], Input)}
      {createField("Password", "password", [required], Input, {
        type: "password",
      })}
      {createField(
        null,
        "rememberMe",
        [],
        Input,
        { type: "checkbox" },
        "Remember me"
      )}
      {captchaUrl && <img src={captchaUrl} />}
      {captchaUrl &&
        createField("Symbols from image", "captcha", [required], Input, {})}

      {error && <div className={classes.formSummaryError}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};
const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
});

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);
export default connect(mapStateToProps, { login })(Login);
