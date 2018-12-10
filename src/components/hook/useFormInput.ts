import {useState} from "react";

export default function useFormInput(defaultValue: string) {
  const [value, setValue] = useState(defaultValue);
  function changeValue(e) {
    setValue(e.target.value);
  }
  return {
    value,
    onChange : changeValue
  }
}