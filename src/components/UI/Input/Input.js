import React, { useRef, useImperativeHandle } from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef(
  ({ labelText, type, id, state, onChange, onBlur }, ref) => {
    const inputRef = useRef();

    const active = () => {
      inputRef.current.focus();
    };

    useImperativeHandle(ref, () => {
      return { focus: active };
    });

    return (
      <>
        <div
          className={`${classes.control} ${
            state.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor={id}>{labelText}</label>
          <input
            type={type || "text"}
            id={id || ""}
            value={state.value}
            onChange={onChange}
            onBlur={onBlur}
            ref={inputRef}
          />
        </div>
      </>
    );
  }
);

export default Input;
