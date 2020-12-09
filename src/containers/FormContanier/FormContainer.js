import React from "react";
import Aux from "../../hoc/Aux/Aux";
import classes from "./FormContainer.module.css";
import { render } from "@testing-library/react";
import InformationForm from "../../components/Form/InformationForm";
import SignUpForm from "../../components/Form/SignUpForm";
import SignInForm from "../../components/Form/SignInForm";

function FomrContainer(props) {
  let displayContent = "";
  if (props.formType === "signUp") {
    displayContent = <SignUpForm history={props.history}/>;
  } else if (props.formType === "signIn") {
    displayContent = <SignInForm history={props.history}/>;
  }
  return (
    <Aux>
      <div className={classes.Container}>{displayContent}</div>
    </Aux>
  );
}

export default FomrContainer;
