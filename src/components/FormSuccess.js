import React from "react";
import "./Form.css";
import img3 from "../images/img-3.svg";

const FormSuccess = () => {
  return (
    <div className="form-content-right">
      <h1 className="form-success">We have received your request!</h1>
      <img className="form-img-2" src={img3} alt="success-img" />
    </div>
  );
};

export default FormSuccess;
