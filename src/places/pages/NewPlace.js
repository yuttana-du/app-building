import React from "react";

import Input from "../../shared/components/FormElements/input";
import "./NewPlace.css";

const Newplace = () => {
  return (
    <form className="place-form">
      <Input
        element="input"
        type="text"
        label="Title"
        validators={[]}
        errorText="Please enter a valid title"
      />
    </form>
  );
};

export default Newplace;
