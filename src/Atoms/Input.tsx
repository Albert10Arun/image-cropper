import { placeholder } from "@babel/types";
import { FC, InputHTMLAttributes } from "react";

interface InputElement extends InputHTMLAttributes<HTMLInputElement> {
  onChange?: (e: any) => void;
  type: string;
  placeholder?: string;
}

const Input: FC<InputElement> = ({ type, onChange, placeholder }) => {
  return (
    <>
      <input type={type} onChange={onChange} name={placeholder} />
    </>
  );
};

export default Input;
