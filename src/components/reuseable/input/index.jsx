import React from "react";
import style from "./index.module.css";

const FormInput = ({ label, type, register, placeholder }) => {
  // console.log(register)
  return (
    <div className={style.form_group}>
      <label className="font-semibold">
        {label}
      </label>
      <input className={style.form_input} type={type} {...register} placeholder={placeholder} />
    </div>
  );
};

export default FormInput;
